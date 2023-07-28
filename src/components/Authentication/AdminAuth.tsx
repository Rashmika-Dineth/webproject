import {collection, getDocs, query, where} from "firebase/firestore";
import {useContext, useEffect, useState} from "react";
import AuthContext from "./AuthContext";
import {db} from "../Services/Firebase";

function AdminAuth() {
  const {authResult} = useContext<any>(AuthContext);
  const [admins, setAdmins] = useState<any>([]);
  const usersCollectionRef = collection(db, "users");
  const q = query(
    usersCollectionRef,
    where("role", "==", "1"),
    where("id", "==", authResult?.user?.email ?? null)
  );

  useEffect(() => {
    const getModules = async () => {
      const data = await getDocs(q);
      setAdmins(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };

    getModules().then();
    // eslint-disable-next-line
  }, [authResult?.user?.email]);

  return admins.length === 1 ? true : false;
}

export default AdminAuth;
