import { LineChart, Line, XAxis, YAxis, Tooltip, Rectangle } from 'recharts';
import React, { useEffect, useState} from "react";
import "../../css/lineChartSessions.css"

function SessionsLineChart ({datas}) {
    const initialDayWeek = ["L", "M", "M", "J", "V", "S", "D"];
    const [averageTime, setAverageTime] = useState([]);
    useEffect(() => {
      if (datas.session?.sessions) {
        setAverageTime(datas.session?.sessions);
      }
    }, [datas]);


    const data = averageTime.map((element) => {
      return {
        initialDayWeek: initialDayWeek[element.day - 1],
        sessionLength: element.sessionLength,
      };
    });

  function CustomTooltip({ active, payload }){
    if (active && payload) {
      return (
        <div className="custom-tooltip white">
          <p className="value black">{`${payload[0].value} min`}</p>
        </div>
      );
    }
  };

  function CustomCursor(props) {
    if (props) {
        const { points, width, height } = props;
        const { x, y } = points[0];
        return (
            <Rectangle
                fill={"#e60000b8"}
                x={x}
                y={y}
                width={width}
                height={height * 2}
            /> 
        );
    }
  }



    return (
        <div className='line-chart-section'>
          <h2 className='title-line-chart'>Durée moyenne des sessions</h2>

          <LineChart width={260} height={200} data={data} 
            margin={{
              top: -55,
              right: 5,
              left: 5,
              bottom: 5,
            }}
          >

          <XAxis dataKey="initialDayWeek" tickLine={false} axisLine={false} tickMargin={0} stroke='rgba(255, 255, 255, 0.5)'
            padding={{ left: 5, right: 5}} fontSize={14} fontWeight={400}/>
          <YAxis hide="true" domain={['dataMin-10', 'dataMax+20']}/>
          <Tooltip content={<CustomTooltip />} cursor={<CustomCursor /> } />
          <Line type="monotone" dataKey="sessionLength" stroke='rgba(255, 255, 255, 0.6)' strokeWidth={1.5} dot={false} 
            activeDot={{
              stroke: "rgba(255, 255, 255, 0.2)",
              strokeWidth: 5,
              r: 5,
            }}/>
          </LineChart>

        </div>
    );
  };

  
  export default SessionsLineChart;