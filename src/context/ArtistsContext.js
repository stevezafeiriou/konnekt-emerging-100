import React, { createContext, useState, useEffect, useContext } from "react";
import { data } from "../data";

const ArtistsContext = createContext();

const generatePerformanceData = () => {
	return Array.from({ length: 5 }, (_, i) => ({
		month: ["Jan", "Feb", "Mar", "Apr", "May"][i],
		votes: Math.floor(Math.random() * 100),
	}));
};

export const ArtistsProvider = ({ children }) => {
	const [artists, setArtists] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const loadArtists = () => {
			try {
				const approvedArtists = data
					.filter((artist) => artist.approved)
					.map((artist) => ({
						...artist,
						performanceData: generatePerformanceData(),
						previousVotes: Math.floor(
							artist.votes * (0.8 + Math.random() * 0.4)
						),
					}))
					.sort((a, b) => b.votes - a.votes);

				setArtists(approvedArtists);
			} finally {
				setLoading(false);
			}
		};

		// Simulate API call with 500ms delay
		const timer = setTimeout(loadArtists, 500);
		return () => clearTimeout(timer);
	}, []);

	const handleVote = (artistId) => {
		setArtists((prev) =>
			prev
				.map((artist) =>
					artist.id === artistId
						? { ...artist, votes: artist.votes + 1 }
						: artist
				)
				.sort((a, b) => b.votes - a.votes)
		);
	};

	return (
		<ArtistsContext.Provider value={{ artists, loading, handleVote }}>
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
