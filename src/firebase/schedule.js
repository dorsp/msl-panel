import { firestore } from "../firebase/config";
export const scheduleCreate = (location, client, facial, rf, cocoon, ems) => {
  return firestore.collection("schedules").add({
    location,
    client,
    facial,
    rf,
    cocoon,
    ems,
  });
};

export const scheduleDelete = (id) => {
  return firestore.collection("schedules").doc(id).delete();
};
