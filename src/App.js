import React, { useState } from "react";
import "./style.css";


export default function App() {
  const [isClicked, setIsClicked] = useState(false);

  const handleToggle = () => {
    setIsClicked(!isClicked);
  };

  
  return (
    // <div className={`App ${isClicked ? "bkg-dark" : "bkg-light"}`}>
     <div> 
       {
         isClicked  ? <img src="https://www.aravot.am/wp-content/uploads/2018/01/Paris.jpg" />  : <img src="https://www.greattours.am/categories/tours/img_850_450/france_010.jpg" />
       } 
       
      <button className="btn" onClick={handleToggle}>
        <strong>{isClicked ? "Autumn in France" : "Summer in France"}</strong>
        </button>
    </div>
  );
}
