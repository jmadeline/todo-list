import React from 'react';

const FormTodos = () => {
  return (
    <div className="card mt-5">
      <div className="card-body">
        <form>
          <div className="form-group">
            <label for="formGroupExampleInput">Todo</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Courses, comptes ..." />
          </div>
          <div className="form-group">
            <label for="formGroupExampleInput2">Describ</label>
            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Tomates, salades, oignons..." />
          </div>
          <button type="submit" class="btn btn-primary">Add</button>
        </form>
      </div>
    </div>
  )
};

export default FormTodos;