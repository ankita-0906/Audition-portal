import app from "./index";
import { getDatabase, ref, set } from "firebase/database"
import { v4 as uuidv4 } from 'uuid';

const db = getDatabase(app);

 function storeData(largeArray) {
    const userId = uuidv4();
    const arrayRef = ref(db, `data/${userId}`);
      set(arrayRef, largeArray)
      .then(() => {
        console.log("Array successfully stored in Realtime Database!");
      })
      .catch((error) => {
        console.error("Error storing array: ", error);
      });
  }
  
export default storeData;

