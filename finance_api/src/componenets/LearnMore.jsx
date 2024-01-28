import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function LearnMore() {
  const { id } = useParams();
  const [selectedData, setSelectedData] = useState(null);

  const fetchInfo = async()=>{
    const res = await fetch("https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v1/accounting/od/rates_of_exchange");
    const data = await res.json();

    setSelectedData(data.data[id]);
   

  }
  useEffect(() => {
    fetchInfo();
  }, []);
  

  return (
    <div>
      <h1>Learn More Page</h1>
      {selectedData ? (
        <div>
          <p>Country Currency Description: {selectedData.country_currency_desc}</p>
          <p>Currency: {selectedData.currency}</p>
          <p>Record Date: {selectedData.record_date}</p>
          <p>exchange rate: {selectedData.exchange_rate}</p>
          <p>record calendar quarter: {selectedData.record_calendar_quarter
}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default LearnMore;