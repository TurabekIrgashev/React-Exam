import {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumpster, faEdit, faSearch} from '@fortawesome/free-solid-svg-icons'
import dataFurniture from '../data/data';
import ProductFurniture from './ProductFurniture';
import { NavLink } from 'react-router-dom';
class Mebellar extends Component{
    render(){
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
            <div className='d-flex justify-content-center align-items-center flex-column mt-5 text-dark'>
                <h1 className='textPrimary'>Mahsulotlar</h1>
                <NavLink to={"/Qushish"}>
                    <button className='bg-white rounded plusBtn d-flex justify-content-center align-items-center btn-success text-dark mb-5'>+</button>
                </NavLink>
            </div>
        </section>
        <section className='container'>
            <div className='row'>
            {
                dataFurniture.map( (value) => <div className='col-12 col-md-6 col-xl-3 cardHover'>
                             <ProductFurniture data = {value} />
                             <div className='position-relative'>
                                 <div className='primaryBtn'>
                                    <NavLink to={"/Uzgartirish"}>
                                        <button className='me-3 rounded bg-white btnSecond btn-warning'><FontAwesomeIcon icon={faEdit} /></button>
                                    </NavLink>
                                    <NavLink to={"/Mebellar"}>
                                        <button className='me-3 rounded bg-white btnSecond btn-danger text-dark'><FontAwesomeIcon icon={faDumpster} /></button>
                                    </NavLink>
                                </div>
                             </div>
                            </div>
                        )
            }
            </div>
        </section>
        <section className='container'>
            <div className='w-100 line'></div>
            <div className='w-100 rounded-1 d-flex justify-content-center align-item-center my-3 logoDiv'><button className='bg-transparent border-0'><img className='logo' src='https://www.algorismic.uz/images/algorismic-02.svg'></img></button></div>
        </section>
    </>
    }
}

export default Mebellar;