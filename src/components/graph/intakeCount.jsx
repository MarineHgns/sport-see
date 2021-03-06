import iconCal from '../../assets/calories-icon.svg'
import iconCarb from '../../assets/carbs-icon.svg'
import iconFat from '../../assets/fat-icon.svg'
import iconProt from '../../assets/protein-icon.svg'
import "../../css/intakeCount.css"
import PropTypes from "prop-types"

/**
 * Function that return 4 boxes with icons and nutritional informations (cal, protein, lipid and carb).
 * @returns {reactElement} the IntakeCount component
 * @param {object} datas
 * @property {!Number} datas.calorieCount - number of calorie
 * @property {!Number} datas.proteinCount - number of protein
 * @property {!Number} datas.carbohydrateCount - number of carbohydrate
 * @property {!Number} datas.lipidCount - number of lipid
 * @component IntakeCount
 */
function IntakeCount({datas}) {
    return (
        <div className='intake-box'>
            <div className='box-icon'>
                <img src={iconCal} alt="icon-calories"/>
                    <div className='box-info'>{datas.user?.keyData.calorieCount}kCal
                        <p className='p-intake'>Calories</p>
                    </div>
            </div>
            
            <div className='box-icon'>
                <img src={iconProt} alt="icon-Protein"/>
                    <div className='box-info'>{datas.user?.keyData.proteinCount}g
                        <p className='p-intake'>Protéines</p>
                    </div>
            </div>

            <div className='box-icon'>
                <img src={iconCarb} alt="icon-carb"/>
                    <div className='box-info'>{datas.user?.keyData.carbohydrateCount}g
                        <p className='p-intake'>Glucides</p>
                    </div>
            </div>

            <div className='box-icon'>
                <img src={iconFat} alt="icon-fat"/>
                    <div className='box-info'>{datas.user?.keyData.lipidCount}g
                        <p className='p-intake'>Lipides</p>
                    </div>
            </div>

        </div>
    );
};

export default IntakeCount
IntakeCount.propTypes = {
    datas: PropTypes.shape({
      user: PropTypes.shape({
        keyData: PropTypes.any.isRequired,
        calorieCount: PropTypes.number,
        proteinCount: PropTypes.number,
        carbohydrateCount: PropTypes.number,
        lipidCount: PropTypes.number
      })
    })
  }


