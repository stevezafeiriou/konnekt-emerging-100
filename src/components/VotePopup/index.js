import React, { useState } from "react";
import {
	PopupOverlay,
	PopupContent,
	PopupHeader,
	PopupInput,
	PopupButton,
	TermsLabel,
} from "./VotePopupElements";

const API_BASE = process.env.REACT_APP_API_BASE || "https://konnekt.gr/wp-json";

const VotePopup = ({ artist, onClose, onVote }) => {
	const [email, setEmail] = useState("");
	const [acceptTerms, setAcceptTerms] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			const response = await fetch(`${API_BASE}/eap/v1/vote/initiate`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: email,
					artist_id: artist.id,
				}),
			});

			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(errorData.message || "Failed to initiate vote");
			}

			// Store voted artist in localStorage
			const votedArtists = JSON.parse(
				localStorage.getItem("votedArtists") || "[]"
			);
			localStorage.setItem(
				"votedArtists",
				JSON.stringify([...votedArtists, artist.id])
			);

			alert(
				"Verification email sent! Please check your inbox to confirm your vote."
			);
			onVote(); // This should trigger context refresh
			onClose();
		} catch (error) {
			alert(error.message);
		} finally {
			setIsSubmitting(false);
		}
	};

	const validateEmail = (email) => {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	};

	return (
		<PopupOverlay onClick={onClose}>
			<PopupContent onClick={(e) => e.stopPropagation()}>
				<PopupHeader>Vote for {artist.artistName}</PopupHeader>
				<form onSubmit={handleSubmit}>
					<PopupInput
						type="email"
						placeholder="your@email.com"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						disabled={isSubmitting}
					/>

					<TermsLabel>
						<input
							type="checkbox"
							checked={acceptTerms}
							onChange={(e) => setAcceptTerms(e.target.checked)}
							disabled={isSubmitting}
							required
						/>
						I accept the terms and conditions
					</TermsLabel>

					<div className="button-group">
						<PopupButton
							type="submit"
							$primary
							disabled={!validateEmail(email) || !acceptTerms || isSubmitting}
						>
							{isSubmitting ? "Sending..." : "Submit Vote"}
						</PopupButton>
						<PopupButton
							type="button"
							onClick={onClose}
							disabled={isSubmitting} // Only disable if submitting
						>
							Cancel
						</PopupButton>
					</div>
				</form>
			</PopupContent>
		</PopupOverlay>
	);
};

export default VotePopup;
