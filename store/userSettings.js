import { createContext, useState } from 'react';
export const settingsContextConfig = createContext({
  settings: {
    difLevel: 'easy',
    questionsQuantity: 10 
    },
  setSettings: ()=>{}
});
export default function SettingsCtx({ children }) {
  const [settings, setSettings] = useState({
    difLevel: 'easy',
    questionsQuantity: 10,
  });
  return (
    <settingsContextConfig.Provider
      value={{
      settings,
      setSettings
      }}
    >
      {children}
    </settingsContextConfig.Provider>
  );
}
