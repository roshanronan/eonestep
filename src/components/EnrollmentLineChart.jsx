import React, { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, LabelList
} from 'recharts';

// Example year-wise data
const yearData = {
  2023: [
    { month: 'Jan', students: 100 },
    { month: 'Feb', students: 120 },
    { month: 'Mar', students: 140 },
    { month: 'Apr', students: 160 },
    { month: 'May', students: 180 },
    { month: 'Jun', students: 200 },
    { month: 'Jul', students: 220 },
    { month: 'Aug', students: 210 },
    { month: 'Sep', students: 190 },
    { month: 'Oct', students: 170 },
    { month: 'Nov', students: 150 },
    { month: 'Dec', students: 130 },
  ],
  2024: [
    { month: 'Jan', students: 120 },
    { month: 'Feb', students: 98 },
    { month: 'Mar', students: 150 },
    { month: 'Apr', students: 200 },
    { month: 'May', students: 170 },
    { month: 'Jun', students: 210 },
    { month: 'Jul', students: 250 },
    { month: 'Aug', students: 230 },
    { month: 'Sep', students: 190 },
    { month: 'Oct', students: 220 },
    { month: 'Nov', students: 180 },
    { month: 'Dec', students: 160 },
  ],
  2025: [
    { month: 'Jan', students: 140 },
    { month: 'Feb', students: 160 },
    { month: 'Mar', students: 180 },
    { month: 'Apr', students: 200 },
    { month: 'May', students: 220 },
    { month: 'Jun', students: 240 },
    { month: 'Jul', students: 260 },
    { month: 'Aug', students: 250 },
    { month: 'Sep', students: 230 }
  ],
};

const years = Object.keys(yearData);

const EnrollmentLineChart = () => {
  const [selectedYear, setSelectedYear] = useState(years[years.length - 1]);
  const data = yearData[selectedYear];

  return (
    <div>
      <div className="mb-3 d-flex align-items-center gap-2">
        <label htmlFor="year-select" className="fw-bold">Year:</label>
        <select
          id="year-select"
          value={selectedYear}
          onChange={e => setSelectedYear(e.target.value)}
          className="form-select w-auto"
        >
          {years.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          accessibilityLayer
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid vertical={true} horizontal={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={value => value.slice(0, 3)}
          />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Legend />
          <Line type="linear" dataKey="students" stroke="#2c5282" strokeWidth={3} dot={{ r: 5 }} activeDot={{ r: 8 }}>
            {/* <LabelList
              position="right"
              offset={15}
              fontSize={14}
              fontWeight={'bold'}
              style={{ fill: 'red' }}
            /> */}
          </Line>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EnrollmentLineChart;
