import React, { useState, useContext } from 'react';

function Set({ s, doneSets, setDoneSets }) {

const [counter, setCounter] = useState(0);
const [isSetDone, setIsSetDone] = useState(null);

const repRange = (n) => {
  const { repRange } = n
  return repRange
}

const handleCounter = () => {
  if (counter == repRange(s)) {
      setIsSetDone(false)
      setCounter(0)
      setDoneSets(doneSets - 1)
  }
  if (counter < (repRange(s) - 1)) {
      setCounter(counter + 1)
  }
  else if (counter == (repRange(s) - 1)) {
      setCounter(counter + 1)
      setIsSetDone(true)
      setDoneSets(doneSets + 1)
  }
}
  return (
  
  <div className="sets-row">
    <button key={s.id} class={"rounded-full h-16 w-16 flex items-center justify-center my-5 text-3xl " + 
  `${isSetDone ? 'active filled' : 'circle active'}`} onClick={handleCounter}> {counter} </button>
  </div>
  );
}

export default Set;