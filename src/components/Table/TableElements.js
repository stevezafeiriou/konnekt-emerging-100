import styled from "styled-components";

export const HeaderContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 50px;
	align-items: center;
	justify-content: center;
	text-align: center;
	margin: 20px 0;

	h1 {
		font-size: 24px;
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 20px;
		}
	}
`;

export const SearchWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 20px;
	padding: 0 20px;

	svg {
		margin-left: 10px;
	}

	@media (max-width: 768px) {
		margin-top: 20px;
	}
`;

export const SearchInput = styled.input`
	width: 100%;
	max-width: 400px;
	padding: 10px 15px;
	/* border: 1px solid #ddd; */
	border: none;
	border-bottom: 1px solid #333;
	/* border-radius: 25px; */
	font-size: 1rem;
	transition: all 0.3s ease;
	background-color: transparent;

	&:focus {
		outline: none;
		border-color: #ff56b1;
		box-shadow: 0 0 0 3px rgba(156, 53, 108, 0.15);
	}

	@media (max-width: 768px) {
		padding: 10px 7.5px;
		font-size: 0.85rem;
	}
`;

export const TableWrapper = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 20px;
	overflow-x: auto;

	@media (max-width: 768px) {
		padding: 10px;
	}
`;

export const TableHeaderCell = styled.div`
	padding: 0 15px;
	${({ $align }) => $align === "left" && "text-align: left;"}
	${({ $align }) => $align === "center" && "text-align: center;"}
	
	@media (max-width: 768px) {
		padding: 0 7.5px;
	}
`;

export const TableHeader = styled.div`
	display: grid;
	grid-template-columns: minmax(200px, 2fr) repeat(3, minmax(100px, 1fr));
	align-items: center;
	padding: 15px 20px;
	background: #f3f3f3;
	/* border-radius: 8px; */
	/* margin-bottom: 10px; */
	font-size: 1rem;
	/* border-bottom: 1px solid #ddd; */

	@media (max-width: 768px) {
		padding: 7.5px 10px;
		font-size: 0.85rem;
		margin-bottom: 5px;
	}
`;

export const TableRow = styled.div`
	display: grid;
	grid-template-columns: minmax(200px, 2fr) repeat(3, minmax(100px, 1fr));
	align-items: center;
	padding: 15px 20px;
	/* margin-bottom: 8px; */
	/* background: white; */
	/* border-radius: 8px; */
	border-bottom: 1px solid #ddd;
	transition: transform 0.2s;
	cursor: pointer;
	font-size: 1rem;

	&:hover {
		/* box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); */
		background: #f3f3f3;
	}

	@media (max-width: 768px) {
		padding: 7.5px 10px;
		font-size: 0.85rem;
		margin-bottom: 4px;
	}
`;

export const ArtistColumn = styled.div`
	display: flex;
	align-items: center;
	gap: 15px;
	padding: 0 15px;

	@media (max-width: 768px) {
		padding: 0 7.5px;
		gap: 7.5px;
	}
`;

export const ArtistInfo = styled.div`
	display: flex;
	flex-direction: column;

	p {
		margin: 0;
		line-height: 1.4;

		&:first-child {
			font-weight: 600;
		}

		&:last-child {
			font-size: 0.875rem;
			color: #666;
		}
	}
`;

export const VotesColumn = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	justify-content: center;
	padding: 0 15px;

	@media (max-width: 768px) {
		padding: 0 7.5px;
		gap: 5px;
	}
`;

export const ChangeColumn = styled.div`
	text-align: center;
	padding: 0 15px;
	color: ${({ $positive }) => ($positive ? "#ff56b1" : "#fca7d6")};

	@media (max-width: 768px) {
		padding: 0 7.5px;
	}
`;

export const PerformanceColumn = styled.div`
	display: flex;
	justify-content: center;
	height: 50px;
	padding: 0 15px;

	@media (max-width: 768px) {
		padding: 0 7.5px;
	}
`;

export const VoteIcon = styled.div`
	display: flex;
	align-items: center;
	color: #666;
	cursor: pointer;
	transition: all 0.2s ease;

	&:hover {
		color: #007bff;
		transform: scale(1.1);
	}

	svg {
		font-size: 18px;
	}
`;

export const ArtistImage = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	object-fit: cover;
	border: 2px solid #eee;
`;

export const SkeletonRow = styled.div`
	display: grid;
	grid-template-columns: minmax(200px, 2fr) repeat(3, minmax(100px, 1fr));
	align-items: center;
	padding: 15px 20px;
	margin-bottom: 8px;
	background: white;
	border-radius: 8px;
	animation: pulse 1.5s infinite;

	@keyframes pulse {
		0% {
			opacity: 0.6;
		}
		50% {
			opacity: 1;
		}
		100% {
			opacity: 0.6;
		}
	}

	@media (max-width: 768px) {
		padding: 7.5px 10px;
		margin-bottom: 4px;
	}
`;

export const SkeletonImage = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background: #f0f0f0;
`;

export const SkeletonText = styled.div`
	height: 16px;
	background: #f0f0f0;
	border-radius: 4px;
	width: ${({ width }) => width || "100%"};
	margin: 4px 0;
`;

export const NoResults = styled.div`
	text-align: center;
	padding: 2rem;
	color: #666;
	font-size: 1rem;
	border-top: 1px solid #eee;

	&::before {
		content: "Ohh..";
		font-size: 2rem;
		display: block;
		margin-bottom: 1rem;
	}

	@media (max-width: 768px) {
		font-size: 0.85rem;

		&::before {
			font-size: 1.5rem;
		}
	}
`;
