import React, { useState, useEffect } from "react";
import "./historyPage.css";

function HistoryPage() {
  const [conversions, setConversions] = useState([]);

  useEffect(() => {
    // console.log("`aha`");
    // fetch("http://localhost:3001/conversions", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((conversions) => {
    //     setConversions(conversions);
    //   })
    //   .catch((e) => console.log(e));
  });

  return (
    <div className="historico-conversoes">
      <h2>Histórico de Conversões</h2>
      {/* <ul>
        {conversions.map((conversao, index) => (
          <li key={index}>{conversao}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default HistoryPage;
