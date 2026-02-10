import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  annotationPlugin
);

function TempChart({ history }) {
  // Oldest → latest for correct graph direction
  const orderedHistory = [...history].reverse();

  const labels = orderedHistory.map((item) =>
    new Date(item.createdAt).toLocaleTimeString()
  );

  const insideTemps = orderedHistory.map((item) => item.tempInside);
  const outsideTemps = orderedHistory.map((item) => item.tempOutside);

  const data = {
    labels,
    datasets: [
      {
        label: "Temp Inside (°C)",
        data: insideTemps,
        borderColor: "red",
        backgroundColor: "rgba(255, 0, 0, 0.15)",
        tension: 0.4,

        // 🔴 Mark unsafe points in RED
        pointBackgroundColor: insideTemps.map((temp) =>
          temp < 2 || temp > 6 ? "red" : "green"
        ),
        pointRadius: insideTemps.map((temp) =>
          temp < 2 || temp > 6 ? 6 : 3
        )
      },
      {
        label: "Temp Outside (°C)",
        data: outsideTemps,
        borderColor: "blue",
        backgroundColor: "rgba(0, 0, 255, 0.15)",
        tension: 0.4,
        pointRadius: 3
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top"
      },

      // 🟩 Safe temperature zone
      annotation: {
        annotations: {
          safeZone: {
            type: "box",
            yMin: 2,
            yMax: 6,
            backgroundColor: "rgba(0, 200, 0, 0.15)",
            borderWidth: 0,
            label: {
              display: true,
              content: "Safe Zone (2–6 °C)",
              position: "center",
              color: "green",
              font: {
                weight: "bold"
              }
            }
          }
        }
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Time",
          font: {
            weight: "bold",
            size: 22
          }
        }
      },
      y: {
        title: {
          display: true,
          text: "Temperature (°C)",
          font: {
            weight: "bold",
            size: 22
          }
        }
      }
    }
  };

  return <Line data={data} options={options} />;
}

export default TempChart;
