import styled from "styled-components";

export const PopupOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
`;

export const PopupContent = styled.div`
	background: white;
	padding: 2rem;
	/* border-radius: 12px; */
	max-width: 400px;
	width: 90%;
	box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);

	.button-group {
		display: flex;
		gap: 1rem;
		margin-top: 1.5rem;
	}
`;

export const PopupHeader = styled.h2`
	margin: 0 0 1.5rem 0;
	font-size: 1.5rem;
	color: #333;
`;

export const PopupInput = styled.input`
	width: 100%;
	padding: 0.75rem 1rem;
	border: none;
	border-bottom: 1px solid #333;
	/* border-radius: 2rem; */
	font-size: 1rem;
	margin-bottom: 1rem;
	transition: all 0.2s ease;

	&:focus {
		outline: none;
		border-color: #ff56b1;
		box-shadow: 0 0 0 3px rgba(156, 53, 108, 0.15);
	}
`;

export const PopupButton = styled.button`
	flex: 1;
	padding: 0.75rem 1rem;
	border: none;
	font-weight: 500;
	cursor: pointer;
	transition: all 0.2s ease;
	background: ${({ $primary }) => ($primary ? "#1b1d1c" : "#f8f9fa")};
	color: ${({ $primary }) => ($primary ? "white" : "#333")};

	&:hover {
		background: ${({ $primary, disabled }) =>
			!disabled && ($primary ? "#ff56b1" : "#f1f3f5")};
	}

	&:disabled {
		opacity: 0.7;
		cursor: not-allowed;
		background: ${({ $primary }) => ($primary ? "#555" : "#eee")};
		color: ${({ $primary }) => ($primary ? "#ccc" : "#999")};
	}
`;

export const TermsLabel = styled.label`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	font-size: 0.875rem;
	color: #666;
	margin: 1rem 0;

	input {
		margin: 0;
	}
`;
