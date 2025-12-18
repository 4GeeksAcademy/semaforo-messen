import React, { useState } from "react";
import "../../styles/index.css";

//create your first component
const Home = () => {

	const [luzActiva, setLuzActiva] = useState("");

	return (
		<div className="container bg-dark align-items-center d-flex flex-column rounded-4 p-4 mx-auto mt-5"
		style={{ width: "300px", height: "600px", border: "solid, 5px, grey" }}>
            <div className={`bg-success rounded-circle mb-3 ${luzActiva === "green" ? "encendida" : ""}`}  
			style={{ width: "200px", height: "200px"}}
			onClick={() => {setLuzActiva("green")}}>
			</div>
			<div className={`bg-warning rounded-circle mb-3 ${luzActiva === "ambar" ? "encendida" : ""}`}  
			style={{ width: "200px", height: "200px"}}
			onClick={() => {setLuzActiva("ambar")}}>
					
			</div>
			<div className={`bg-danger rounded-circle mb-3 ${luzActiva === "red" ? "encendida" : ""}`}  
			style={{ width: "200px", height: "200px"}}
			onClick={() => {setLuzActiva("red")}}>
					
			</div>
		
			
		</div>
	);
};

export default Home;