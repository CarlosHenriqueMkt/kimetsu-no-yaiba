import React from "react";
import "./style.css";
import anime01 from "../../utils/assets/img/anime-expo.webp";
import anime02 from "../../utils/assets/img/village-arc.jpg";
import anime03 from "../../utils/assets/img/box-set.jpg";
import anime04 from "../../utils/assets/img/Top-Selling.webp";
import anime05 from "../../utils/assets/img/kimetsu-orchestra.jpeg";

export default function NewsGrid() {
	return (
		<section>
			<div className="containerTitle">
				<h3>Fique por dentro de todas as notícias!</h3>
			</div>
			<div className="containerNews" id="news">
				<div className="Box-1">
					<a
						href="https://www.animenewsnetwork.com/convention/2022/anime-expo/demon-slayer-kimetsu-no-yaiba-third-anniversary-celebration/.187177"
						target="_blank"
						rel="noreferrer"
					>
						<img src={anime01} alt="" />
					</a>
					<h4 className="title">
						Demon Slayer: Kimetsu no Yaiba Third Anniversary
						Celebration
					</h4>
				</div>
				<div className="Box-2">
					<a
						href="https://www.animenewsnetwork.com/news/2022-02-13/demon-slayer-manga-swordsmith-village-arc-gets-tv-anime/.182581"
						target="_blank"
						rel="noreferrer"
					>
						<img src={anime02} alt="" />
					</a>
					<h4 className="title">
						Demon Slayer Manga's Swordsmith Village Arc Gets TV
						Anime
					</h4>
				</div>
				<div className="Box-3">
					<a
						href="https://www.animenewsnetwork.com/news/2021-12-05/demon-slayer-complete-box-set-ranks-no.3-on-u.s-monthly-bookscan-november-list/.180273"
						target="_blank"
						rel="noreferrer"
					>
						<img src={anime03} alt="" />
					</a>
					<h4 className="title">
						Demon Slayer Complete Box Set Ranks #3 on U.S. Monthly
						Bookscan November List
					</h4>
				</div>
				<div className="Box-4">
					<a
						href="https://www.animenewsnetwork.com/news/2021-11-28/top-selling-manga-in-japan-by-volume-2021-demon-slayer-finale-sells-record-5.17-million/.180076"
						target="_blank"
						rel="noreferrer"
					>
						<img src={anime04} alt="" />
					</a>
					<h4 className="title">
						Top-Selling Manga in Japan by Volume: 2021 — Demon
						Slayer Finale Sells Record 5.17 Million
					</h4>
				</div>
				<div className="Box-5">
					<a
						href="https://www.animenewsnetwork.com/news/2021-11-15/kimetsu-orchestra-concert-screens-in-indian-theaters/.179558"
						target="_blank"
						rel="noreferrer"
					>
						<img src={anime05} alt="" />
					</a>
					<h4 className="title">
						Kimetsu Orchestra Concert Screens in Indian Theaters
					</h4>
				</div>
			</div>
		</section>
	);
}
