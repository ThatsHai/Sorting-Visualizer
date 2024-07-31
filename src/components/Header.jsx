import React from 'react'
import Logo from '../assets/Logo.jpg'
const Header = () => {
  return (
    <div className='text-3xl flex p-3'>
      <div className='w-10 h-10 border-green-900 border-solid border-2 mr-3'>
        <img src={Logo} alt='Logo m-3' className='w-full h-full object-fit object-center' />
      </div>
      <h1 className="font-Rubik underline text-slate-700">Sorting Algorithm Visualizer</h1>
      <button></button>
    </div>
  )
}

export default Header