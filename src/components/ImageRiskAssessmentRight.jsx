import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  {
    name: 'Critical',
    count: 99,
    color: '#FF0000', // Red
  },
  {
    name: 'High',
    count: 750,
    color: '#FF8C00', // Orange
  },
  {
    name: 'Medium',
    count: 600,
    color: '#FFD700', // Yellow
  },
  {
    name: 'Low',
    count: 911,
    color: '#B0C4DE', // Light gray-blue
  },
];

const ImageRiskAssessmentRight = () => {
  const totalVulnerabilities = data.reduce((acc, item) => acc + item.count, 0);

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '10px', width: '100%' }}>
      <h4>Risk Assessment</h4>
      <p>{totalVulnerabilities} Total Vulnerabilities</p>
      <ResponsiveContainer width="100%" height={50}>
        <BarChart data={data} layout="vertical" barCategoryGap={0}>
          <XAxis type="number" hide />
          <YAxis type="category" dataKey="name" hide />
          <Tooltip />
          <Bar dataKey="count" layout="vertical">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ImageRiskAssessmentRight;
