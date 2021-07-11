import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';


export default function FoodInput({ updateFood, editingFood, food }) {


    const [input, setInput] = useState(editingFood ? editingFood.name : '');

    function onChange(event) {
        setInput(event.target.value);
    }
    useEffect(() => {
        setInput(editingFood ? editingFood.name : '');
    }, [editingFood])


    function onSubmit(event) {
        event.preventDefault();

        if (input) {
            updateFood(input);
            setInput('');
        }
    }


    return (
        <div className="card card-body my-3">
            <form onSubmit={onSubmit} >
                <label className="form-label">ป้อนรายการอาหาร</label>
                <input type="text" className="form-control" value={input} onChange={onChange} autoFocus placeholder="ชื่ออาหาร" />
               {editingFood  ? 
                food[0] ?  <button type="submit" className="btn btn-success mt-3">แก้ไขรายการ</button>  :  <button type="submit" className="btn btn-primary mt-3">บันทึกรายการ</button>
                    :
                  <button type="submit" className="btn btn-primary mt-3">บันทึกรายการ</button>
                }

            </form>
        </div>
    )
}

FoodInput.propsTypes = {
    addFood: PropTypes.func.isRequired
};




