import "./Crew.css";
import Header from "../../Components/Header/Header";
import { useState, useEffect } from "react";
import axios from "axios";
interface Crew {
	name: string;
	images: {
		png: string;
		webp: string;
	};
	role: string;
	bio: string;
}
function Crew() {
	const [clickedDot, setClickedDot] = useState(0);

	function handleDots(dotIndex: number) {
		setClickedDot(dotIndex);
	}

	const [crewInfo, setCrewInfo] = useState<Crew | null>(null);

	const handleCrewClick = async (name: string) => {
		try {
			const response = await axios.get(
				`https://space-tourism-backend-production.up.railway.app/crew/${name}`
			);
			setCrewInfo(response.data.crew);
		} catch (error) {
			console.error("Error fetching  info:", error);
			setCrewInfo(null);
		}
	};

	useEffect(() => {
		const fetchFirstCrew = async () => {
			try {
				const response = await axios.get(
					"https://space-tourism-backend-production.up.railway.app/crew/Douglas Hurley"
				);
				setCrewInfo(response.data.crew);
			} catch (error) {
				console.error("Error fetching first ", error);
				setCrewInfo(null);
			}
		};

		fetchFirstCrew();
	}, []);
	const handleDotClick = (dotIndex: number, name: string) => {
		handleDots(dotIndex);
		handleCrewClick(name);
	};
	return (
		<body className="crew">
			<Header />
			<div className="crew-wrap">
				<div>
					<h3>
						<p>02</p>Meet your crew
					</h3>
					<img
						src={`https://space-tourism-backend-production.up.railway.app/img/${crewInfo?.images.png}`}
						className="rez-mob"
					></img>
					<hr className="line" />
					<div className="navbar-crew mob">
						<div
							onClick={() => handleDotClick(0, "Douglas Hurley")}
							className={clickedDot === 0 ? "chosen" : ""}
						></div>
						<div
							onClick={() => handleDotClick(1, "Mark Shuttleworth")}
							className={clickedDot === 1 ? "chosen" : ""}
						></div>
						<div
							onClick={() => handleDotClick(2, "Victor Glover")}
							className={clickedDot === 2 ? "chosen" : ""}
						></div>
						<div
							onClick={() => handleDotClick(3, "Anousheh Ansari")}
							className={clickedDot === 3 ? "chosen" : ""}
						></div>
					</div>
					<h2>{crewInfo?.role}</h2>
					<h1>{crewInfo?.name}</h1>
					<p className="crew-text">{crewInfo?.bio}</p>
					<div className="navbar-crew tab">
						<div
							onClick={() => handleDotClick(0, "Douglas Hurley")}
							className={clickedDot === 0 ? "chosen" : ""}
						></div>
						<div
							onClick={() => handleDotClick(1, "Mark Shuttleworth")}
							className={clickedDot === 1 ? "chosen" : ""}
						></div>
						<div
							onClick={() => handleDotClick(2, "Victor Glover")}
							className={clickedDot === 2 ? "chosen" : ""}
						></div>
						<div
							onClick={() => handleDotClick(3, "Anousheh Ansari")}
							className={clickedDot === 3 ? "chosen" : ""}
						></div>
					</div>
				</div>
				<div>
					<img
						src={
							"https://space-tourism-backend-production.up.railway.app/public/images" +
							crewInfo?.images.png
						}
						className="rez-tab"
					></img>
				</div>
			</div>
		</body>
	);
}

export default Crew;
