import {createContext} from "react";
import {useState} from "react";

type UserContextType = {
  title: string;
  update: string;
  setTitle: (title: string) => void;
  setUpdate: (update: string) => void;
};

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({children}: {children: React.ReactNode}) => {
  const [title, setTitle] = useState("Users");
  const [update, setUpdate] = useState("");
  return (
    <UserContext.Provider
      value={{
        title,
        update,
        setTitle,
        setUpdate,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
