import { useEffect, useState } from "react";
import { db } from "../componenets/config/firebase";
import { addDoc, collection, doc, deleteDoc} from "firebase/firestore";
import { Link, useParams } from "react-router-dom";
import "../design/Home.css"

function Home(props) {
  const { index } = useParams();
  const [apiData, setApiData] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const apiUrl =
    "https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v1/accounting/od/rates_of_exchange";

  const saveFavoriteHandler = async (financeInfo) => {
    try {
      const favoritesCollection = collection(db, "finance info");
      console.log(financeInfo);
      const docRef = await addDoc(favoritesCollection, {
        country_currency_desc: financeInfo.country_currency_desc,
        currency: financeInfo.currency,
        record_date: financeInfo.record_date,
        userId: props.user.uid,
      });

      console.log("Document written with ID: ", docRef.id);
      setFavorites((prevFavorites) => [...prevFavorites, financeInfo.currency]);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const deleteHandler = async (financeInfo) => {
    try {
      // const financeInfo = apiData[index];
      console.log(financeInfo);
      // find the document by using query and Where
      // and filter by the currency file
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

  function fetchData() {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((obj) => {
        console.log(obj);
        setApiData(obj.data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="worldDiv">
       <h1>Data from API:</h1>
      {apiData ? (
        
          <ul>
            {console.log(apiData)}
            {apiData.map((financeInfo,index) => (
              <div key={index}>
                <div className="basicInfoCont">
                <li>{financeInfo.country_currency_desc}</li>
                <p>{financeInfo.currency}</p>
                <p>{financeInfo.record_date}</p>
                </div>
                {!favorites.includes(financeInfo.currency) ? (
                
                  <button onClick={() => saveFavoriteHandler(financeInfo)}>
                    Favorite
                  </button>
               
                ) : (
                  <button onClick={() =>deleteHandler(financeInfo)}>Delete</button>
                )}
                
                <Link to={`/learn-more/${index}`}>
                  <button>Learn More</button>
                </Link>
              </div>
            ))}
          </ul>
        
      ) : (
        <p>No data was found</p>
      )}
    </div>
  );
}

export default Home;
