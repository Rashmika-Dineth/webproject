import AuthContext from "../components/Authentication/AuthContext";
import {useContext} from "react";

function About() {
  // const FirestoreAdd = async () => {
  //   try {
  //     const docRef = await addDoc(collection(db, "modules"), {
  //       id: 5,
  //       title: "Module 5",
  //       unit: "15",
  //       level: 4,
  //       description: "sample module 5",
  //       batch: "unknown",
  //     });

  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // };

  const {authResult} = useContext<any>(AuthContext);

  return <div>Welcome {authResult?.user?.displayName}</div>;
}

export default About;
