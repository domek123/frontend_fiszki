import { useCreateSet } from "@hooks/useCreateSet";
import { createContext, useContext } from "react";

const CreateSetContext = createContext(null);

export const CreateSetProvider = ({ children }) => {
  const createSet = useCreateSet();

  return (
    <CreateSetContext.Provider value={createSet}>
      {children}
    </CreateSetContext.Provider>
  );
};

export const useCreateSetContext = () => {
  const context = useContext(CreateSetContext);
  if (!context) {
    throw new Error(
      "useCreateSetContext must be used within a CreateSetProvider"
    );
  }
  return context;
};
