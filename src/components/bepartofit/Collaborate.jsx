import React from "react";
import "./style.css";

export default function Collaborate() {
	const clickAnime = () => {
		window.open("https://myanimelist.net/anime/38000/Kimetsu_no_Yaiba");
	};
	const clickManga = () => {
		window.open("https://myanimelist.net/manga/96792/Kimetsu_no_Yaiba");
	};
	const clickApi = () => {
		window.open("https://docs.api.jikan.moe/#tag/anime");
	};
	const clickRepositorio = () => {
		window.open(
			"https://github.com/CarlosHenriqueMkt/kimetsu-no-yaiba.git"
		);
	};

	return (
		<>
			<div className="flexBox">
				<div className="mainTitle">
					<h3>Colabore com o crescimento deste projeto!</h3>
				</div>
				<p className="subTitle" id="contribua">
					Você é <strong>fã de Kimetsu no Yaiba</strong> e gosta de{" "}
					<strong>Projetos Open-Souce</strong>?
				</p>
				<p className="subTitle">
					Participe do desenvolvimento deste site!
				</p>
				<p className="subTitle">
					O intuito é criar um grande banco de dados relacionado à
					Demon Slayer. O primeiro passo do projeto foi a criação de
					um Grid com os personagens que apareceram no anime e outro
					com algumas notícias sobre as conquistas de um dos maiores
					animes já criados.
				</p>
				<p className="subTitle">
					Contribua criando novas áreas e trazendo informações
					interessantes para dentro do projeto.
				</p>
			</div>
			<div className="flexButtons">
				<button className="btn" onClick={clickAnime}>
					Anime
				</button>
				<button className="btn" onClick={clickManga}>
					Mangá
				</button>
				<button className="btn" onClick={clickApi}>
					Api
				</button>
				<button className="btn" onClick={clickRepositorio}>
					Repositório
				</button>
			</div>
		</>
	);
}
