// src/components/ArtistProfile/ArtistProfileElements.js
import styled from "styled-components";
import { FaArrowLeft, FaThumbsUp } from "react-icons/fa";

export const ProfileContainer = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 2rem;
	display: grid;
	gap: 2rem;

	/* New grid layout */
	grid-template-areas:
		"artwork artwork"
		"info performance";

	grid-template-columns: 1fr 2fr;

	@media (max-width: 768px) {
		grid-template-areas:
			"artwork"
			"info"
			"performance";
		grid-template-columns: 1fr;
		padding: 1rem;
	}
`;

export const ArtworkCard = styled.div`
	grid-area: artwork;
	background: white;
	/* border-radius: 1rem; */
	overflow: hidden;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
	grid-column: 1 / -1;
`;

export const ArtworkImage = styled.img`
	width: 100%;
	height: 400px;
	object-fit: cover;
	border-bottom: 4px solid #f8f8f8;

	@media (max-width: 768px) {
		height: auto;
	}
`;

export const ArtworkDetails = styled.div`
	padding: 2rem;

	h1 {
		font-size: 1.5rem;
		margin-bottom: 1rem;
		color: #333;
	}

	p {
		color: #666;
		line-height: 1.6;
	}

	@media (max-width: 768px) {
		padding: 1rem;
		font-size: 0.85rem;
		h1 {
			font-size: 1rem;
		}
	}
`;

export const ArtistInfoCard = styled.div`
	grid-area: info;
	background: white;
	/* border-radius: 1rem; */
	padding: 2rem;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	min-width: 300px;

	.artist-header {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 1rem;

		.artist-meta {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;

			h2 {
				margin: 0;
				font-size: 1.5rem;
				color: #333;
			}

			.category {
				color: #666;
				font-size: 0.9rem;
				font-weight: 500;
			}
		}
	}

	@media (max-width: 768px) {
		padding: 1rem;

		.artist-header {
			gap: 0.85rem;
			margin-bottom: 0.85rem;

			.artist-meta {
				h2 {
					font-size: 1rem;
				}

				.category {
					font-size: 0.85rem;
				}
			}
		}
	}
`;

export const ArtistImage = styled.img`
	width: 80px;
	height: 80px;
	border-radius: 50%;
	object-fit: cover;
	border: 2px solid #ddd;

	@media (max-width: 768px) {
		width: 60px;
		height: 60px;
	}
`;

export const BlurredText = styled.span`
	filter: blur(4px);
	user-select: none;
	pointer-events: none;
	position: relative;
	background: #f8f9fa;
	border-radius: 4px;
	padding: 0 4px;

	&::after {
		content: "Vote to view contact";
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		font-size: 0.75rem;
		color: #868e96;
		filter: none;
		white-space: nowrap;
	}
`;

export const InfoGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	gap: 1rem;
	padding: 1rem 0;
	border-top: 1px solid #eee;
	border-bottom: 1px solid #eee;

	.info-item {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;

		label {
			font-size: 0.9rem;
			color: #666;
		}

		.value {
			color: #333;
		}

		a {
			color: #ff56b1;
			text-decoration: none;
			transition: all 0.2s ease;

			&:hover {
				text-decoration: underline;
				opacity: 0.9;
			}
		}
	}

	@media (max-width: 768px) {
		gap: 0.85rem;
		padding: 0.85rem 0;
		font-size: 0.85rem;
	}
`;

export const PerformanceCard = styled.div`
	grid-area: performance;
	background: white;
	/* border-radius: 1rem; */
	padding: 2rem;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);

	h3 {
		margin: 0 0 2rem 0;
		font-size: 1.5rem;
		color: #333;
	}

	.chart-container {
		height: 100%;
		min-height: 300px;
	}

	@media (max-width: 768px) {
		padding: 1rem;
		font-size: 0.85rem;
		h3 {
			font-size: 1rem;
			margin: 0 0 1rem 0;
		}

		.chart-container {
			min-height: 200px;
		}
	}
`;

export const BackButton = styled.button`
	position: fixed;
	top: 6.5rem;
	left: 2rem;
	/* background: white; */
	border: none;
	/* border-radius: 50%; */
	width: 120px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #fff;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
	cursor: pointer;
	z-index: 1000;

	svg {
		margin-right: 5px;
	}

	&:hover {
		color: #ff56b1;
	}
`;

export const VoteButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	padding: 1rem 2rem;
	font-size: 1rem;
	background: #333;
	color: white;
	border: none;
	/* border-radius: 2rem; */
	/* font-weight: 600; */
	cursor: pointer;
	transition: all 0.2s ease;
	margin-top: auto;

	&:hover {
		background: #ff56b1;
	}

	svg {
		font-size: 1.2rem;
	}

	@media (max-width: 768px) {
		padding: 0.5rem 1rem;
		font-size: 0.85rem;
	}
`;

export const ChartExplanation = styled.p`
	font-size: 0.875rem;
	color: #666;
	margin: 1.5rem 0 0;
	padding-top: 1rem;
	border-top: 1px solid #eee;
	line-height: 1.6;

	@media (max-width: 768px) {
		padding-top: 0.85rem;
		margin: 0.85rem 0 0;
	}
`;

export const ImageTooltip = styled.div`
	position: absolute;
	bottom: 20px;
	left: 50%;
	transform: translateX(-50%);
	background: rgba(0, 0, 0, 0.7);
	color: white;
	padding: 6px 12px;
	border-radius: 4px;
	font-size: 0.9rem;
	opacity: 0;
	transition: opacity 0.2s ease;
	pointer-events: none;
	white-space: nowrap;
`;

export const ImageContainer = styled.div`
	position: relative;
	cursor: pointer;

	&:hover ${ImageTooltip} {
		opacity: 1;
	}
`;

export const ImagePopup = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 2000;
`;

export const PopupImage = styled.img`
	max-width: 90%;
	max-height: 90%;
	border: 2px solid #f8f8f8;
	object-fit: contain;
	cursor: zoom-out;
`;
