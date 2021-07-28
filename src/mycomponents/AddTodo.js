import React, { useState } from 'react';

export const AddTodo = (props) => {

   const [title, setTitle] = useState("");
   const [desc, setDesc] = useState("");

  const submit =(e) =>{

    e.preventDefault();
    if(!title || !desc)
    {
       alert("Title or Description is not been added");
    }
    else{
    props.addTodo(title,desc);
     setTitle("");
     setDesc("");
    }
  }
  return (
    <div className="container my-lg-5">

      <h2 id="heading-1">Add Todo-Lists</h2>

      <form className="my-4" onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
          Title :
          </label>
          <input type="text" className="form-control" id="title" value={title} name="title"  onChange={(e)=>setTitle(e.target.value)}/>
        </div>

        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
          Description :
          </label>
          <div className="form-floating py-3">
            <textarea
              className="form-control textarea"
              id="desc" name="desc" value={desc}
              onChange={(e)=>setDesc(e.target.value)}
            ></textarea>
          </div>
        </div>
        <button type="submit" className="button">
          <h6>Add Todo</h6>
        </button>
      </form>
    </div>
  );
};
