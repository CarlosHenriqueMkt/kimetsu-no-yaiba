import React from "react";
import Hero from "../components/hero/Hero";
import Personagens from "../components/characters/Personagens";
import NewsGrid from "../components/news/NewsGrid";
import Collaborate from "../components/bepartofit/Collaborate";

export default function Home() {
	return (
		<>
			<Hero />
			<Personagens />
			<NewsGrid />
			<Collaborate />
		</>
	);
}
