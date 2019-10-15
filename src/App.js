import React from 'react';
import {
  BarChart, Bar, LabelList, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts';
import { styles } from "./App.css";

const data = [
  {
    name: 'Apr', pv: 19.26,  amt: 30,
  },
  {
    name: 'May', pv: 27.25, amt: 30,
  },
  {
    name: 'Jun', pv: 21.36, amt: 30,
  },
  {
    name: 'Jul', uv: -6.71, amt: 30,
  },
  {
    name: 'Aug', pv: 15.23, amt: 30,
  },
  {
    name: 'Sep', pv: 8.23, amt: 30,
  },
  {
    name: 'Oct', pv: 19.77, amt: 30,
  },
  {
    name: 'Nov', uv: -4.96, amt: 30,
  },
  {
    name: 'Dec', pv: 21.48, amt: 30,
  },
  {
    name: 'Jan', pv: 0.8, amt: 30,
  },
  {
    name: 'Feb', pv: 3.29, amt: 30,
  },
  {
    name: 'Mar', pv: 7.89, amt: 30,
  },
  {
    name: 'Apr', pv: 19.26, amt: 30,
  },
  {
    name: 'May', pv: 27.25, amt: 30,
  },
  {
    name: 'Jun', pv: 21.36, amt: 30,
  },
  {
    name: 'Jul', uv: -6.71, amt: 30,
  },
  {
    name: 'Aug', pv: 15.23, amt: 30,
  },
  {
    name: 'Sep', pv: 8.23, amt: 30,
  },
  {
    name: 'Oct', pv: 19.77, amt: 30,
  },
  {
    name: 'Nov', uv: -4.96, amt: 30,
  },
  {
    name: 'Dec', pv: 21.48, amt: 30,
  },
];

function App() {
  return (
    <div className="App">
      <BarChart
        className={"Chart-style"}
        width={1000}
        height={500}
        data={data}
        stackOffset="sign"
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <XAxis dataKey="name"/>
        <Tooltip />
        <Legend />
        <ReferenceLine x="Feb" stroke="green" label="Min PAGE" />
        <Bar dataKey="pv" fill="#00951B" stackId="stack" />
        <Bar dataKey="uv" fill="#FF2009" stackId="stack" label={{ position: 'top'}} />
      </BarChart>
    </div>
  );
}

export default App;
