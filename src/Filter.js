import React from 'react'
import {useState} from 'react'


const Filter = () => {

  const [skiChecked, setSkiChecked] = React.useState(false);
  const [hikingChecked, setHikeChecked] = React.useState(false);
  const [climbingChecked, setClimbChecked] = React.useState(false);

  const onSubmit = (e) => {
    e.preventDefault()
    if(!skiChecked && !hikingChecked && !climbingChecked) {
        alert('Please add an activity')
        return
    }

    console.log('submitted')

    setSkiChecked(false)
    setClimbChecked(false)
    setHikeChecked(false)
}

  const handleSkiChange = () => {
    setSkiChecked(!skiChecked);
  };

  const handleHikeChange = () => {
    setHikeChecked(!hikingChecked);
  };

  const handleClimbChange = () => {
    setClimbChecked(!climbingChecked);
  };

  return (
    <div className= 'Filter'>
      <form onSubmit={onSubmit}>
      <div >
      <input
        type="checkbox"
        checked={skiChecked} 
        onChange={handleSkiChange}
      />
      Ski
      </div>

      <div>
      <input
        type="checkbox"
        checked={hikingChecked} 
        onChange={handleHikeChange}
      />
      Hiking
      </div>

      <div>
      <input
        type="checkbox"
        checked={climbingChecked} 
        onChange={handleClimbChange}
      />
      Climbing
      </div>
      <input type='submit' value='submit' onSubmit={onSubmit}/>
      </form>
    </div>
    
  )
}

export default Filter
