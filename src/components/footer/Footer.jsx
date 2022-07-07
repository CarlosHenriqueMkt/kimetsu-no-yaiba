import React from "react";
import "./style.css";
import {
	FaFacebook,
	FaInstagram,
	FaLinkedinIn,
	FaTwitter,
	FaCopyright,
} from "react-icons/fa";

export default function Footer() {
	const clickFace = () => {
		window.open("https://www.facebook.com/DemonSlayer.anime");
	};

	const clickTwt = () => {
		window.open("https://twitter.com/DemonSlayerUSA");
	};

	return (
		<>
			<footer className="flexFooter">
				<div className="socialLinks">
					<FaFacebook className="links" onClick={clickFace} />

					<FaTwitter className="links" onClick={clickTwt} />
				</div>
				<div className="crgt">
					Copyright <FaCopyright className="icon" /> 2022. Todos os
					direitos reservados para{" "}
					<strong>Carlos Henrique R. Pereira</strong>
				</div>
			</footer>
		</>
	);
}
