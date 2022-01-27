import React from "react";
import firebase from "firebase";

export const useGetData = () => {
  const [documents, setDocuments] = React.useState([]);
  const db = firebase.firestore();
  const querySnapshot=db.collection("values").onSnapshot((snapshot) => {return snapshot})
  React.useEffect(() => {
    db.collection("values")
      .get()
      .then((querySnapshot) => {
        let arr = [];
        querySnapshot.docs.map((doc) =>
          arr.push({ id: doc.id, value: doc.data() })
        );
        setDocuments(arr);
      });
  }, [db,querySnapshot]);
  return [documents];
};
