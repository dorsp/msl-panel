import firebase, { firestore } from "./config";

/**
 * Finds a client by its Id
 * @param userId
 */
export const getClientById = async (userId) => {
  try {
    const snapshot = await firestore.collection("clients").doc(userId).get();
    if (!snapshot.exists) return null;
    return snapshot.data();
  } catch (error) {
    throw error;
  }
};

/**
 * Finds a membershipCard by its memberId
 * @param memberId
 */
export const getClientMembership = async (memberId) => {
  try {
    const snapshot = await firestore.collection("members").doc(memberId).get();
    if (!snapshot.exists) return null;
    return snapshot.data();
  } catch (error) {
    throw error;
  }
};

/**
 * Returns a list of clients
 */
export const clients = async () => {
  let clients = [];
  try {
    const querySnapShot = await firestore.collection("clients").get();
    querySnapShot.forEach((doc) => {
      clients.push(doc.data());
    });
    return clients;
  } catch (error) {
    throw error;
  }
};
/**
 * Gets the Total Number of Clients
 */
export const totalClients = async () => {
  const clients = await firestore.collection("clients").get();
  return clients.size;
};

/**
 * Creates A new Client
 * @param {*} firstName
 * @param {*} lastName
 * @param {*} email
 * @param {*} age
 * @param {*} sex
 * @param {*} callCenter
 * @param {*} clientClass
 * @param {*} memberId
 * @param {*} phone
 */
export const clientCreate = (
  firstName,
  lastName,
  email,
  age,
  sex,
  callCenter,
  clientClass,
  memberId,
  phone,
  address
) => {
  return firestore.collection("clients").add({
    firstName,
    lastName,
    email,
    age,
    sex,
    callCenter,
    clientClass,
    memberId,
    phone,
    address,
    timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
  });
};

/**
 * Creates A new Member
 * @param {*} clientId
 * @param {*} membershipType
 * @param {*} facials
 * @param {*} facialCounter
 * @param {*} slimming
 * @param {*} slimmingcounter
 * @param {*} companions
 */
export const memberCreate = async (
  clientId,
  membershipType,
  facials,
  facialCounter,
  slimming,
  slimmingCounter,
  companions
) => {
  const docRef = await firestore.collection("members").add({
    clientId,
    membershipType,
    facials,
    facialCounter,
    slimming,
    slimmingCounter,
    companions,
    timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
  });
  await firestore.collection("clients").doc(clientId).update({
    memberId: docRef.id,
  });
};

/**
 * Update a Client Document
 */
export const clientUpdate = async (
  clientId,
  firstName,
  lastName,
  email,
  age,
  sex,
  callCenter,
  clientClass,
  phone,
  address
) => {
  return firestore.collection("clients").doc(clientId).update({
    firstName,
    lastName,
    email,
    age,
    sex,
    callCenter,
    clientClass,
    phone,
    address,
    lastUpdateTimeStamp: firebase.firestore.FieldValue.serverTimestamp(),
  });
};

/**
 * Delete a client
 */
export const clientDelete = (id, memberId) => {
  firestore.collection("clients").doc(id).delete();
  firestore.collection("members").doc(memberId).delete();
};
