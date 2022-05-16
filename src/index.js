import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { useState } from 'react'

import '../public/stylesheets/reset.css';
import '../public/stylesheets/global.css';
import '../public/stylesheets/fonts.css';

import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
import Cart from './Components/Cart';
import History from './Components/History'
import UserContext from './Contexts/UserContext';

import NewProduct from './Components/NewProduct';
import YourStore from './Components/YourStore';
import ProductScreen from './Components/ProductScreen';
import RoutesController from './Components/RoutesController'

function App() {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))

	return (
		<UserContext.Provider value={{user, setUser}}>
			<BrowserRouter>
				<Routes>
					<Route element={<RoutesController needsUser={false} />}>
						<Route path="/" element={<Login />} />
						<Route path="/register" element={<Register />} />
					</Route>
					<Route element={<RoutesController needsUser={true}/>}>
						<Route path="/home" element={<Home />} />
						<Route path="/newProduct" element={<NewProduct />} />
						<Route path="/yourStore" element={<YourStore />} />
						<Route path="/product/:id" element={<ProductScreen />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/history" element={<History />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</UserContext.Provider>
	);
}

const container = document.querySelector('.root');
const root = createRoot(container);
root.render(<App />);