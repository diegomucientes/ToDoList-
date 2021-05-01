import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import TaskCreation from './Components/TaskCreation'
import ShowTask from './Components/ShowTask'

function App() {
  const [tareas, setTareas] = useState([]); 
  
    return (
        <div className="App">
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/show-task">
                                    {' '}
                                    Show Task
                                </Link>
                            </li>
                            <li>
                                <Link to="/create-task">
                                    Crear Task
                                </Link>
                            </li>
                            <li>
                                <Link to="edit-task/:id">Editar Task</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/show-task">
                            <ShowTask />
                        </Route>
                        <Route path="/create-task">
                            <TaskCreation tareas={tareas} setTareas={setTareas}/>
                        </Route>
                        <Route path="/edit-task/:id">
                            <TaskCreation />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App
