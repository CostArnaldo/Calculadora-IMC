import poweredImage from "./assets/powered.png"
import styles from "./App.module.css"
import { useState } from "react"
import {levels, calculateImc, level} from "./helpers/imc"
import {GridItem} from "./components/GridItem/GridItem"
import leftArrowImage from "./assets/leftarrow.png"

const App = () => { 
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [showItem, setShowItem] = useState<level | null> ()
  const handleButton = () => {
    if (heightField && weightField) {
      setShowItem(calculateImc(heightField, weightField));
    }
    else {
      alert("DIGITE TODOS OS CAMPOS!")
    }

  }

  const handleBackButton = () => {
    setShowItem(null);
    setHeightField(0);
    setWeightField(0);
  }
  

  return ( 
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="" width={100}/>
        </div>
      </header>
      <div className={styles.container}>
        
        <div className={styles.leftSide}>
        <h1>Calcule o seu IMC</h1>
        <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>
        <input  type="number" placeholder="altura. (Metros)" value={heightField > 0 ? heightField: ""} onChange={e=> setHeightField(parseFloat(e.target.value))}/>
        <input  type="number" placeholder="peso. (Kg)" value={weightField > 0 ? weightField: ""} onChange={e=> setWeightField(parseFloat(e.target.value))}/>
        <button onClick={handleButton}>Calcular</button>
        
        </div>

        <div className={styles.rightSide}>
          {!showItem &&
          <div className={styles.grid}>
            {levels.map((item, key) => (
              <GridItem key={key} item={item}/>
            ))}
          </div>
}
{showItem && 
<div className={styles.rightBig}>
  <div className={styles.rightArrow} onClick= {handleBackButton}><img src={leftArrowImage} alt="" width={25} /></div>
  
  <GridItem item= {showItem}/>
  </div>
  }
      </div>
      </div> 
      </div>
   
  );
}

export default App
