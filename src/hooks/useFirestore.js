import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/firebase.util";

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = projectFirestore.collection(collection);
    unsub.orderBy("createdAt", "desc").onSnapshot((snap) => {
      //console.log(snap);
      let documents = [];
      snap.docs.map((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
        return documents;
      });
      console.log(documents);
      setDocs(documents);
    });

    return () => unsub();
  }, [collection]);

  return { docs };
};

export default useFirestore;
