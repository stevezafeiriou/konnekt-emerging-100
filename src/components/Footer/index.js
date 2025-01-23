import React from "react";
import { FooterContainer, FooterContent } from "./FooterElements";

const Footer = () => {
	return (
		<FooterContainer>
			<FooterContent>
				<span>
					© {new Date().getFullYear()} Konnekt. A product by Saphire Labs.
				</span>
				<a
					href="https://forms.gle/9GonwcsXiZQX8SVcA"
					target="_blank"
					rel="noopener noreferrer"
				>
					Artist Submission
				</a>
			</FooterContent>
		</FooterContainer>
	);
};

export default Footer;
