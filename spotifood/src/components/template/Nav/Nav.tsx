import React from 'react';
import { useHistory } from 'react-router-dom';
import './Nav.scss';
import { FiPower } from 'react-icons/fi';
import FormPlaylist from '../../form-playlist';

function Nav() {
    const history = useHistory();
    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }
    return (
        <aside className="menu-area">
            <nav className="menu">
                <FormPlaylist />
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color='white' />
                </button>
            </nav>
        </aside>
    );
  }
  
export default Nav;