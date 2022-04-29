import React from "react";
import { PieChart, Pie, Sector, Cell, Legend } from "recharts";
import { useEffect, useState } from "react";
import "../../css/pieChartScore.css"



function PieChartScore({datas}) {
    const [todayScore, setTodayScore] = useState(0);
    const COLORS = ['#FF0000', '#FFFFFF'];

    // Get data from props
    useEffect(() => {
      if (datas.user?.todayScore) {
        setTodayScore(datas.user?.todayScore * 100);
      }
    }, [datas]);

    const data = [
        {total: Number(todayScore)},
        {total: 100 - Number(todayScore)}]
    ;
    
  console.log(data);

  const CustomLegend = ({ payload }) => {
    if (payload && payload.length) {
      return (
        <div className="container-legend-score">
          <p className="score-result">{payload[0].payload.value}%</p>
          <p className="score-p">de votre</p>
          <p className="score-p">objectif</p>
        </div>
      )
    }
  };





    return (
      <div className="radialprogress">
        <h3 className="score">Score</h3>
        <PieChart width={250} height={250} margin={5}>
        <Pie
          data={data}
          cx={120}
          cy={100}
          innerRadius={90}
          outerRadius={100}
          fill="#FFFFFF"
          paddingAngle={5}
          dataKey="total"
          startAngle={90}
          endAngle={450}
          cornerRadius={10}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          </Pie>
          <Pie cx={120}
          cy={100}outerRadius={'90'} fill={'#FFFFFF'} data={[{ value: 100 }]} dataKey="value" />
          <Legend verticalAlign='middle' align='right' content={CustomLegend} />


      </PieChart>
          
      </div>
    );
  };
export default PieChartScore
