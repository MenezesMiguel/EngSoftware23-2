import React from 'react';
import './historyPage.css';

function HistoryPage ({ conversoesSalvas }) {
  return (
    <div className="historico-conversoes">
      <h2>Histórico de Conversões</h2>
      <ul>
        {conversoesSalvas.map((conversao, index) => (
          <li key={index}>{conversao}</li>
        ))}
      </ul>
    </div>
  );
}

export default HistoryPage;
