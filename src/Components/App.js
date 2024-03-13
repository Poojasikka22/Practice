import logo from '../logo.svg';
import '../App.css';
import {Header} from './Header.js';
import {DataInfo} from './DataInfo.js';
import TabButton from './Button.js';

function App() {
function HandleSelect(selectedValue){

console.log(selectedValue);

}
  return (
  <div className="Display">
  <ul>
            <div className = "main">
            <Header  {...DataInfo[0]}/>
            <p><ul>
            <label> Email </label>
            <input type = "email" / >
           </ul>
           <ul>
                       <label> Password </label>
                       <input type = "password" / >
                        <break>
</break>
                      <TabButton ClickHandler = {() => HandleSelect('First Page')}> First Click </TabButton>
                      <TabButton ClickHandler = {() => HandleSelect('Second Page')}> Second Click </TabButton>
                      <TabButton ClickHandler = {() => HandleSelect('Third Page')}> Third Click </TabButton>

                      </ul>
                      </p>

            </div>
            <div className= "main2">
            <Header {... DataInfo[1]}/>
            </div>
             </ul>
    <div className="App">
      <header className="App-heanpmder">
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
      </header>
    </div>
    </div>
  );
}

export default App;
