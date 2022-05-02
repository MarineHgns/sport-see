import axios from 'axios';

export let newUserData = {}

/**
 *  Function that makes 4 API calls and stores the data in an object called newUserData :
 *   main API call -> user data
 *   activity API call -> activity data
 *   sessions API call -> sessions data
 *   performance API call -> performance data
 * 
 *  newUserData = {[user, activity, sessions, performance]};
 * 
 */

export const apiCall = async (userid) => {
    const main = axios.get(`http://localhost:3000/user/${userid}`)
    const activity = axios.get(`http://localhost:3000/user/${userid}/activity`)
    const sessions = axios.get(`http://localhost:3000/user/${userid}/average-sessions`)
    const performance = axios.get(`http://localhost:3000/user/${userid}/performance`)

    axios.all([main, activity,sessions, performance]).then(axios.spread((...responses)=>{
        newUserData.user = responses[0].data.data
        newUserData.activity = responses[1].data.data
        newUserData.sessions = responses[2].data.data
        newUserData.performance = responses[3].data.data

    })).catch(errors=>{
        console.log("Fetch error:", errors);
    })
}  