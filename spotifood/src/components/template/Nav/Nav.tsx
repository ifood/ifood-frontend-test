import React from 'react';
import { useHistory } from 'react-router-dom';
import './Nav.scss';
import { FiPower } from 'react-icons/fi';

function Nav() {
    const history = useHistory();
    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }
    return (
        <aside className="menu-area">
            <nav className="menu">
                <button onClick={handleLogout} type="button">
                    Sair <FiPower size={18} color='red' />
                </button>
            </nav>
        </aside>
    );
  }
  
export default Nav;    