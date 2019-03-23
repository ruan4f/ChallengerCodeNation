import React from 'react'

const RecipeItem = ({ item }) => (
    <div className="col-sm-3 mt-4">
        <div className="card">
            <img className="card-img-top img-fluid" src={item.thumbnail} alt="" />
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">
                    <strong>Ingredients: </strong>{item.ingredients}
                </p>
            </div>
        </div>
    </div>
)

export default RecipeItem;