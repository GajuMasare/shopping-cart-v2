// src/utils/saveToFirestore.js
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const saveToFirestore = async (cartItems) => {
  try {
    const cartRef = collection(db, "cartItems");
    const docRef = await addDoc(cartRef, {
      items: cartItems,
      createdAt: new Date().toISOString(),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

export default saveToFirestore;
