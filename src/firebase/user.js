import firebase, { firestore } from "./config";

/**
 * Finds a user by its Id
 * @param userId
 */
export const getUserById = async (id) => {
  try {
    const snapshot = await firestore.collection("users").doc(id).get();
    if (!snapshot.exists) return null;
    return snapshot.data();
  } catch (error) {
    throw error;
  }
};

export const users = async () => {
  let users = [];
  try {
    const querySnapShot = await firestore.collection("users").get();
    querySnapShot.forEach((doc) => {
      users.push(doc.data());
    });
    return users;
  } catch (error) {
    throw error;
  }
};

export const totalUsers = async () => {
  const users = await firestore.collection("users").get();
  return users.size;
};

export const userCreate = (
  firstName,
  lastName,
  phone,
  password,
  role,
  email
) => {
  return firestore.collection("users").add({
    firstName,
    lastName,
    phone,
    password,
    role,
    email,
    timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
  });
};

export const userDelete = (id) => {
  return firestore.collection("users").doc(id).delete();
};
