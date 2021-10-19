import React, { useState } from 'react';
import Set from './set';
import datatwo from './datatwo';

function ExerciseB() {

const [firstDoneSets,setFirstDoneSets] = useState(null);
const [secondDoneSets,setSecondDoneSets] = useState(null);
const [thirdDoneSets,setThirdDoneSets] = useState(null);

const [ first, second, third ] = datatwo

const exNumOfSets = (s, n, m) => {
  if (s.setRange === 5) {
    return [1,2,3,4,5].map((v, index) => <Set key={index} s={s} doneSets={n} setDoneSets={m} />) 
  } 
  else if (s.setRange === 3) {
    return [1,2,3].map((v, index) => <Set key={index} s={s} doneSets={n} setDoneSets={m} />)
  } 
  else {
    return [1].map((v, index) => <Set key={index} s={s} doneSets={n} setDoneSets={m} />)
  } 
}
const successMessage = (counter, s) => {
  if (counter >= 5) {
    return  <p className="pb-5 flex">Well done! You can <p className="px-1 lowercase">{s.name}</p><span className="sucess pr-1">{s.weight + 2.5}</span> kg next time! </p>
  }
  else return
}

return (
  <section>
    <ul>
      <li key={first.id}>
        <div className="exercise flex">
          <h2 className="text-xl font-normal">{first.name}</h2>
          <h3 className="text-xl font-light pl-4"> {first.weight} Kg</h3>
        </div>
        <div className="flex space-x-1 md:space-x-2 lg:space-x-4">{exNumOfSets(first,firstDoneSets,setFirstDoneSets)}</div>
        <div>{successMessage(firstDoneSets, first)}</div>
      </li>
      <li key={second.id}>
        <div className="exercise flex">
          <h2 className="text-xl font-normal">{second.name}</h2>
          <h3 className="text-xl font-light pl-4"> {second.weight} Kg</h3>
        </div>
        <div className="flex space-x-1 md:space-x-2 lg:space-x-4">{exNumOfSets(second,secondDoneSets,setSecondDoneSets)}</div>
        <div>{successMessage(secondDoneSets, second)}</div>
      </li>
      <li key={third.id}>
        <div className="exercise flex">
          <h2 className="text-xl font-normal">{third.name}</h2>
          <h3 className="text-xl font-light pl-4"> {third.weight} Kg</h3>
        </div>
        <div className="flex space-x-1 md:space-x-2 lg:space-x-4">{exNumOfSets(third,thirdDoneSets,setThirdDoneSets)}</div>
        <div>{successMessage(thirdDoneSets, third)}</div>
      </li>
    </ul> 
  </section>
  );
}

export default ExerciseB;