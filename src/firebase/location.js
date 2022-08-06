import firebase, { firestore } from "./config";

export const locationCreate = (name) => {
  return firestore.collection("locations").add({
    name,
    timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
  });
};

export const locationUpdate = (id, name) => {
  return firestore.collection("locations").doc(id).update(name);
};

export const locationDelete = (id) => {
  return firestore.collection("locations").doc(id).delete();
};
