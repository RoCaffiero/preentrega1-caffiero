
import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping, faWandSparkles, faList} from '@fortawesome/free-solid-svg-icons';

export const MyNavbar = () => {
    let hardcodedNumber = 50;
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Olivanders</a> <FontAwesomeIcon icon={faWandSparkles} fade  size="xl"/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/CartWidget">Carrito     
                                <FontAwesomeIcon icon={faCartShopping}  size="xl"/>
                                <span className="badge bg-primary rounded-pill">{hardcodedNumber}</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/ItemListContainer">Productos
                                <FontAwesomeIcon icon={faList}  size="xl"/> </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}