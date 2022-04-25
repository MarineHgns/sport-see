import "../css/home.css"
import React, { useEffect, useState } from 'react';
import { apiFetch, newUserData } from '../services/fetch';
import { USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_MAIN_DATA, USER_PERFORMANCE } from '../services/data.js'
import Welcome from "../components/welcome";

const Dashboard = () => {
    const [datas, setDatas] = useState({});
    const [userId, setUserId] = useState(12);

    useEffect(() => {
    const newUserDataMock = { user : USER_MAIN_DATA[0], activity: USER_ACTIVITY[0], session: USER_AVERAGE_SESSIONS[0], performance: USER_PERFORMANCE[0] };

        async function fetchData() {
            await apiFetch(userId);

            if (!newUserData.user) {
                setDatas(() => ({...newUserDataMock}))
            } else {
                setDatas(() => ({...newUserData}))
            }
        }
        fetchData();
    },[userId] );
    


    return (
        <div className="profile-page">
            <Welcome datas={datas}/>
            <div className="graph">
            </div> 
        </div>
    );
};

export default Dashboard;