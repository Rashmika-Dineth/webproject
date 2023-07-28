import {collection, getDocs, query, where} from "firebase/firestore";
import AuthContext from "../components/Authentication/AuthContext";
import {useContext, useEffect, useState} from "react";
import {db} from "../components/Services/Firebase";

function About() {
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
  }, [authResult]);

  console.log(admins);

  return (
    <div>
      Welcome {authResult?.user?.displayName}
      <br />
      You are logged in as {admins.length === 1 ? "an Admin" : "a User"}
    </div>
  );
}

export default About;
