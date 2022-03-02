import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    }
  }
}

const labels = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC']

const data = {
  labels,
  datasets: [
    {
      label: 'Abiertos',
      data: labels.map(() => Math.floor(Math.random() * 99)),
      backgroundColor: 'rgba(53, 162, 235, 0.5)'
    },
    {
      label: 'Cerrados',
      data: labels.map(() => Math.floor(Math.random() * 99)),
      backgroundColor: 'rgba(255, 99, 132, 0.5)'
    }
  ]
}

const VerticalBarChart = () => {
  return <Bar options={options} data={data} />
}

export default VerticalBarChart
