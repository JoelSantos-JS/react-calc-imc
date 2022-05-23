import { Level, levels } from "../../helpers/imc"

import styles from './GridItem.module.css'

import up from '../../assets/up.png'
import down from '../../assets/down.png'

type Props = {
    data: Level
}

export function GridItem({data} : Props) {
    return (
        <div className={styles.main} style={{ backgroundColor: data.color }}>
                <div className={styles.gridIcon}>
                        {data.icon === 'up' && <img src={up} alt= ''  style={{ width:"30px"}} />}
                        {data.icon === 'down' && <img src={down} alt= '' width="30px" />}
                </div>
                <div className={styles.gridTitle}>
                    {data.title }
                </div>

                {data.yourImc && 
                    <div className={styles.yourImc} style={{marginTop:'10px' , marginBottom: '25px'}}> Seu IMC é de {data.yourImc} </div>
                }
                <div className={styles.gridInfo}>
                        <>
                                IMC está entre <strong> {data.imc[0]}</strong> e <strong> {data.imc[1]}</strong>
                        </>
                </div>
        </div>
    )
}