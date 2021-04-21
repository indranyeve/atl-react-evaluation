import React from "react";
import ReactDOM from "react-dom";


const Card = (props: any) =>{
    return(
        <div className="card col-12 col-md-4 col-lg-3 card-courses p-0">
            <div className="item-thumnail">
                <img src={props.image} alt={props.alt}/>
            </div>
            <div className="card-detail text-center border d-flex align-content-between flex-wrap">
                <p className="">{props.courseName}</p>
                <button type="button" className="btn btn-courses">VOIR LES COURS</button>
            </div>
        </div>
    );
}

export default Card;