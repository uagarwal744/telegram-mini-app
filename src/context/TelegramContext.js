// TelegramContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';

const TelegramContext = createContext(null);

export const TelegramProvider = ({ children }) => {
  const [webApp, setWebApp] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const tg = window.Telegram.WebApp;
    setWebApp(tg);
    setUser(tg.initDataUnsafe?.user);
    tg.ready();
  }, []);

  return (
    <TelegramContext.Provider value={{ webApp, user }}>
      {children}
    </TelegramContext.Provider>
  );
};

export const useTelegram = () => useContext(TelegramContext);