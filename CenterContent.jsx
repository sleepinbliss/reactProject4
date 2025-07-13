function CenterContent({ currentPage, section1Pages }) {
	return (
		<>
			<div className="mainContent centerDiv fullSize">
				<div className="centerScreen">{section1Pages[currentPage]}</div>
			</div>
		</>
	);
}

export default CenterContent;
