import React, { useState, useEffect }  from 'react';
import Exercise from './exercise';
import ExerciseB from './exerciseb';

function Workout() {

  const [workout, setWorkout] = useState(false)

    return (
      <div className="workout py-4 px-6 rounded-lg">
        <div className="flex space-x-4">
          <h2 className="font-medium text-2xl flex-1">Workout {workout ? `B` : `A`}</h2>
          <button className="flex-2 switch-btn py-2 px-4 rounded-lg" onClick={() => setWorkout(!workout)}>{workout ? `Switch to workout A` : `Switch to workout B`}</button>
        </div>
        {workout ? <Exercise /> : <ExerciseB />}
      </div>
    );
  }
  
  export default Workout;