import {createContext} from "react";
import {useState} from "react";

type ModuleContextType = {
  title: string;
  update: string;
  setTitle: (title: string) => void;
  setUpdate: (update: string) => void;
};

export const ModuleContext = createContext<ModuleContextType | null>(null);

export const AdminProvider = ({children}: {children: React.ReactNode}) => {
  const [title, setTitle] = useState("Modules");
  const [update, setUpdate] = useState("");
  return (
    <ModuleContext.Provider
      value={{
        title,
        update,
        setTitle,
        setUpdate,
      }}
    >
      {children}
    </ModuleContext.Provider>
  );
};
