import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper' // import SectionWrapper here
import { SCHEMES, WORKOUTS } from '../utils/swoldier'
import Button from './Button'

function Header(props) {
  const { index, title, description } = props
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center justify-center gap-2'>
        <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
        <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
      </div>
      <p className='text-sm sm:text-base mx-auto'>{description}</p>
    </div>
  )
}


export default function Generator(props) {
  // let showModel= false;
  const { poison, setPoison, muscles, setMuscles, goals, setGoals ,updateWorkout } = props

  const [showModel, setShowmodel] = useState(false)

  function toggleModel() {
    setShowmodel(!showModel);
  }


  function updateMuscles(muscleGroup) {
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter(val => val !== muscleGroup))
      return
    }

    if (muscles.length > 2) {
      return
    }

    if (poison !== 'individual') {
      setMuscles([muscleGroup])

      setShowmodel(false)
      return
    }

    setMuscles([...muscles, muscleGroup])
    if (muscles.length === 2) {
      console.log(muscleGroup)
      setShowmodel(false)
    }

  }


  return (
    <SectionWrapper header={"generate your Workout"} title={['it\'s', 'Huge', 'o\'clock']} >
      <Header index={'01'} title={'Pick your poison'} description={"Select the workout you wish to endure."} />
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>

        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button onClick={() => {
              setPoison(type)
            }} className={'bg-slate-950 border  px-4 border-blue-400  duration-200 hover:border-blue-600 py-4 rounded-lg ' + (poison == type ? 'border-blue-400 border-2' : 'border-blue-400')} key={typeIndex}>
              <p className='uppercase '>
                {type.replace("_", "  ")}
              </p>
            </button>
          )
        })}
      </div>


      {/* /////////////////////////////////////// */}

      <Header index={'02'} title={'Lock on targets'} description={" Select the muscles judged for annihilation."} />
      <div className='bg-slate-950 border border-blue-400  duration-200 hover:border-blue-600 py-4 rounded-lg flex flex-col'>
        <button onClick={toggleModel} className='relative flex items-center justify-center p-1 '>
          <p >{muscles.length == 0 ? 'select muscle groups' : muscles.join(' ')}</p>
          <i className="fa-solid  absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down " ></i>
        </button>

        {showModel && (
          <>
            <hr className='h-px m-4  border-0 dark:bg-blue-400' />
            <div className='flex flex-col px-3 pb-3'>
              {(poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIndex) => {
                return (
                  <button onClick={
                    () => { updateMuscles(muscleGroup) }
                  }
                    key={muscleGroupIndex} className={'hover:text-blue-400 duration-200 ' + (muscles.includes(muscleGroup) ? 'text-blue-600' : ' ')}  >
                    <p className='pb-2 uppercase'>{muscleGroup.replaceAll('_', ' ')} </p>
                  </button>
                )
              })}
            </div>
          </>)}
      </div>

      {/* ////////////////////////////////////////////////////////// */}

      <Header index={'03'} title={'Become Juggernout'} description={"Select your ultimate objective."} />
      <div className='grid grid-cols-1 sm:grid-cols-3 max-sm:mx-6 gap-4  '>
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button onClick={() => {
              setGoals(scheme)
            }} className={'bg-slate-950 border border-blue-400 px-4 duration-200 hover:border-blue-600 py-4 rounded-lg ' + (scheme == goals ? 'border-blue-400 border-2' : 'border-blue-400')} key={schemeIndex}>
              <p className='uppercase '>
                {scheme.replace("_", "  ")}
              </p>
            </button>
          )
        })}
      </div>
      <Button func={updateWorkout} text="Formulate"></Button>
    </SectionWrapper>
  )
}