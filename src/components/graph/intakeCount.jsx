import iconCal from '../../assets/calories-icon.svg'
import iconCarb from '../../assets/carbs-icon.svg'
import iconFat from '../../assets/fat-icon.svg'
import iconProt from '../../assets/protein-icon.svg'
import "../../css/intakeCount.css"

function IntakeCount({datas}) {
    return (
        <div className='intake-box'>
            <div className='box-icon'>
                <img src={iconCal} alt="icon-calories"/>
                    <div className='box-info'>{datas.user?.keyData.calorieCount}kCal
                        <p>Calories</p>
                    </div>
            </div>
            
            <div className='box-icon'>
                <img src={iconProt} alt="icon-Protein"/>
                    <div className='box-info'>{datas.user?.keyData.proteinCount}g
                        <p>Protéines</p>
                    </div>
            </div>

            <div className='box-icon'>
                <img src={iconCarb} alt="icon-carb"/>
                    <div className='box-info'>{datas.user?.keyData.carbohydrateCount}g
                        <p>Glucides</p>
                    </div>
            </div>

            <div className='box-icon'>
                <img src={iconFat} alt="icon-fat"/>
                    <div className='box-info'>{datas.user?.keyData.lipidCount}g
                        <p>Lipides</p>
                    </div>
            </div>

        </div>
    );
};

export default IntakeCount



