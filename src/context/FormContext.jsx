import { createContext, useContext, useState } from 'react';

const FormContext = createContext(null);

export function FormProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const open  = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  return (
    <FormContext.Provider value={{ isOpen, open, close }}>
      {children}
    </FormContext.Provider>
  );
}

export function useForm() {
  const ctx = useContext(FormContext);
  if (!ctx) throw new Error('useForm must be used within FormProvider');
  return ctx;
}