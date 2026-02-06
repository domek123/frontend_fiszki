import { createContext, useContext } from 'react';
import { useCreateSetLogic } from '@/hooks';

const CreateSetContext = createContext(null);

export const CreateSetProvider = ({ children }) => {
  const createSet = useCreateSetLogic();

  return <CreateSetContext.Provider value={createSet}>{children}</CreateSetContext.Provider>;
};

export const useCreateSetContext = () => {
  const context = useContext(CreateSetContext);
  if (!context) {
    throw new Error('useCreateSetContext must be used within a CreateSetProvider');
  }
  return context;
};
