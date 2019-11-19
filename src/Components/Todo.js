import React from 'react';

//map
const Todo = (props) => {
  return (
    <div className="card mt-5">
      <div className="card-body">
        <h5 className="card-title">{props.todo}</h5>
        <p className="card-text">{props.describ}</p>
        <a href="#" className="btn btn-danger">Delete</a>
      </div>
    </div>
  )
};

export default Todo;