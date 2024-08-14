//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application


let count = 0
setInterval(counter, 1000)


    
function counter() {

count = count + 1
ReactDOM.createRoot(document.getElementById('app')).render(<Home conteo = {count}/>);
    console.log(Array.from(String(count))[1])
}

