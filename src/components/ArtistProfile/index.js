import React, { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useArtists } from "../../context/ArtistsContext";
import {
	ProfileContainer,
	ArtworkCard,
	ArtworkImage,
	ArtworkDetails,
	ArtistInfoCard,
	PerformanceCard,
	BackButton,
	VoteButton,
	ArtistImage,
	InfoGrid,
	BlurredText,
	ChartExplanation,
	ImageContainer,
	ImageTooltip,
	ImagePopup,
	PopupImage,
} from "./ArtistProfileElements";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import { FaArrowLeft, FaRegHeart } from "react-icons/fa";
import VotePopup from "../VotePopup";

const API_BASE =
	process.env.REACT_APP_API_BASE || "http://emerging100.local/wp-json";

const ArtistProfile = () => {
	const { artistSlug } = useParams();
	const navigate = useNavigate();
	const { artists, handleVote } = useArtists();
	const [artist, setArtist] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [showVotePopup, setShowVotePopup] = useState(false);
	const [voteTrigger, setVoteTrigger] = useState(false);
	const [showImagePopup, setShowImagePopup] = useState(false);

	useEffect(() => {
		const contextArtist = artists.find((a) => a.slug === artistSlug);

		if (contextArtist) {
			setArtist(contextArtist);
			setLoading(false);
		} else {
			const fetchArtist = async () => {
				try {
					const response = await fetch(
						`${API_BASE}/eap/v1/artist/${artistSlug}`
					);
					if (!response.ok) throw new Error("Artist not found");
					const data = await response.json();
					setArtist(data);
				} catch (err) {
					setError(err.message);
				} finally {
					setLoading(false);
				}
			};

			fetchArtist();
		}
	}, [artistSlug, artists]);

	const hasVoted = useMemo(() => {
		if (!artist) return false;
		const votedArtists = JSON.parse(
			localStorage.getItem("votedArtists") || "[]"
		);
		return votedArtists.includes(artist.id);
	}, [artist, voteTrigger]);

	if (loading)
		return (
			<div style={{ padding: "2rem", textAlign: "center" }}>
				Loading artist...
			</div>
		);
	if (error)
		return <div style={{ padding: "2rem", color: "red" }}>Error: {error}</div>;
	if (!artist) return <div style={{ padding: "2rem" }}>Artist not found</div>;

	return (
		<ProfileContainer>
			<BackButton onClick={() => navigate(-1)}>
				<FaArrowLeft /> Return Home
			</BackButton>

			<ArtworkCard>
				<ImageContainer onClick={() => setShowImagePopup(true)}>
					<ArtworkImage
						src={artist.artworkImage || ""}
						alt={artist.artworkTitle}
					/>
					<ImageTooltip>Click to Preview</ImageTooltip>
				</ImageContainer>
				<ArtworkDetails>
					<h1>{artist.artworkTitle}</h1>
					<p>{artist.artworkDesc}</p>
				</ArtworkDetails>
			</ArtworkCard>

			{showImagePopup && (
				<ImagePopup onClick={() => setShowImagePopup(false)}>
					<PopupImage
						src={artist.artworkImage}
						alt={artist.artworkTitle}
						onClick={(e) => e.stopPropagation()}
					/>
				</ImagePopup>
			)}

			<ArtistInfoCard>
				<div className="artist-header">
					<ArtistImage src={artist.artistImage || ""} alt={artist.artistName} />
					<div className="artist-meta">
						<h2>{artist.artistName}</h2>
						<span className="category">{artist.category}</span>
					</div>
				</div>

				<InfoGrid>
					<div className="info-item">
						<label>Total Votes</label>
						<span className="value">{artist.votes}</span>
					</div>
					<div className="info-item">
						<label>Category</label>
						<span className="value">{artist.category}</span>
					</div>
					<div className="info-item">
						<label>Contact</label>
						{hasVoted ? (
							<a href={`mailto:${artist.artistEmail}`}>{artist.artistEmail}</a>
						) : (
							<BlurredText>{artist.artistEmail}</BlurredText>
						)}
					</div>
					<div className="info-item">
						<label>Website</label>
						<a href={artist.artistWebsite} target="_blank" rel="noreferrer">
							Visit Portfolio
						</a>
					</div>
				</InfoGrid>

				<VoteButton onClick={() => setShowVotePopup(true)}>
					<FaRegHeart />
					Vote for {artist.artistName}
				</VoteButton>

				{showVotePopup && (
					<VotePopup
						artist={artist}
						onClose={() => setShowVotePopup(false)}
						onVote={() => setVoteTrigger((prev) => !prev)}
					/>
				)}
			</ArtistInfoCard>

			<PerformanceCard>
				<h3>Performance History</h3>
				<div className="chart-container">
					<ResponsiveContainer width="100%" height={300}>
						<LineChart data={artist.performance}>
							<Line
								type="monotone"
								dataKey="votes"
								stroke="#ff56b1"
								strokeWidth={1}
								dot={{ fill: "#ff56b1", strokeWidth: 1 }}
							/>
							<XAxis
								dataKey="month"
								tick={{ fill: "#666" }}
								axisLine={{ stroke: "#ddd" }}
							/>
							<YAxis tick={{ fill: "#666" }} axisLine={{ stroke: "#ddd" }} />
							<Tooltip
								contentStyle={{
									background: "#fff",
									border: "none",
									borderRadius: "8px",
									boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
								}}
							/>
						</LineChart>
					</ResponsiveContainer>
					<ChartExplanation>
						This graph shows the monthly vote progression for the artist. Data
						is collected from verified votes over the last 5 months.
					</ChartExplanation>
				</div>
			</PerformanceCard>
		</ProfileContainer>
	);
};

export default ArtistProfile;
