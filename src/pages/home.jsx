import { Link } from "react-router-dom"
import "../css/home.css"

/**
 * Home is a function that returns two buttons to choose the user profile to navigate to.
 * @returns the home page content
 */

function Home() {
    return (
        <div className="profile-page">
            <p className="home-user">Choisissez un user pour accéder à son profil</p>
                <div className="box-user">
                    <Link key={12} to={`user/12`}>
                    <button className="button-27">User 12</button>
                    </Link>

                    <Link key={18} to={`user/18`}>
                    <button className="button-27">User 18</button>
                    </Link>
                </div>    
        </div>
    )
}

export default Home