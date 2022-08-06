import { auth } from "./config";

/**
 * Signs in a user
 * @param email User's email
 * @param password User' password
 */
export const signin = async (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};

/**
 * Signs out a user
 */
export const signout = async () => {
  return auth.signOut();
};
