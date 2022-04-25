
function Welcome({datas}) {
    return (
        <div className='welcome-user'>
            <h1>Bonjour {datas.user?.userInfos.firstName}</h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
};

export default Welcome;