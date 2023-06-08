import { createContext, useContext } from 'react';
export const settingsContextConfig = createContext({
  difLevel: 'easy',
  questionsQuantity: 10,
});
export default function settingsCtx({ children }) {
  const [difLevel, setDifLevel] = useContext('easy');
  const [questionsQuantity, setQuestionsQuantity] = useContext(10);
  return (
    <settingsCtx.Provider
      value={{
        difLevel,
        setDifLevel,
        questionsQuantity,
        setQuestionsQuantity,
      }}
    >
      {children}
    </settingsCtx.Provider>
  );
}
