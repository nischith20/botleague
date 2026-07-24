import { createContext, useContext, useState, useEffect, useCallback } from "react";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8000";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const getTokens = () => ({
    access: localStorage.getItem("access_token"),
    refresh: localStorage.getItem("refresh_token"),
  });

  const setTokens = (access, refresh) => {
    localStorage.setItem("access_token", access);
    if (refresh) localStorage.setItem("refresh_token", refresh);
  };

  const clearTokens = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setUser(null);
  };

  const refreshAccessToken = useCallback(async () => {
    const { refresh } = getTokens();
    if (!refresh) return false;
    try {
      const res = await fetch(`${API_BASE}/api/auth/refresh/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refresh }),
      });
      if (!res.ok) {
        clearTokens();
        return false;
      }
      const data = await res.json();
      setTokens(data.access, data.refresh);
      return true;
    } catch {
      clearTokens();
      return false;
    }
  }, []);

  const fetchUser = useCallback(async () => {
    const { access } = getTokens();
    if (!access) {
      setLoading(false);
      return;
    }
    try {
      const res = await fetch(`${API_BASE}/api/auth/me/`, {
        headers: { Authorization: `Bearer ${access}` },
      });
      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
      } else if (res.status === 401) {
        const refreshed = await refreshAccessToken();
        if (refreshed) {
          const { access: newAccess } = getTokens();
          const retry = await fetch(`${API_BASE}/api/auth/me/`, {
            headers: { Authorization: `Bearer ${newAccess}` },
          });
          if (retry.ok) {
            const data = await retry.json();
            setUser(data.user);
          } else {
            clearTokens();
          }
        } else {
          clearTokens();
        }
      } else {
        clearTokens();
      }
    } catch {
      clearTokens();
    } finally {
      setLoading(false);
    }
  }, [refreshAccessToken]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const login = async (email, password, adminOnly = false) => {
    const endpoint = adminOnly ? "/api/auth/admin/login/" : "/api/auth/login/";
    const res = await fetch(`${API_BASE}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.detail || "Login failed");
    }
    setTokens(data.access, data.refresh);
    setUser(data.user);
    return data.user;
  };

  const register = async (name, email, password, role) => {
    const res = await fetch(`${API_BASE}/api/auth/register/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, role }),
    });
    const data = await res.json();
    if (!res.ok) {
      const firstError = Object.values(data).flat().join(", ");
      throw new Error(firstError || "Registration failed");
    }
    setTokens(data.access, data.refresh);
    setUser(data.user);
    return data.user;
  };

  const logout = () => {
    clearTokens();
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, login, register, logout, isAuthenticated: !!user }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
