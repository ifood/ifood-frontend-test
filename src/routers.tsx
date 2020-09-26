import React from 'react';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

function Routers() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login/>} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Routers;