// import React from "react";
// import { useState } from "react";
// import { useRef } from "react";
// import { useEffect } from "react";
// import { LinearScale } from "chart.js"; // Import LinearScale từ chart.js

// import { Chart, registerables } from "chart.js";
// Chart.register(...registerables);
// export default function LineChart() {
//   const ref = useRef(null);
//   const [chart, setChart] = useState();
//   useEffect(() => {
//     try {
//       if (ref.current != null) {
//         console.log(ref.current);
//         const consumptionCh = new Chart(ref.current, {
//           type: "bar",
//           data: {
//             labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//             datasets: [
//               {
//                 label: "# of Votes",
//                 data: [12, 19, 3, 5, 2, 3],
//                 borderWidth: 1,
//               },
//             ],
//           },
//           options: {
//             scales: {
//               x: {
//                 type: "time",
//                 time: {
//                   unit: "month",
//                 },
//                 ticks: {
//                   source: "labels",
//                 },
//               },
//               y: {
//                 beginAtZero: true,
//               },
//             },
//           },
//         });
//         setChart(consumptionCh);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }, []);

//   return (
//     <div>
//       <div>
//         <canvas ref={ref} id="myChart"></canvas>
//       </div>
//     </div>
//   );
// }
