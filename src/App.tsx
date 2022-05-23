import React, { useState } from 'react';
import styles from './App.module.css'
import power from './assets/powered.png'
import left from './assets/leftarrow.png'
import { GridItem } from './components/GrindItem';

import { levels , calculateImc, Level } from './helpers/imc'; 

function App() {
    const  [heightField, setHeightFiled] = useState(0)
    const  [weightField, setWeightFiled] = useState(0)
    const [showItme, setShowItem] = useState<Level | null>(null)


    const handleCal = () => {
      if(heightField && weightField){
        setShowItem(calculateImc(heightField,weightField));
      }
      else{
        alert("Preencha todos os campos!");
      }
    }

    const handleback = () => {
      setShowItem(null)
      setHeightFiled(0)
      setWeightFiled(0)
    }


  return (
    <>

    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
            <img src={power} alt="" />
        </div>
      </header>

      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o Seu IMC</h1>
          <p>IMC é a sigla para Indice de Massa Corpórea, parãmetro adotado pela Organização Mundial de Saude para caulcular o peso ideal de cada pessoa.</p>

          <input type="number" placeholder='Digite sua Altura. Ex 1.2 (em Metros)' value={heightField > 0 ? heightField :  '' } onChange={e => setHeightFiled(parseFloat(e.target.value))} />
          <input type="number" placeholder='Digite seu Peso. Ex 75 (em KG)' value={weightField > 0 ? weightField :  '' } onChange={e => setWeightFiled(parseFloat(e.target.value))} />

          <button onClick={handleCal} >Calcular</button>
        </div>
          <div className={styles.rightSide}>
            {!showItme &&
            <div className={styles.grid}>
                  {levels.map((item , key) => (
                    <GridItem key={key} data={item} />
                  ) )}
            </div>
              }

              {showItme && 
                  <div className={styles.rightBig}>

                    <div className={styles.rightArrow} onClick={handleback}>
                    <img src={left} alt=""  style={{ width: '20px'}}/>

                    </div>
                    <GridItem data={showItme}/>
                  </div>
              }
          </div>


      </div>
    </div>
    </>
  );
}

export default App;
