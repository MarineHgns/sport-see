import "../css/home.css"
import React, { useEffect, useState } from 'react';
import { apiFetch, newUserData } from '../services/apiGet';
import { USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_MAIN_DATA, USER_PERFORMANCE } from '../services/data.js'
import Welcome from "../components/welcome";
import IntakeCount from "../components/graph/intakeCount";
import RadarGraph from "../components/graph/radar";
import { useParams, Navigate } from "react-router-dom";

const Dashboard = () => {
    const { id } = useParams()
    const userId = Number(id)

    const [datas, setDatas] = useState({});
    useEffect(() => {
        let newUserDataMock;
        
        if (userId === 12 ){
            newUserDataMock = { user : USER_MAIN_DATA[0], activity: USER_ACTIVITY[0], session: USER_AVERAGE_SESSIONS[0], performance: USER_PERFORMANCE[0] };
        } else if (userId === 18 ){
            newUserDataMock = { user : USER_MAIN_DATA[1], activity: USER_ACTIVITY[1], session: USER_AVERAGE_SESSIONS[1], performance: USER_PERFORMANCE[1] };
        }

        async function fetchData() {
            await apiFetch(userId);
            setDatas(() => ({...newUserData}))
            
            if (!newUserData.user || newUserData == null || newUserData === undefined || newUserData.length === 0) {
                setDatas(() => ({...newUserDataMock}))
            }
        }
        console.log(newUserData);
        console.log(newUserDataMock);
        
        
    

        
        fetchData();

        


    },[userId] );

    return (
        <div className="profile-page">
            <Welcome datas={datas}/>
            <div className="graph">
                <IntakeCount datas={datas}/>
                <RadarGraph datas={datas}/>
            </div> 
        </div>
    );
};

function pageError(){
    return <Navigate to='/*' />

}


export default Dashboard;