
function Welcome({datas}) {
    return (
        <div className='welcome-user'>
            <h1>Bonjour <span className="red">{datas.user?.userInfos.firstName}</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
};

export default Welcome;