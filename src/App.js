import React from "react";
import './App.css';
import {HashRouter, Route} from "react-router-dom";
import Roulette from "./pages/Roulette";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
	return (
		<>
			<HashRouter>
				<Route
					exact={true}
					path='/'
					render={() => <Roulette />}
				/>
				<Route
					exact={true}
					path='/uuid/admin'
					render={() => <AdminDashboard />}
				/>
			</HashRouter>
		</>
	);
}

export default App;
