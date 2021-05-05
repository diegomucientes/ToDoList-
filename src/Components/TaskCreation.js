import React, {useState}  from 'react';
import {useParams} from 'react-router-dom'

const TaskCreation = (props) => {
    
    //console.log(props)
    const params  = useParams(); 
    console.log(params);
    const {setTareas, tareas} = props

    const [tarea, setTarea] = useState(params.id? tareas[params.id] : "");
    console.log(tarea)
    const onSubmit = (e) => {
        e.preventDefault();
/*         const form = e.target;
        const formData = new FormData(form);
        const payload = {};
        for (const [key, val] of formData.entries()) payload[key] = val;
        const tareaNueva = payload['ftarea']; */

        if(params.id){
            //tareas.map( index == params.id =>  setTareas(tarea => tareas[index]=tarea))
           const  tareasaux =  tareas.map(x => x); //hace copia de tareas
           tareasaux[params.id] = tarea;  //cambia el valor de la tarea que se edita
           setTareas(tareasaux)
           console.log(tareasaux)

        } else {
            setTareas(
                previousState => 
                    [...previousState, tarea]  
            )
        }
       
    
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
