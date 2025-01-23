import React, { createContext, useState, useEffect, useContext } from "react";

const API_BASE = process.env.REACT_APP_API_BASE || "https://konnekt.gr/wp-json";

const ArtistsContext = createContext();

export const ArtistsProvider = ({ children }) => {
	const [artists, setArtists] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchArtists = async () => {
		setLoading(true);
		setError(null);
		try {
			const response = await fetch(`${API_BASE}/eap/v1/artists`);
			if (!response.ok) throw new Error("Failed to fetch artists");
			const data = await response.json();
			setArtists(data);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchArtists();
	}, []);

	const handleVote = async (artistId) => {
		try {
			// Optional: Add optimistic update if needed
			setArtists((prev) =>
				prev.map((artist) =>
					artist.id === artistId
						? { ...artist, votes: artist.votes + 1 }
						: artist
				)
			);

			// Invalidate cache and refresh data
			await fetchArtists();
		} catch (err) {
			console.error("Error updating votes:", err);
		}
	};

	return (
		<ArtistsContext.Provider
			value={{
				artists,
				loading,
				error,
				handleVote,
				refreshArtists: fetchArtists,
			}}
		>
			{children}
		</ArtistsContext.Provider>
	);
};

export const useArtists = () => {
	const context = useContext(ArtistsContext);
	if (!context) {
		throw new Error("useArtists must be used within an ArtistsProvider");
	}
	return context;
};
