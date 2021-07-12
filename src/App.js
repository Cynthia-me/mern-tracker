import React from 'react';
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"


import Navbar from '../src/Components/Navbar'
import ExercisesList from '../src/Components/ExercisesList'
import ExercisesEdit from '../src/Components/ExercisesEdit'
import CreateExercises from '../src/Components/CreateExercises'
import NewUser from '../src/Components/NewUser'


 function App(){
     return(
        <div className = "app">
         <Router>
             <Navbar/>
             <Switch>
             <Route exact path = "/" component = {ExercisesList}/>
             <Route exact path = "/edit/:id" component = {ExercisesEdit}/>
             <Route exact path = "/create" component = {CreateExercises}/>
             <Route exact path = "/user" component = {NewUser}/>
             </Switch>
         </Router>
         </div>
        
     )
     
 }

 export default App;