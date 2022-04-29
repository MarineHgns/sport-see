
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';
import "../../css/graph.css"
import React, { useEffect, useState } from "react";
import "../../css/activityBarChart.css"

function ActivityBarChart ({datas}) {
  const [activityData, setActivityData] = useState([]);
  useEffect(() => {
    if (datas.activity?.sessions.length >= 1)  {
      setActivityData(datas.activity?.sessions);
    }
  }, [datas]);

    const data = activityData.map((item, index) => {
      return {
          day: index +1,
          kg: item.kilogram,
          cal: item.calories
      };
    });

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload ) {
      return (
        <div className="custom-tooltip">
          <p className="value">{`${payload[0].value}kg`}</p>
          <p className="value">{`${payload[1].value}kcal`}</p>
        </div>
      );
    }
  
    return null;
  };

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

         <BarChart width={600} height={300} data={data} barCategoryGap={20} barGap={7} margin={{
              top: 50,
              right: 10,
              left: 40,
              bottom: 5,
            }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false}/>
          <XAxis dataKey="day"  tickLine={false} tick={{ fontSize: 14 }} dy={10}/>
          <YAxis orientation="right" interval="number" allowDecimals={false} tickLine={false} 
            axisLine={false} tick={{ fontSize: 14 }}/>
          <YAxis dataKey="cal" hide={true} />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: "#e0e0e0", opacity:"0.7" }}/>
          <Bar dataKey="kg" fill="#282D30" radius={[50, 50, 0, 0]} barSize={6}  />
          <Bar dataKey="cal" fill="#E60000" radius={[50, 50, 0, 0]} barSize={6}  />
        </BarChart>

      </div>
    );
  };



  
  export default ActivityBarChart;

  // let kilogramsArray = [];
  // let caloriesArray = [];
  // let minYKilo = 0;
  // let maxYKilo = 0;
  // let minYCal = 0;
  // let maxYCal = 0;


// domain={[minYKilo, maxYKilo]}
// domain={[minYCal, maxYCal]}     
// kilogramsArray = data.map((elt) => elt.kg);
//     minYKilo = Math.min(...kilogramsArray) - 1;
//     maxYKilo = Math.max(...kilogramsArray) + 1;

//     caloriesArray = data.map((elt) => elt.cal);
//     minYCal = Math.min(...caloriesArray) - 10;
//     maxYCal = Math.max(...caloriesArray) + 10;
