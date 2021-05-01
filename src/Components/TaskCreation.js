import React, {useState,useParams}  from 'react';

const TaskCreation = (props) => {
    
    //console.log(props)
    const params  = useParams();
    console.log("llegue"+params);
    const {setTareas, tareas} = props
    const [tarea, setTarea] = useState();
    
    const onSubmit = (e) => {
        e.preventDefault();
/*         const form = e.target;
        const formData = new FormData(form);
        const payload = {};
        for (const [key, val] of formData.entries()) payload[key] = val;
        const tareaNueva = payload['ftarea']; */

        setTareas(
            previousState => 
                [...previousState, tarea]  
        )
    
    }
    console.log(tareas)
    const onChange = (e) => {
        setTarea(e.target.value)
    }
    
    

    return (
        
        <form onSubmit={onSubmit}>
            <label htmlFor="ftarea">Tarea:</label>
            <input value={tarea}type="text" id="ftarea" name="ftarea" onChange={onChange}/>
            <button>Enviar</button>
        </form>
    );
}

export default TaskCreation;
