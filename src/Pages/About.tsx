import AuthContext from "../components/Authentication/AuthContext";
import {useContext} from "react";
import {getDatabase, ref, push, set} from "firebase/database";
import {db} from "../components/Services/Firebase";

function About() {
  const db = getDatabase();
  const postListRef = ref(db, "posts");
  const newPostRef = push(postListRef);
  set(newPostRef, {
    "ts-functions": {
      metrics: {
        views: 1200000,
        likes: 251000,
        shares: 1200,
      },
      title: "Why you should use TypeScript for writing Cloud Functions",
      author: "Doug",
    },
    "android-arch-3": {
      metrics: {
        views: 900000,
        likes: 117000,
        shares: 144,
      },
      title:
        "Using Android Architecture Components with Firebase Realtime Database (Part 3)",
      author: "Doug",
    },
  });

  const {authResult} = useContext<any>(AuthContext);
  console.log(authResult);
  return <div>Welcome {authResult?.user?.displayName}</div>;
}

export default About;
