import { useState, useEffect } from 'react';

const staticToken = process.env.REACT_APP_STATIC_TOKEN as string;

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const token = getCookie('token');
    if (token === staticToken) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const login = (username: string, password: string) => {
    if (username === 'admin' && password === 'password') {
      setCookie('token', staticToken, 1);
      setIsAuthenticated(true);
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    deleteCookie('token');
    setIsAuthenticated(false);
  };

  const setCookie = (name: string, value: string, days: number) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
  };

  const getCookie = (name: string) => {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1);
      }
    }
    return '';
  };

  const deleteCookie = (name: string) => {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
  };

  return { isAuthenticated, login, logout };
};

export default useAuth;
