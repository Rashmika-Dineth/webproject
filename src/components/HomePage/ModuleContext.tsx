import {createContext} from "react";
import {useState} from "react";

type ModuleContextType = {
  title: string;
  setTitle: (title: string) => void;
};

export const ModuleContext = createContext<ModuleContextType | null>(null);

export const ModuleProvider = ({children}: {children: React.ReactNode}) => {
  const [title, setTitle] = useState<any>("Please select the Module");
  return (
    <ModuleContext.Provider
      value={{
        title,
        setTitle,
      }}
    >
      {children}
    </ModuleContext.Provider>
  );
};
