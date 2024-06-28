'use client'

import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Sector } from 'recharts'

const data = [
  { name: 'Group A', value: 700 },
  { name: 'Group B', value: 200 },
  { name: 'Group C', value: 300 },
]

const COLORS = ['#5C00B2', '#EDDFFF', '#CC96FF']
const RADIAN = Math.PI / 180

const renderCustomShape = (props: any) => {
  const {
    cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill,
  } = props
  const radius = (outerRadius - innerRadius) / 2
  const innerMiddle = innerRadius + radius
  const outerMiddle = outerRadius - radius

  const startArcX = cx + outerMiddle * Math.cos(-startAngle * RADIAN)
  const startArcY = cy + outerMiddle * Math.sin(-startAngle * RADIAN)

  const endArcX = cx + outerMiddle * Math.cos(-endAngle * RADIAN)
  const endArcY = cy + outerMiddle * Math.sin(-endAngle * RADIAN)

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <circle
        cx={startArcX}
        cy={startArcY}
        r={radius}
        fill={fill}
      />
      <circle
        cx={endArcX}
        cy={endArcY}
        r={radius}
        fill={fill}
      />
    </g>
  )
}

const Piechart = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius="50%"
          outerRadius="80%"
          fill="#8884d8"
          dataKey="value"
          startAngle={90}
          endAngle={450}
          activeShape={renderCustomShape}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <text
          x="50%"
          y="45%"
          textAnchor="middle"
          dominantBaseline="middle"
          style={{ fontSize: '24px', fontWeight: 'bold' }}
        >
          16%
        </text>
        <text
          x="50%"
          y="55%"
          textAnchor="middle"
          dominantBaseline="middle"
          style={{ fontSize: '16px', color: '#666', marginTop: '4px' }}
        >
          income flow
        </text>
      </PieChart>
    </ResponsiveContainer>
  )
}

export default Piechart
