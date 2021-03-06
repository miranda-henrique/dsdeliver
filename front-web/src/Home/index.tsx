import React from 'react';
import { ReactComponent as MainImage } from './imagem.svg';
import './styles.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-content">
                <div className="home-actions">
                    <h1 className="home-title">
                        Faça seu pedido <br /> que entregamos <br /> para você!!!
                    </h1>
                    <h3 className="home-subtitle">
                        Escolha o seu pedido e em poucos minutos <br /> 
                        levaremos na sua porta.
                    </h3>
                    <a href="orders" className="home-btn-order">
                        FAZER PEDIDO
                    </a>
                    <div className="home-image">
                        <MainImage />
                    </div>
                </div>
            </div>
        </div>
    )

}


export default Home;