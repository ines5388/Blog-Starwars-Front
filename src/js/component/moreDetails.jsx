import React, {useEffect, useContext} from "react";
import { Context} from "../store/appContext.js";

const MoreDetails = (props) => {
    const {store, actions} = useContext(Context);

    let category = props.category === "characters" ? "people" :
                   props.category === "vehicles" ? "vehicles" :
                   props.category === "planets" ? "planets" : ""

    let noImgUrl = ""
    if(props.category == "planets" && props.uid == 1) {
        noImgUrl = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
    }

    useEffect(() => {
        actions.getDetails(category, props.uid);
    },[])

    return (
        <>
        <div className="card mb-3 ms-5 border-0">
            <div className="row g-0">
                <div className="col-md-3">
                <img src={noImgUrl !== "" ? noImgUrl : `https://starwars-visualguide.com/assets/img/${props.category}/${props.uid}.jpg`} className="card-img-top" alt="400x200"/>
                </div>
                <div className="col-md-7 text-center">
                    <div className="card-body">
                        <h5 className="card-title fs-2">{store.details.name}</h5>
                        <p className="card-text">{store.details.description}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="border border-danger mx-5"></div>
        <div className="text-danger d-flex justify-content-between mx-5 mt-3">
            <div>
                <p><strong>{
                props.category == "characters" ? "Name" : 
                props.category == "vehicles" ? "Model" :
                props.category == "planets" ? "Population" : ""
                }
                </strong></p>
                <p>{
                  props.category == "characters" ? store.details.name : 
                  props.category == "vehicles" ? store.details.model :
                  props.category == "planets" ? store.details.population : ""  
                }</p>
            </div>
            <div>
                <p><strong>{
                props.category == "characters" ? "Birth Year" : 
                props.category == "vehicles" ? "Crew" :
                props.category == "planets" ? "Terrain" : ""
                }
                </strong></p>
                <p>{
                    props.category == "characters" ? store.details.birth_year : 
                    props.category == "vehicles" ? store.details.crew :
                    props.category == "planets" ? store.details.terrain : ""  
                }
                </p>
            </div>
            <div>
                <p><strong>{
                    props.category == "characters" ? "Gender" : 
                    props.category == "vehicles" ? "Consumables" :
                    props.category == "planets" ? "Climate" : ""
                    }
                    </strong></p>
                <p>{
                        props.category == "characters" ? store.details.gender : 
                        props.category == "vehicles" ? store.details.consumables :
                        props.category == "planets" ? store.details.climate : ""  
                    }
                </p>
            </div>
            <div>
                <p><strong>{
                 props.category == "characters" ? "Height" : 
                 props.category == "vehicles" ? "Manufacturer" :
                 props.category == "planets" ? "Diameter" : ""
                 }
                </strong></p>
                <p> {  
                    props.category == "characters" ? store.details.height : 
                    props.category == "vehicles" ? store.details.manufacturer :
                    props.category == "planets" ? store.details.diameter : ""  
                    }
                </p>
            </div>
            <div>
                <p><strong>{
                 props.category == "characters" ? "Skin Color" : 
                 props.category == "vehicles" ? "Length" :
                 props.category == "planets" ? "Orbital Period" : ""
                 }</strong></p>
                <p>{
                    props.category == "characters" ? store.details.skin_color : 
                    props.category == "vehicles" ? store.details.length :
                    props.category == "planets" ? store.details.orbital_period : ""  
                }
                </p>
            </div>
            <div>
                <p><strong>{
                 props.category == "characters" ? "Eye Color" : 
                 props.category == "vehicles" ? "Passengers" :
                 props.category == "planets" ? "Gravity" : ""
                 }</strong></p>
                <p>{
                        props.category == "characters" ? store.details.eye_color : 
                        props.category == "vehicles" ? store.details.passengers :
                        props.category == "planets" ? store.details.gravity : ""  
                     }
                </p>
            </div>
        </div>
        </>
    )
};

export default MoreDetails;
