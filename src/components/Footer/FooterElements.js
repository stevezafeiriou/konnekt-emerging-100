import styled from "styled-components";

export const FooterContainer = styled.footer`
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	padding: 1rem 2rem;
	backdrop-filter: blur(10px);
	border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

export const FooterContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 0.9rem;
	color: #666;

	a {
		color: #ff56b1;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}

	@media (max-width: 768px) {
		flex-direction: column;
		gap: 0.5rem;
		text-align: center;
	}
`;
