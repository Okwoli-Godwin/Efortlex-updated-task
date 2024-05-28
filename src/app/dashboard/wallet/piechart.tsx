'use client'

import React from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Sector } from "recharts"

const data = [
        { name: 'Group A', value: 700 },
        { name: 'Group B', value: 200 },
        { name: 'Group C', value: 300 },
    ];

    const COLORS = ['#5C00B2', '#EDDFFF', '#CC96FF']

const Piechart = () => {
    
  return (
    <ResponsiveContainer width="100%" height={165}>
        <PieChart >
            <defs>
            <clipPath id="clip">
              <circle cx="50%" cy="50%" r="80" />
            </clipPath>
          </defs>
             <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                cornerRadius={10} // Adding rounded corners
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