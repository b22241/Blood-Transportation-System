import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

function HumidityChart({ history }) {
  // Ensure correct time order (oldest → latest)
  const orderedHistory = [...history].reverse();

  const labels = orderedHistory.map((item) =>
    new Date(item.createdAt).toLocaleTimeString()
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Humidity Inside (%)",
        data: orderedHistory.map((item) => item.humidityInside),
        borderColor: "green",
        backgroundColor: "rgba(0, 200, 0, 0.2)",
        tension: 0.4
      },
      {
        label: "Humidity Outside (%)",
        data: orderedHistory.map((item) => item.humidityOutside),
        borderColor: "purple",
        backgroundColor: "rgba(128, 0, 128, 0.2)",
        tension: 0.4
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top"
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Time"
        }
      },
      y: {
        title: {
          display: true,
          text: "Humidity (%)"
        },
        min: 0,
        max: 100
      }
    }
  };

  return <Line data={data} options={options} />;
}

export default HumidityChart;
