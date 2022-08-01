import React , {useState} from 'react';
import './App.css';
import ListStudent from './components/ListStudent';
import {addStudent, getAllStudents} from './store';

/*
form 
  name  
    input type ="text"
  education // class ,
    select tag , simplicity text box 
      class 1, class 2, ...puc1, puc2 degree
  course // basic computer, webstie..
    select tag , simple text box
      basic computer
      website
      android app
  mobile number
    input type ="tel"
  area // weavers colony
    input type="text"
  gender // male , female
    input type ="radio " name="gender" value="male"
    input type ="radio " name="gender" value="female"
  fee // how much money paing
    input type="number"
  notes // extra co
    textrea 
*/

// CSS 
function AddStudent(){

  var [name, setName] = useState('');
  var [mobileNumber, setMobileNumber] = useState('');
  var [course, setCourse] = useState('');
  var [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

     var student = {
       name: name,
       mobileNumber: mobileNumber,
       course: course,
       notes: notes
     };

     addStudent(student);


  };
  
  return (
    <form onSubmit = {handleSubmit}>
      <h2>Add Student</h2>
      <label>
        Name:
        
      </label>
      <br/>
      <input 
        type="text" 
        name="name" 
        id="name"
        value = {name}
        onChange={(e) => setName(e.target.value)}
         />

      <br/>

      <label>
        Mobile number:
        
      </label>
      <br/>
      <input 
        type="tel" 
        name="mobile_number" 
        id="mobile_number"
        value = {mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
        />

      <br/>

      <label>
        Course
      </label>

      <select 
        name="course" 
        id="course"
        value ={course}
        onChange={(e) => setCourse(e.target.value)}
        >
          <option value="basic_computer">Basic Computer</option>
          <option value="website">Website</option>
          <option value="android_app">Android app</option>
      </select>
      <br/>
      <label>
        Notes
      </label>
      <br/>
      <textarea 
        name="notes" 
        id="notes" 
        rows="3" 
        cols="50"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        />
      <br/>
      <input type="submit"/>
    </form>
  );
}
  
function App() {
    // var students = getAllStudents();
    return ( 

      <div>
        <h1> Student management website </h1>

        <AddStudent/>
        <ListStudent />
        
        {/* <ol>
          <li>add student</li> 

          <li>
              
          </li>
          
          <li>
              delete student
          </li>  

          <li>
              edit student
          </li>
          
          <li>
            list student
          </li>
          <li>search Student</li>
        </ol> */}


      </div>
    );
}
  
export default App;