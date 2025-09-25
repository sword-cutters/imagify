import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [creditBalance, setCreditBalance] = useState(0); // Renamed from credit

  const backendURL = import.meta.env.VITE_BACKEND_URL;
  console.log('Backend URL:', backendURL); // Added for debugging

  const loadCreditsData = async () => {
    try {
      const { data } = await axios.get(`${backendURL}/api/user/credits`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (data.success) {
        setCreditBalance(data.credits); // Updated to creditBalance
        setUser(data.user);
      }
    } catch (error) {
      console.error('Load credits error:', error); // Added for debugging
      toast.error(error.response?.data?.message || error.message);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
    setUser(null);
    setCreditBalance(0); // Updated to creditBalance
  };

  useEffect(() => {
    if (token) {
      loadCreditsData();
    }
  }, [token]);

  const value = {
    user,
    setUser,
    showLogin,
    setShowLogin,
    backendURL,
    token,
    setToken,
    creditBalance, // Updated to creditBalance
    setCreditBalance, // Updated to setCreditBalance
    loadCreditsData,
    logout,
  };

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

export default AppContextProvider;