import { firestore } from "./config";

export const getTotal = async (collection) => {
  const list = await firestore.collection(collection).get();
  return list.size;
};
