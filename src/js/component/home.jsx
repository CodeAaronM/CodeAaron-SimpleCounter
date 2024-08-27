import React from "react";

//create your first component

let clock = <i className="fa-regular fa-clock"></i>

const Home = (props) => {
	let arr = Array.from(String(props.conteo)).reverse()

	let number1 = arr[5] != undefined ? arr[5] : 0;
	let number2 = arr[4] != undefined ? arr[4] : 0;
	let number3 = arr[3] != undefined ? arr[3] : 0;
	let number4 = arr[2] != undefined ? arr[2] : 0;
	let number5 = arr[1] != undefined ? arr[1] : 0;
	let number6 = arr[0] != undefined ? arr[0] : 0;


	/* const formattedSeconds = seconds.toString().padStart(6, '0'); */

	return (
		<div className="container-fluid row border bg-black p-4" style={{height: "340px"}}>
			<div className="col card text-center bg-dark text-white m-3">
				<h1 style={{fontSize:"200px"}}>{clock}</h1>
			</div>
			<div className="col card text-center bg-dark text-white m-3">
				<h1 style={{fontSize:"200px"}}>{number1}</h1>
			</div>
			<div className="col card text-center bg-dark text-white m-3">
				<h1 style={{fontSize:"200px"}}>{number2}</h1>
			</div>
			<div className="col card text-center bg-dark text-white m-3">
				<h1 style={{fontSize:"200px"}}>{number3}</h1>
			</div>
			<div className="col card text-center bg-dark text-white m-3">
				<h1 style={{fontSize:"200px"}}>{number4}</h1>
			</div>
			<div className="col card text-center bg-dark text-white m-3">
				<h1 style={{fontSize:"200px"}}>{number5}</h1>
			</div>
			<div className="col card text-center bg-dark text-white m-3">
				<h1 style={{fontSize:"200px"}}>{number6}</h1>
			</div>
		</div>
	);
};

export default Home;
