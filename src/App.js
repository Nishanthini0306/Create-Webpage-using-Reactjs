import React from 'react';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Student Details</h1>
        <table>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Department</th>
            <th>College</th>
            <th>City</th>
          </tr>
          <tr>
            <td>Nisha</td>
            <td>D</td>
            <td>IT</td>
            <td>HICET</td>
            <td>Coimbatore</td>
          </tr>
          <tr>
            <td>Keerthi</td>
            <td>K</td>
            <td>AI&DS</td>
            <td>HICET</td>
            <td>Coimbatore</td>
          </tr>
          <tr>
            <td>Tharanya</td>
            <td>K</td>
            <td>CSE</td>
            <td>HICET</td>
            <td>Coimbatore</td>
          </tr>
          <tr>
            <td>Sindhu</td>
            <td>K</td>
            <td>ECE</td>
            <td>HICET</td>
            <td>Coimbatore</td>
          </tr>
        </table>
        <form>
          <h2>Registration Form</h2>
          <div className='form'>
          <label>Firstname</label>
          <input type='text' placeholder='fill the firstname'></input><br></br>
          <label>Lastname</label>
          <input type='text' placeholder='fill the lastname'></input><br></br><br></br>
          <label>HSE Score</label>
          <input type='text' placeholder='fill the score'></input><br></br><br></br>
          <button>Login</button>
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
