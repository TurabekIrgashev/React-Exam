import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

class Qushish extends Component {
  render() {
    return <>
        <header className='container'>
            <div>
            <ul className='d-flex justify-content-between align-items-center mt-3 text-dark'>
                <li><h1>Furniture</h1></li>
                <li className='btnIcon'><button className='border-0 bg-white'><FontAwesomeIcon icon={faSearch} /></button></li>
            </ul>
            </div>
        </header>
        <section className='container'>
            <div className='d-flex justify-content-center align-items-center mt-5 text-dark'>
                <h1 className='textPrimary'>Qo'shish</h1>
            </div>
        </section>
        <section className='container'>
            <form>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <input className='inputText my-3 rounded-1 w-75' placeholder='Mahsulot rasmi' type='text' />
                    </div>
                    <div className='col-12 col-md-6'>
                        <input className='inputText my-3 rounded-1 w-75' placeholder='Mahsulot nomi' type='text' />
                    </div>
                    <div className='col-12 col-md-6'>
                        <input className='inputText my-3 rounded-1 w-75' placeholder='Mahsulot narxi' type='text' />
                    </div>
                </div>
            </form>
            <div className='d-flex justify-content-center align-items-center mt-5'>
                <NavLink to={"/Mebellar"}>
                    <button className='btnAdmin rounded p-2 px-4 me-3'>Ortga qaytish</button>
                    <button className='btnAdmin rounded p-2 px-4 me-3'>Saqlash</button>
                </NavLink>
            </div>

        </section>
    </>;
  }
}
export default Qushish;
