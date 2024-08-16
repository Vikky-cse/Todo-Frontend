import { useState } from "react";
import { useDispatch } from "react-redux"
import { addNewTodo } from "../redux/actions";
import "./TodoForm.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TodoForm=()=>{
    const [text,setText]=useState("");

    const dispatch = useDispatch();

    const onFormSubmit=(e)=>{
        e.preventDefault();
        if(text.trim()===''){
            toast.warn('Task description is empty...', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
              return;
        }
        else{
        dispatch(addNewTodo(text));
        
        setText('');
        }

    }

    const onInputChange=(e)=>{
       
        setText(e.target.value);
    }


        return(
            <form className="form" onSubmit={onFormSubmit}>
                <div className="out">
                    <div className="in-input">
                <input 
                    placeholder="Enter New Todo ...."
                    className="input"
                    onChange={onInputChange}
                    value={text}
                />
                </div>
                <div className="in-button">
                <button type='submit'>Add Task</button>
                <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />
                </div>
                </div>
            </form>

        )
}

export default TodoForm;