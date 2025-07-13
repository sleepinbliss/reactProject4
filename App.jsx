import { useState, Suspense, lazy } from "react";
import { AiFillExperiment } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

import { motion } from "motion/react";
import LeftContent from "./LeftContent";
import CenterContent from "./CenterContent";
import ComponentInteraction from "./ComponentInteraction";
import PCCom from "./CIExample1";
import PCCom2 from "./CIExample2";
import ListStuff from "./ListStuff";
import ListStuff2 from "./ListStuff2";

function App() {
	const [currentPage, setCurrentPage] = useState(0);

	const section1Pages = [
		<ComponentInteraction />,
		<PCCom />,
		<PCCom2 />,
		<ListStuff />,
		<ListStuff2 />,
	];

	function changePage(id) {
		if (id === "right" && currentPage < section1Pages.length - 1) {
			setCurrentPage((prev) => prev + 1);
		} else if (id === "left" && currentPage > 0) {
			setCurrentPage((prev) => prev - 1);
		}
	}

	return (
		<>
			<div className="menuBar centerDiv fullSize">
				<div className="menuOptions fullSize centerDiv leftMenu">
					<AiFillExperiment className="logo" />
				</div>
				<div className="menuOptions fullSize centerDiv searchContainer">
					<input type="text" id="searchBar" />
					<IoSearch className="searchIcon" />
				</div>
			</div>
			<motion.div
				className="mainContainer centerDiv fullSize"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, ease: "easeInOut" }}
			>
				<motion.div
					className="leftContainer centerDiv bordRadius"
					initial={{ y: 10 }}
					animate={{ y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<LeftContent
						currentPage={currentPage}
						section1Pages={section1Pages}
						setCurrentPage={setCurrentPage}
					/>
				</motion.div>

				<motion.div
					className="contentContainer centerDiv fullSize bordRadius"
					initial={{ y: 15 }}
					animate={{ y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<CenterContent
						currentPage={currentPage}
						section1Pages={section1Pages}
					/>
				</motion.div>
				<div className="centerDiv rightMenu">
					<CgProfile className="profileIcon" />
					<p>Username12341</p>
				</div>
				<motion.div
					className="rightContainer centerDiv bordRadius"
					initial={{ y: 9 }}
					animate={{ y: 0 }}
					transition={{ duration: 1 }}
				>
					{" "}
					<button
						type="button"
						id="leftClick"
						onClick={() => changePage("left")}
					>
						<IoIosArrowBack />
					</button>
					<div className="totalPages">
						{currentPage + 1}/{section1Pages.length}
					</div>
					<button
						type="button"
						id="rightClick"
						onClick={() => changePage("right")}
					>
						<IoIosArrowForward />
					</button>
				</motion.div>
			</motion.div>
			<div className="bottomBar centerDiv fullSize"></div>
		</>
	);
}

export default App;
