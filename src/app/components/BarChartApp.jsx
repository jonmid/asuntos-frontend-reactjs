import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const BarChartApp = () => {
  const data = [
    { name: 'ENE', cerrado: 4000, abierto: 2400 },
    { name: 'FEB', cerrado: 3000, abierto: 1398 },
    { name: 'MAR', cerrado: 2000, abierto: 9800 },
    { name: 'ABR', cerrado: 2780, abierto: 3908 },
    { name: 'MAY', cerrado: 1890, abierto: 4800 },
    { name: 'JUN', cerrado: 2390, abierto: 3800 },
    { name: 'JUL', cerrado: 3490, abierto: 300 },
    { name: 'AGO', cerrado: 2400, abierto: 4300 },
    { name: 'SEP', cerrado: 1190, abierto: 4300 },
    { name: 'OCT', cerrado: 8230, abierto: 4300 },
    { name: 'NOV', cerrado: 7110, abierto: 4300 },
    { name: 'DIC', cerrado: 8490, abierto: 4300 }
  ]

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey='abierto' fill='#9333ea' barSize={8} />
        <Bar dataKey='cerrado' fill='#fb923c' barSize={8} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default BarChartApp
