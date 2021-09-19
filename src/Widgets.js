import React from 'react'
import './Widgets.css';
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
    const newsArticle =(heading,subtitle)=>(
       <div className="widgets__article"> 
        <div className="widgets__articleLeft">
           <FiberManualRecordIcon />
        </div>

        <div className="widgets__articleRight">
           <h4>{heading}</h4>
           <p>{subtitle}</p>
        </div>
      </div> 
    )

    return (
        <div className="widgets">
            <div className="widgets__header">
                 <h2>LinkedIn News</h2>
                 <InfoIcon />
            </div>
            {newsArticle("PAPA fam is back","Top news - 9099 readers")}
            {newsArticle("CoronaVirus India Updates ","2008 new cases in Telengana ")}
            {newsArticle("ola enters into automobiles","Ola launches new S-21 ev scooter")}
            {newsArticle("ICMR warns India","THIRD-WAVE is coming-up BE SAFE STAY HOME")}
            {newsArticle("TALIBAN takes control over Afghanistan","Protests again the taliban forces began in Kabul")}
            
        </div>
    );
}

export default Widgets
