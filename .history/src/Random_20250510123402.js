import { useState } from "react";



const Random = () => {

  const [num, setNum] = useState(0);
  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleClick = () => {
    setNum(randomNumberInRange(0, 59));
  };

  return (

    <div>
      <h2>nombre aléatoire : {num}</h2>
      <button onClick={handleClick}>Générer un nombre aléatoire</button>
    </div>

  );
}

export default Random;