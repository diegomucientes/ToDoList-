import React from 'react';


const ShowTask = (props) => {

    const {tareas}=props;
    
    return (
        <div>
            {tareas.length>0 ? tareas.map((item,index)=><div>{item}</div>):""}
        </div>
    );
}

export default ShowTask;
