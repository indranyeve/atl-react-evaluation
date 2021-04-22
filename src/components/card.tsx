import React from "react";
import ReactDOM from "react-dom";
import RIGHTARROW from "../content/img/long-arrow-alt-right-solid.svg";

const Card = (props: any) =>{
    return(
        <div className="col-12 col-md-3 col-lg-3">
            <div className="card card-courses">
                <div className="item-thumnail">
                    <img src={props.image} alt={props.alt}/>
                </div>
                <div className="card-detail text-center border d-flex justify-content-center align-content-between flex-wrap pt-5">
                    <div>
                        <p className="course-name1">{props.courseName1}</p>
                        <p className="course-name2">{props.courseName2}</p>
                    </div>
                    <button type="button" className="btn btn-courses d-flex justify-content-around align-items-center">
                        <span>VOIR LES COURS</span>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" width="20"
                            data-icon="long-arrow-alt-right" className="svg-inline--fa fa-long-arrow-alt-right fa-w-14" role="img" 
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path fill="currentColor" d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 
                                12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 
                                0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z">
                                </path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;