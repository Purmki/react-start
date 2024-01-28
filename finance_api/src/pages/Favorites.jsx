import { useState, useEffect } from "react";
import { db } from "../componenets/config/firebase";
import { onSnapshot, collection, getDocs } from "firebase/firestore";
import { deleteDoc, doc, query, where } from "firebase/firestore";

function Favorites(props) {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchDataFromFirestore = async () => {
      try {
        const favoritesCollection = collection(db, "finance info");
        const userFavoritesQuery = query(
          favoritesCollection,
          where("userId", "==", props.user.uid)
        );
        const querySnapshot = await getDocs(userFavoritesQuery);
        console.log(querySnapshot);
       setApiData( querySnapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        }))
        // const unsubscribe = onSnapshot(favoritesCollection, (snapshot) => {
        //   const data = snapshot.docs.map((doc) => {
        //     return { ...doc.data(), id: doc.id };
        //   });
        //   setApiData(data);
        // });
        // return () => unsubscribe();
      } catch (error) {
        console.error("Error fetching data from Firestore: ", error);
      }
    };

   props.user? fetchDataFromFirestore():null;
  },[props.user]);

  const deleteHandler = async (financeInfo) => {
    try {
      // const financeInfo = apiData[index];
      const docRef = doc(db, "finance info", financeInfo.id);

      await deleteDoc(docRef);
      const updatedApiData = apiData.filter(
        (item) => item.id !== financeInfo.id
      );
      setApiData(updatedApiData);
    } catch (error) {
      console.error("Error removing document: ", error);
    }
  };

  return (
    <div>
      {props.user ? (
        <>
          <h1>Favorites</h1>
          {apiData.length > 0 ? (
            <ul>
              {apiData.map((financeInfo, index) => (
                <div key={index}>
                  <li>{financeInfo.country_currency_desc}</li>
                  <p>{financeInfo.currency}</p>
                  <p>{financeInfo.record_date}</p>
                  <button id={index} onClick={() => deleteHandler(financeInfo)}>
                    delete
                  </button>
                </div>
              ))}
            </ul>
          ) : (
            <p>No favorites found.</p>
          )}
        </>
      ) : (
        <p>You're not signed up.</p>
      )}
    </div>
  );
}

export default Favorites;
