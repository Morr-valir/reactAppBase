import React from "react";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage';

export default function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route exact path="/" element={<HomePage />} />
				</Routes>
			</Router>
		</div>
	);
}
