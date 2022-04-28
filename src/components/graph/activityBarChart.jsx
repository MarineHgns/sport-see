
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import "../../css/graph.css"
import React, { useEffect, useState } from "react";
  
function ActivityBarChart ({datas}) {
  const [activityData, setActivityData] = useState([]);
  useEffect(() => {
    if (datas.activity?.sessions.length >= 1)  {
      setActivityData(datas.activity?.sessions);
    }
  }, [datas]);
  
  console.log(activityData);
    const data = activityData.map((item, index) => {
      return {
          day: index +1,
          kg: item.kilogram,
          cal: item.calories
      };
    });
  
    return (
      <div className="activity-chart">
          <div className="activity-chart-title">
              <div className='act-title'>
                <div className="activity-chart-title-one">
                    Activité quotidienne
                </div>
                <div className="activity-chart-title-two">
                    <ul>
                        <li><span className="width-li black">•</span><span className="text-activity">Poids (kg)</span></li>
                        <li><span className="width-li red">•</span><span className="text-activity">Calories brulées (kCal)</span></li>
                    </ul>
                </div>
              </div>
          </div>
         <BarChart width={500} height={300} data={data} 
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis  orientation='right' domain={[0,100]}/>
          <Tooltip />
          <Bar dataKey="kg" fill="#282D30" radius={[50, 50, 0, 0]} />
          <Bar dataKey="cal" fill="#E60000" radius={[50, 50, 0, 0]} />
        </BarChart>
      </div>
    );
  };
  
  export default ActivityBarChart;
  