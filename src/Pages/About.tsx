import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import AuthContext from "../components/Authentication/AuthContext";
import {useContext, useEffect, useState} from "react";
import {db} from "../components/Services/Firebase";
import Button from "@mui/material/Button";

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

  const WriteData = async () => {
    const citiesRef = collection(db, "cities");

    await setDoc(doc(citiesRef, "SF"), {
      name: "San Francisco",
      state: "CA",
      country: "USA",
      capital: false,
      population: 860000,
      regions: ["west_coast", "norcal"],
    });
    await setDoc(doc(citiesRef, "LA"), {
      name: "Los Angeles",
      state: "CA",
      country: "USA",
      capital: false,
      population: 3900000,
      regions: ["west_coast", "socal"],
    });
    await setDoc(doc(citiesRef, "DC"), {
      name: "Washington, D.C.",
      state: null,
      country: "USA",
      capital: true,
      population: 680000,
      regions: ["east_coast"],
    });
    await setDoc(doc(citiesRef, "TOK"), {
      name: "Tokyo",
      state: null,
      country: "Japan",
      capital: true,
      population: 9000000,
      regions: ["kanto", "honshu"],
    });
    await setDoc(doc(citiesRef, "BJ"), {
      name: "Beijing",
      state: null,
      country: "China",
      capital: true,
      population: 21500000,
      regions: ["jingjinji", "hebei"],
    });
  };

  const ReadData = async () => {
    const docRef = doc(db, "modules", "6reaix8LrQ6qc1kn7PfI");
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data());
  };

  return (
    <div>
      Welcome {authResult?.user?.displayName}
      <br />
      You are logged in as {admins.length === 1 ? "an Admin" : "a User"}
      <Button
        onClick={() => WriteData()}
        fullWidth
        variant="contained"
        color="secondary"
        sx={{mt: 3, mb: 2}}
      >
        WRITE DATA
      </Button>
      <Button
        onClick={() => ReadData()}
        fullWidth
        variant="contained"
        color="secondary"
        sx={{mt: 3, mb: 2}}
      >
        READ DATA
      </Button>
    </div>
  );
}

export default About;
