import "./App.css";
import React from "react";
import Modal from "react-modal";
import ContactUs from "./components/ContactUs/ContactUs";
import { useMediaQuery } from "react-responsive";

function App() {
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
	const [modalIsOpen, setIsOpen] = React.useState(false);

	const customStyles = {
		content: {
			top: "50%",
			left: "50%",
			right: "auto",
			bottom: "auto",
			marginRight: "-50%",
			transform: "translate(-50%, -50%)",
			padding: "0px",
			borderRadius: "0px",
			width: isTabletOrMobile ? "360px" : "710px",
			height: isTabletOrMobile ? "697px" : "641px",
		},
	};

	function openModal() {
		setIsOpen(true);
	}

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
		// subtitle.style.color = "#f00";
	}

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<div className="App">
			{!modalIsOpen && (
				<button className="open-model-btn" onClick={openModal}>
					Open Modal
				</button>
			)}
			<Modal
				isOpen={modalIsOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Example Modal"
			>
				<ContactUs closeModal={closeModal} />
			</Modal>
		</div>
	);
}

export default App;
