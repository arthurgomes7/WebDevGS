import { useState } from 'react'
import '../App.css'
import Solucao from '../components/Solução';
import { Link } from 'react-router-dom';


function Sobre() {
  
  return (
    <>
    <div className='text-center text-white p-5 hover:text-blue-500'>
        <button>
            <Link to='/'>Página Inicial</Link>
        </button>
    </div>
    <Solucao></Solucao>
    </>
  )
}

export default Sobre