import PropTypes from "prop-types"

/**
 * Display a personalized welcome message with the first name of the user.
 * @returns a div
 * @param {object} datas
 * @param {String} firstName
 * @component Welcome
 */

function Welcome({datas}) {
    return (
        <div className='welcome-user'>
            <h1>Bonjour <span className="red">{datas.user?.userInfos.firstName}</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
};

export default Welcome;

Welcome.propTypes = {
    datas: PropTypes.shape({
        user: PropTypes.shape({
            userInfos: PropTypes.shape({
                firstName: PropTypes.string.isRequired
            })
        })
    })
}