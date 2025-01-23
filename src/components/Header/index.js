import React, { useState } from "react";
import { FiInfo } from "react-icons/fi";
import {
	HeaderContainer,
	Title,
	InfoButton,
	InfoPopup,
	Overlay,
} from "./HeaderElements";

const Header = () => {
	const [showInfo, setShowInfo] = useState(false);

	return (
		<>
			<HeaderContainer>
				<Title href="https://konnekt.gr">Konnekt List</Title>
				<InfoButton onClick={() => setShowInfo(true)}>
					<FiInfo size={24} />
				</InfoButton>
			</HeaderContainer>

			{showInfo && (
				<Overlay onClick={() => setShowInfo(false)}>
					<InfoPopup onClick={(e) => e.stopPropagation()}>
						<h2>Information</h2>
						<p>
							Discover and vote for the most promising emerging artists of 2025.
							Our ranking is community-driven and updated in real-time.
						</p>

						<h3>Explore Konnekt.</h3>
						<div className="social-links">
							<a
								href="https://stevezafeiriou.com/articles"
								target="_blank"
								rel="noopener noreferrer"
							>
								Blog
							</a>
							<a
								href="https://x.com/steve_zafeiriou"
								target="_blank"
								rel="noopener noreferrer"
							>
								X
							</a>
							<a
								href="https://instagram.com/stevezafeiriou"
								target="_blank"
								rel="noopener noreferrer"
							>
								Instagram
							</a>
						</div>

						<div className="legal-links">
							<a
								href="https://stevezafeiriou.com/terms-of-service/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Terms of Service
							</a>
							<a
								href="https://stevezafeiriou.com/privacy-policy/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Privacy Policy
							</a>
						</div>
					</InfoPopup>
				</Overlay>
			)}
		</>
	);
};

export default Header;
