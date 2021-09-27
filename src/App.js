import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function getAuth() {

  const data =  {
  grant_type:'authorization_code',
    client_id:'7Aub1XP8gKBvfnQjTfGhLWj6',
    client_secret:'3WEyMZgmtROna0Cag1Aokj0Amek28gaSpUlsNUmR8QhUrHsR',
    redirect_uri:'https://www.oauth.com/playground/authorization-code.html',
    code:'Nl4I5GZa6u07BUCdV-98tLyLrn82Viv4eJ7GNBkb81w5x-5r',
  };


  var headers = {
    'Content-Type': 'text/html',
    'Access-Control-Allow-Origin': 'https://localhost:3000',
    'Accept': 'text/html',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS'
  };

  axios.post('https://authorization-server.com/token', data, {headers})
    .then(res => {
      console.log(res);
      
    })
}

function App() {
  return (
    <div className="App">
      <div class="click-here">
        <button onClick={getAuth}>Authorize</button>
      </div>
      {/* <header className="App-header">



        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
