import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero';
import Workout from './components/Workout';
import Generator from './components/Generator';
import {generateWorkouts} from './utils/function';

function App() {
  const [workout, setworkout] = useState(null)
  const [poison, setPoison] = useState('individual')
  const [muscles, setMuscles] = useState([])
  const [goals, setGoals] = useState('strength_power')

  function updateWorkout() {
    if (muscles.length <1) {
      return
    }
    // console.log(goals)
    let newWorkout = generateWorkouts({poison, muscles, goals}); 
    console.log(newWorkout) 
    setworkout(newWorkout)
  }

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-gray-900 to-slate-950 text-white text-sm sm:text-base text-center'>
      <Hero />
      <Generator 
      poison={poison}
      setPoison = {setPoison}
      muscles = {muscles} 
      setMuscles={setMuscles}
      goals={goals}
      setGoals={setGoals}
      updateWorkout={updateWorkout} />
      
      {workout && (<Workout workout={workout} />)}
    </main>
  )
}

export default App
