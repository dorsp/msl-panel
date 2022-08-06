import { useEffect, useState } from "react";
import { firestore } from "../firebase/config";

const useLists = (collection) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const unsub = firestore
      .collection(collection)
      .onSnapshot((querySnapshot) => {
        var data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setList(data);
      });
    return unsub;
  }, []);

  return list;
};

export default useLists;
