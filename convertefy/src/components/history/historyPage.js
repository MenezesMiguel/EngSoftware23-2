import React from 'react';
import "./historyPage.css"

function HistoryPage({ conversoesSalvas }) {
  return (
    <div className="historico-conversoes">
      <h2>Histórico de Conversões</h2>
      <ul>
        {conversoesSalvas &&
          conversoesSalvas.map((conversao, index) => (
            typeof conversao === 'string' && <li key={index}>{conversao}</li>
          ))}
      </ul>
    </div>
  );
}

export default HistoryPage;
