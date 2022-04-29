import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "../../css/lineChartSessions.css"
import React, { useEffect, useState, useRef } from "react";


function SessionsLineChart ({datas}) {
    console.log(datas, datas.session?.sessions);
    const initialDay = ["L", "M", "M", "J", "V", "S", "D"];
    const [averageTime, setAverageTime] = useState([]);
    const chartRef = useRef(null);
  
    // Get data from props
    useEffect(() => {
      if (datas.session?.sessions) {
          console.log(datas.session?.sessions);
          console.log("ok");
        setAverageTime(datas.session?.sessions);
    
      }
    }, [datas]);
  console.log(averageTime);
    // array of objects with kind and value
    const data = averageTime.map((item) => {
      return {
        initialDay: initialDay[item.day - 1],
        sessionLength: item.sessionLength,
      };
    });

    console.log(datas);
    console.log(data);



  const CustomTooltip = ({ active, payload }) => {
    if (active && payload ) {
      return (
        <div className="custom-tooltip">
          <p className="value">{`${payload[0].value} min`}</p>
        </div>
      );
    }
  
    return null;
  };

    return (
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="initialDay" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: "#e0e0e0", opacity:"0.7" }}/>
          <Legend />
          <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
    );
  };



  
  export default SessionsLineChart;