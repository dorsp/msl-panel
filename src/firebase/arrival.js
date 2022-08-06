import firebase, { firestore, functions } from "./config";

/**
 * Creates A new Client
 * @param {*} clientId
 * @param {*} memberId
 * @param {*} firstName
 * @param {*} lastName
 * @param {*} facialUsed
 * @param {*} slimmingUsed
 * @param {*} companions
 * @param {*} locationName
 */
export const arrivalCreate = (
  clientId,
  memberId,
  fullName,
  facialUsed,
  slimmingUsed,
  companions,
  locationName,
  scheduleBy,
  assistedBy
) => {
  return firestore.collection("arrivals").add({
    clientId,
    memberId,
    fullName,
    facialUsed,
    slimmingUsed,
    companions,
    locationName,
    scheduleBy,
    assistedBy,
    timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
  });
};

/**
 * Finds client arrivals by its clientId
 * @param clientId
 */
export const getClientArrivals = async (clientId) => {
  let arrivals = [];
  try {
    const snapshot = await firestore
      .collection("arrivals")
      .where("clientId", "==", clientId)
      .get();
    snapshot.forEach((doc) => {
      arrivals.push({ id: doc.id, ...doc.data() });
    });

    return arrivals;
  } catch (error) {
    throw error;
  }
};

export const incrementFacialCounter = async (
  memberId,
  facialUsed,
  slimmingUsed
) => {
  try {
    const snapshot = await firestore.collection("members").doc(memberId).get();
    const incr = await firestore
      .collection("members")
      .doc(memberId)
      .update({
        facialCounter: snapshot.data().facialCounter + facialUsed,
        slimmingCounter: snapshot.data().slimmingCounter + slimmingUsed,
      });

    return incr;
  } catch (error) {
    throw error;
  }
};
