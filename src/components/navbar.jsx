import yoga from '../assets/yoga.png';
import swim from '../assets/swim.png';
import cycle from '../assets/cycle.png';
import strength from '../assets/strength.png';
import "../css/navbar.css"

function NavBar() {
    return (
        <div className="navbar-vertical">
            <div className="icon-boxes">
                <div className='iconcontainer'>
                    <img src={yoga} alt="yoga" />
                </div>
                <div className='iconcontainer'>
                    <img src={swim} alt="swim" />
                </div>
                <div className='iconcontainer'>
                    <img src={cycle} alt="cycle" />
                </div>
                <div className='iconcontainer'>
                    <img src={strength} alt="strength" />
                </div>
            </div>
            <p>Copyright, SportSee 2020</p>
        </div>
    )
}

export default NavBar