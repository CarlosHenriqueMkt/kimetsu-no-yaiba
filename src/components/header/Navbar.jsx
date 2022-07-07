import React, { useState } from "react";
import "./style.css";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaRegTimesCircle } from "react-icons/fa";
import animeLogo from "../../utils/assets/img/Large-Demon-Slayer-Logo.png";

export default function Navbar() {
	const [click, setClick] = useState(false);
	const menuClassName = click ? "openMenu" : "closedMenu";
	const handleClick = () => setClick(!click);

	return (
		<>
			<nav>
				<img className="logo" src={animeLogo} alt="" />
				<ul className={menuClassName}>
					<li>
						<a href="#home">Home</a>
					</li>
					<li>
						<a href="#personagens">Personagens</a>
					</li>
					<li>
						<a href="#news">News</a>
					</li>
					<li>
						<a href="#contribua">Contribua</a>
					</li>
				</ul>
				<button className="btn" href="contribua">
					Saiba mais
				</button>
				<div className="hamburguer" onClick={handleClick}>
					{click ? (
						<FaRegTimesCircle className="icon" />
					) : (
						<HiOutlineMenuAlt4 className="icon" />
					)}
				</div>
			</nav>
		</>
	);
}
