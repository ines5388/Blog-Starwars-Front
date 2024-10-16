import React,{useContext} from "react";
import {Context} from "../store/appContext.js"
import { Link } from "react-router-dom";

const Card = (props) => {
    const {actions, store} = useContext(Context);
    const isFavorite = store.favorites.includes(props.title);

    let noImgUrl = ""
    if(props.category == "planets" && props.uid == 1) {
        noImgUrl = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
    }

   const addOrRemove = () => {
        if(!isFavorite) {
            actions.addFavorite(props.title)
        } else {
            actions.removeFavorite(props.title)
        }
    }

    return (
        <div className="card-group"> 
        <div className="card ms-5 me-2" style={{width: "18rem"}}>
            <img src={noImgUrl !== "" ? noImgUrl : `https://starwars-visualguide.com/assets/img/${props.category}/${props.uid}.jpg`} className="card-img-top" alt="400x200"/>
            <div className="card-body ms-0">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text m-0">
                    {
                    props.category == "characters" ? "Gender: " :
                    props.category == "vehicles" ? "Model: " :
                    props.category == "planets" ? "Population: " : ""
                    }
                    </p>
                <p className="card-text m-0">
                    {
                    props.category == "characters" ? "Hair Color: ": 
                    props.category == "vehicles" ? "Crew: " :
                    props.category == "planets" ? "Terrain: " : ""
                    }
                </p>
                <p className="card-text m-0">
                        {
                            props.category == "characters" ? "Eye-Color: ": 
                            props.category == "vehicles" ? "Consumables: " :
                            props.category == "planets" ? "Climate: " : ""
                            }
                </p>
                </div>
            <div className="d-flex justify-content-between mx-3 mb-2">
                    <Link to={`/details/${props.category}/${props.uid}`}>
                        <button className="btn btn-outline-primary">Learn More!</button>
                    </Link>
                <button className="btn btn-outline-warning rounded-2" onClick={addOrRemove} >
                <i className={`fa-heart ${isFavorite ? "fas text-warning" : "far"}`}></i>
                </button>
            </div>
        </div>
        </div>
    )
}

export default Card;