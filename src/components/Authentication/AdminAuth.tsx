import {collection, getDocs, query, where} from "firebase/firestore";
import {useContext, useEffect, useState} from "react";
import AuthContext from "./AuthContext";
import {db} from "../Services/Firebase";

function AdminAuth() {
  const {authResult} = useContext<any>(AuthContext);
  const [admins, setAdmins] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const usersCollectionRef = collection(db, "users");
  const q = query(
    usersCollectionRef,
    where("role", "==", "1"),
    where("id", "==", authResult?.user?.email ?? null)
  );

  useEffect(() => {
    const getModules = async () => {
      const data = await getDocs(q);
      data.docs.length === 0 ? setLoading(true) : setLoading(false);
      setAdmins(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };

    getModules().then();
    // eslint-disable-next-line
  }, [authResult?.user?.email]);

  if (loading) return loading;

  return admins.length;
}

export default AdminAuth;
