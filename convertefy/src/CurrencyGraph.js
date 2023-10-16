// CurrencyGraph.js
import React, { useEffect, useState } from 'react';
import { Chart } from 'chart.js/auto';

const CurrencyGraph = ({ currencyCode }) => {
  const [historicalData, setHistoricalData] = useState([]);

  useEffect(() => {
    // Fetch historical data for the given currencyCode
    // Format the data into an array of objects with x and y values
    // Example:
    const formattedData = [
      { x: '2023-10-10', y: 1.2 },
      { x: '2023-10-11', y: 1.3 },
      // Add more data points as needed
    ];
    setHistoricalData(formattedData);
  }, [currencyCode]);

  useEffect(() => {
    // Create the chart once historicalData is available
    const ctx = document.getElementById('currencyChart').getContext('2d');
    let myChart = new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [{
          label: `Exchange Rate for ${currencyCode}`,
          data: historicalData,
          borderColor: 'rgba(75, 192, 192, 1)',
          fill: false,
        }]
      },
      options: {
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'day',
            },
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    });
    return () => {
      myChart.destroy();
    };
  }, [historicalData, currencyCode]);

  return <canvas id="currencyChart" width="400" height="400"></canvas>;
};

export default CurrencyGraph;
