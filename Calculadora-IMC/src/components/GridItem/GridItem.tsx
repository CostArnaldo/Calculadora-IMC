import { level } from "../../helpers/imc";
import upImage from "../../assets/up.png";
import downImage from "../../assets/down.png"
import styles from "./GridItem.module.css"
type props = {
    item:level
};


export const GridItem = ({item}: props) => {
    return <div className={styles.main} style={{backgroundColor: item.color}}>
        <div className={styles.gridIcon}>
            {item.icon === "up" && <img src={upImage} alt="" width="30"/>}
            {item.icon === "down" && <img src={downImage} alt="" width="30"/>}
        </div>
        <div className={styles.gridTitle}>{item.title}</div>
        <div className={styles.gridInfo}>
            <>
                IMC está entre {item.imc[0]} e {item.imc[1]}   
            </>
        </div>
    </div>
}