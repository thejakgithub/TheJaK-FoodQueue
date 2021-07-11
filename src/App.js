import React, { useEffect, useState } from 'react'
import FoodInput from './components/FoodInput'
import FoodDetail from './components/FoodList';



export default function App() {
   
  const [id, setId] = useState(Date.now());


  const [food, setFood] = useState(()=>{
  const saveFood = localStorage.getItem("food");

    if(saveFood){
      return JSON.parse(saveFood);
    }else {
      return [];
    }
  });
  const [editingFood, setEditingFood] = useState(undefined);
  let isUpdated = false;

  useEffect(()=>{
    localStorage.setItem('food',JSON.stringify(food))
  },[food]);

  function updateFood(name) {
    let newEditingFood = editingFood;
   
    const newFood = food;
    if (newEditingFood) {
      newEditingFood.name = name;

      newFood.forEach((theFood) => {
        if (theFood.id === newEditingFood.id) {
          theFood = newEditingFood;
          isUpdated = true;
        }
      })
    }
    
    if (isUpdated) {
      setFood(newFood);
      localStorage.setItem('food',JSON.stringify(food))
    } else {
      const inComingFood = { id, name };
      setFood([...food, inComingFood]);
      setId(Date.now());

    }

    setEditingFood(undefined);
  }

  function deleteFood(id) {
    const updateFoodList = food.filter((theFood) => theFood.id !== id);
    setFood(updateFoodList);
    isUpdated = false;
    setEditingFood(undefined);
  }

  function editFood(foodDetail) {
    
    setEditingFood(foodDetail);
  }

  //Elements
  let foodListElements = (
    food[0] && <div className="card card-body"><h1 align="center">รายการอาหาร</h1>
      {food.map((theFood) =>
        <FoodDetail key={theFood.id} foodDetail={theFood} deleteFood={deleteFood} editFood={editFood}
        />)}
      {food[1] && <button onClick={() => {setEditingFood(undefined);
      setFood([]) ;
      }} className="btn btn-danger  mt-3">ลบรายการทั้งหมด</button>}
    </div>
  );

  return (
    <div className="container">
      <h1 align="center" className="mt-2">Food Queue Application</h1>
      <FoodInput updateFood={updateFood} editingFood={editingFood}  food={food} />
      {foodListElements}
    </div>
  )

}

