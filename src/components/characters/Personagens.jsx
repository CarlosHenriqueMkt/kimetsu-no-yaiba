import axios from "axios";
import React, { useEffect, useState } from "react";

import "./style.css";

export default function Personagens() {
	const [animes, setAnimes] = useState([]);
	const [visible, setVisible] = useState(4);

	const showMoreItems = () => {
		setVisible((prevValue) => prevValue + 4);
	};

	const showLessItems = () => {
		if (visible !== 4) {
			setVisible((prevValue) => prevValue - 4);
		} else return visible;
	};

	console.log(animes);

	useEffect(() => {
		axios
			.get("https://api.jikan.moe/v4/anime/38000/characters")
			.then((response) => {
				setAnimes(response.data.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<>
			<div className="chars" id="personagens">
				<h2>Conheça todos os personagens!</h2>
				<div>
					<p>Clique no personagem e descubra sua trajetória</p>
				</div>
				<div className="container">
					{!!animes.length &&
						animes?.slice(0, visible).map((anime, index) => {
							return (
								<div key={index}>
									<a
										href={anime.character.url}
										target="_blank"
										rel="noreferrer"
									>
										<img
											src={
												anime.character.images.webp
													.image_url
											}
											alt={anime.character.name}
										/>
									</a>
								</div>
							);
						})}
				</div>
				{/* 				{visible <= 75 ? (
					<button
						type="button"
						onClick={showMoreItems}
						className="btn"
					>
						{" "}
						Ver mais
					</button>
				) : (
					<button
						type="button"
						onClick={showLessItems}
						className="btn"
					>
						{" "}
						Ver menos
					</button>
				)} */}
				<div>
					<button
						type="button"
						onClick={showMoreItems}
						className="btn"
					>
						{" "}
						Ver mais
					</button>
					<button
						type="button"
						onClick={showLessItems}
						className="btn"
					>
						{" "}
						Ver menos
					</button>
				</div>
			</div>
		</>
	);
}
