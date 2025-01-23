import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ArtistsProvider } from "./context/ArtistsContext";
import Layout from "./components/Layout";
import Table from "./components/Table";
import ArtistProfile from "./components/ArtistProfile";
import "./App.css";

const App = () => (
	<ArtistsProvider>
		<Router>
			<Layout>
				<Routes>
					<Route path="/" element={<Table />} />
					<Route path="/:artistSlug" element={<ArtistProfile />} />
				</Routes>
			</Layout>
		</Router>
	</ArtistsProvider>
);

export default App;
