import react, { useState } from "react";
import axios from "axios";

const RosterUpload = (props) => {
	const [selectedFile, setSelectedFile] = useState(null);

	const handleFileChange = (event) => {
		setSelectedFile(event.target.files[0]);
	};

	const handleDrop = (event) => {
		event.preventDefault();
		setSelectedFile(event.dataTransfer.files[0]);
	};

	const handleDragOver = (event) => {
		event.preventDefault();
	};
	const handleSubmit = async (event) => {
		event.preventDefault(); // Prevents the default form submission behavior

		// Create a FormData object to hold the form data
		const formData = new FormData();
		formData.append("file", selectedFile);

		try {
			// Send the form data using Axios
			const response = await axios.post("http://rbserver.charlieschuyler.com/upload", formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});

			// Handle the response
			console.log("Response:", response);
			// Do something with the response data if needed
		} catch (error) {
			// Handle any errors that occur during the request
			console.error("Error:", error);
			// Display an error message or take appropriate action
		}
	};

	return (
		<form className="upload-container" onSubmit={handleSubmit}>
			<div className="file-upload-container" onDrop={handleDrop} onDragOver={handleDragOver}>
				{selectedFile ? (
					<div className="selected-file">{selectedFile.name}</div>
				) : (
					<div className="upload-prompt">
						<div className="icon">+</div>
						<div className="text">Drag and drop a PDF file here</div>
					</div>
				)}
			</div>
			<input type="file" accept=".pdf" name="file" className="file-input" onChange={handleFileChange} />
			<div className="buttons">
				<input type="submit" className="submit" value="Submit" />
				<input type="button" value="Back" className="back" onClick={props.toggleAuth} />
			</div>
		</form>
	);
};

export default RosterUpload;
