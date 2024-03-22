import React from 'react'
import Sidebar from './component/Sidebar/Sidebar'
import Main from './component/Main/Main'
import './App.css'

const App = () => {
  return (
    <div className='container'>
        <Sidebar/>
        <Main />
    </div>
  )
}

export default App
