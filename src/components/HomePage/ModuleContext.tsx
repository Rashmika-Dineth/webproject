import {createContext} from "react";
import {useState} from "react";

type ModuleContextType = {
  title: string;
  setTitle: (title: string) => void;
};

const ModuleContext = createContext<ModuleContextType | null>(null);

const [title, setTitle] = useState<any>({
  title: "Module Name",
});

export const ModuleProvider = ({children}: {children: React.ReactNode}) => {
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
