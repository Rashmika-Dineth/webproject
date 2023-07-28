import {createContext} from "react";
import {useState} from "react";

type AdminContextType = {
  title: string;
  setTitle: (title: string) => void;
};

export const AdminContext = createContext<AdminContextType | null>(null);

export const AdminProvider = ({children}: {children: React.ReactNode}) => {
  const [title, setTitle] = useState<any>("Please select the page");
  return (
    <AdminContext.Provider
      value={{
        title,
        setTitle,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
