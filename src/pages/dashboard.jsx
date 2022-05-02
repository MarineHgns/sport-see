import "../css/home.css"
import React, { useEffect, useState } from 'react';
import { apiCall, newUserData } from '../services/apiGet';
import { USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_MAIN_DATA, USER_PERFORMANCE } from '../services/data.js'
import Welcome from "../components/welcome";
import IntakeCount from "../components/graph/intakeCount";
import RadarGraph from "../components/graph/radar";
import { useParams, Navigate} from "react-router-dom";
import ActivityBarChart from "../components/graph/activityBarChart";
import PieChartScore from "../components/graph/pieChartScore";
import SessionsLineChart from "../components/graph/lineChartSessions";

/** This function renders the dashboard.
 * 
 * The userId is defined with the number in the url.
 * 
 * If the userId is 12, then the data is fetched from the index [0] of USER_MAIN_DATA, USER_ACTIVITY,
 * USER_AVERAGE_SESSIONS, USER_PERFORMANCE mock.
 * 
 * If the userId is 18, then the data is fetched from the index [1] of USER_MAIN_DATA, USER_ACTIVITY,
 * USER_AVERAGE_SESSIONS, USER_PERFORMANCE mock.
 * 
 * First the data is fetched from the API. 
 * If the data is not fetched from the API, then we take the mocked datas from the index [0 or 1].
 * 
 * If no datas is returned then the user is redirected to the error page.
 * 
 * @returns some graphs components with the props datas.
 */

function Dashboard() {
    const { id } = useParams()
    const userId = Number(id)
    const [datas, setDatas] = useState({});
    const [noDatas, setNoDatas] = useState({});

    useEffect(() => {
        let newUserDataMock;
        
        if (userId === 12 ) {
            newUserDataMock = { user : USER_MAIN_DATA[0], activity: USER_ACTIVITY[0], session: USER_AVERAGE_SESSIONS[0], performance: USER_PERFORMANCE[0] };
        } else if (userId === 18 ) {
            newUserDataMock = { user : USER_MAIN_DATA[1], activity: USER_ACTIVITY[1], session: USER_AVERAGE_SESSIONS[1], performance: USER_PERFORMANCE[1] };
        }

        async function getData() {
            await apiCall(userId);
            setDatas(() => ({...newUserData}))
            
            if (!newUserData.user || newUserData == null || newUserData === undefined || newUserData.length === 0) {
                setDatas(() => ({...newUserDataMock}))
                
                if(newUserDataMock === undefined){
                    setNoDatas(true)
                }
            }
        }
    
        getData();
    },[userId] );

if (noDatas === true) {
    return <Navigate to='/*' />
    
} else {
    
    return (
        <div className="profile-page">
            <Welcome datas={datas}/>
            <div className="graph">
                <ActivityBarChart datas={datas}/>
                <IntakeCount datas={datas}/>
                <div className="graph-bottom">
                    <SessionsLineChart datas={datas}/>
                    <RadarGraph datas={datas}/>
                    <PieChartScore datas={datas}/>       
                </div>
            </div>
        </div>
    );
}
};


export default Dashboard;