import { useState, useEffect } from "react";
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../firebase/firebase.util";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection("images");
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        //not same url from above
        //const createdAt = new Date();
        const createdAt = timestamp();
        const url = await storageRef.getDownloadURL();
        collectionRef.add({ url, createdAt });
        setUrl(url);
      }
    );
  }, [file]);
  //setted values
  return { progress, url, error };
};

export default useStorage;
