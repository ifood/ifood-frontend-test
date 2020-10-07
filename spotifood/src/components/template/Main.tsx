import React from 'react';
import './Main.css';

function Main() {
    return (
        <React.Fragment>
            <main className="content container-fluid">
                <div className="p-3 mt-3">
                    <div className='display-4'>Bem Vindo!</div>
                    <hr />
                    <p className="mb-0">Sistema para exemplificar a construção
                    de um cadastro desenvolvido em React!</p>
                </div>
            </main>
        </React.Fragment>
    );
}
  
export default Main;    
