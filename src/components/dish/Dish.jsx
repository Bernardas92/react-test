import React from "react"

const Dish = (props)=>{
    return(
        <div className="card" style={{width: '240px'}}>
            <div className="card-body">
                <h5 className="card-title">{props.strMeal}</h5>
                    <img src={props.strMealThumb} className="card-img-top" alt="..."/>
                    <div className="card-text">
                        {props.strInstructions}
                    </div>
            </div>
                
        </div>
    )
}

export default Dish