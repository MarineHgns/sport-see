import "../css/home.css"
import React, { useEffect, useState } from 'react';
import { apiFetch, newUserData } from '../services/fetch';
import { USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_MAIN_DATA, USER_PERFORMANCE } from '../services/data.js'

const Dashboard = () => {
    const [datas, setDatas] = useState({});
    const [userId, setUserId] = useState(12);

    useEffect(() => {
    const newUserDataMock = { user : USER_MAIN_DATA[0], activity: USER_ACTIVITY[0], session: USER_AVERAGE_SESSIONS[0], performance: USER_PERFORMANCE[0] };

        async function fetchData() {
            await apiFetch(userId);
            console.log(newUserData , 'newUserData');
            if (!newUserData.user) {
                console.log(newUserDataMock , 'newUserData2');
                setDatas(() => ({...newUserDataMock}))
            } else {
                setDatas(() => ({...newUserData}))
            }
        }
        fetchData();
    },[userId] );
    


    return (
        <div className="profile-page">
            <div className="graph">
                yooooooooo
            </div> 
        </div>
    );
};

export default Dashboard;