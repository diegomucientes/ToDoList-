import React from 'react'
import {Link} from 'react-router-dom';


const ShowTask = (props) => {
    const { tareas } = props

    return (
        <div>
            {tareas.length > 0
                ? tareas.map((item, index) => (
                      <Link key={index} to={`/edit-task/${index}`}>
                          {item}
                      </Link>
                  ))
                : ''}
        </div>
    )
}

export default ShowTask
