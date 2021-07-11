import React from 'react'

export default function FoodDetail({foodDetail,editFood,deleteFood}) {
    
 
    return (
        <div>
            <li className="list-group-item list-group-item-action   text-capitalize">
                {foodDetail.name}

                <a onClick={()=>deleteFood(foodDetail.id)}><i className="bi bi-trash-fill float-end link-danger"></i></a>
                <a onClick={()=>editFood(foodDetail)}><i className="bi bi-pencil-square float-end mx-2 link-primary"></i></a>
            </li>

        </div>
    )
}




