import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Line } from "react-chartjs-2";

function App() {
  const labels = ["1 月", "2 月", "3 月", "4 月", "5 月", "6 月"];
  const graphData = {
    // eslint-disable-next-line object-shorthand
    labels: labels,
    datasets: [
      {
        label: "A社",
        data: [65, 59, 60, 81, 56, 55],
        borderColor: "rgb(75, 192, 192)",
      },
      {
        label: "B社",
        data: [60, 55, 57, 61, 75, 50],
        borderColor: "rgb(75, 100, 192)",
      },
    ],
  };

  // eslint-disable-next-line @typescript-eslint/ban-types
  const options: {} = {
    maintainAspectRatio: false,
  };

  const divStyle: React.CSSProperties = {
    marginLeft: "auto",
    marginRight: "auto",
    margin: "10px",
    width: "500px",
  };

  return (
    <div className="App" style={divStyle}>
      <Line
        height={300}
        width={300}
        data={graphData}
        options={options}
        id="chart-key"
      />
    </div>
  );
}

export default App;
