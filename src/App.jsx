import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Trending from './Components/Trending'
import Popular from './Components/Popular'
import Movies from './Components/Movies'
import TVshows from './Components/TVshows'
import Person from './Components/Person'

function App() {
  return (
    <div className='max-w-[100vw] min-h-[100vh]  flex  main-page'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/trending' element={<Trending/>} />
        <Route path='/popular' element={<Popular/>}/>
        <Route path='/movie' element={<Movies/>}/>
        <Route path='/tv' element={<TVshows/>}/>
        <Route path='/person' element={<Person/>}/>

      </Routes>
    </div>
  )
}

export default App