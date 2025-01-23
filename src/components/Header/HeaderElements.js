import styled from "styled-components";

export const HeaderContainer = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	padding: 1rem 2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 1000;
	backdrop-filter: blur(10px);
	border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

export const Title = styled.a`
	margin: 0;
	font-size: 1.2rem;
	color: #333;
	text-decoration: none;

	&:hover {
		color: #ff56b1;
	}

	@media (max-width: 768px) {
		font-size: 1rem;
	}
`;

export const InfoButton = styled.button`
	background: none;
	border: none;
	cursor: pointer;
	padding: 8px;
	color: #666;
	transition: all 0.2s ease;

	&:hover {
		color: #ff56b1;
		transform: scale(1.1);
	}
`;

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 2000;
`;

export const InfoPopup = styled.div`
	background: white;
	padding: 2rem;
	max-width: 500px;
	width: 90%;

	h2 {
		margin-bottom: 20px;
		color: #333;
	}

	h3 {
		margin-top: 20px;
		color: #333;
	}

	p {
		color: #666;
		line-height: 1.6;
	}

	.social-links {
		margin: 1.5rem 0;
		display: flex;
		gap: 1rem;

		a {
			color: #ff56b1;
			text-decoration: none;
			&:hover {
				text-decoration: underline;
			}
		}
	}

	.legal-links {
		border-top: 1px solid #eee;
		padding-top: 1rem;
		display: flex;
		gap: 1.5rem;

		a {
			color: #666;
			text-decoration: none;
			font-size: 0.9rem;

			&:hover {
				color: #333;
			}
		}
	}
`;
