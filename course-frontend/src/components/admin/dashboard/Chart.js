import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend,
} from "chart.js";
import { Line, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend
);
export const LineChart = () => {
  //   const labels = ["DUMMY1", "DUMMY2", "DUMMY3", "DUMMY4"];
  const labels = getLastYearMonths();
  const options = {
    responsive: true,
    plugins: {
      legend: {
        positon: "bottom",
      },
      title: {
        display: true,
        text: "Yearly Views",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Views",
        data: [1, 2, 3, 4],
        borderColor: "rgba(5, 171, 99, 0.5)",
        backgroundColor: "rgb(5, 171, 99)",
      },
    ],
  };
  return <Line options={options} data={data} />;
};

export const DoughnutChart = () => {
  const data = {
    labels: ["Subscribed", "Not Subscribed"],
    datasets: [
      {
        label: "Views",
        data: [2, 20],
        borderColor: ["rgb(0, 255, 0)", "rgb(255, 0, 0)"],
        backgroundColor: ["rgba(0, 255, 0, 0.3)", "rgba(255, 0, 0, 0.3)"],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data} />;
};

function getLastYearMonths() {
  const labels = [];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentMonth = new Date().getMonth();
  const remain = 11 - currentMonth;

  for (let i = currentMonth; i < months.length; i--) {
    const element = months[i];
    labels.unshift(element);
    if (i === 0) break;
  }

  for (let i = 11; i > remain; i--) {
    if (i === currentMonth) break;
    const element = months[i];
    labels.unshift(element);
  }

  return labels;
}
