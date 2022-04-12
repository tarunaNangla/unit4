import logo from './logo.svg';
import './App.css';

import Allbutton from './day1/JoinUs';
import Allbutton1 from './day1/Settings';
import Btn1 from './day1/LogIn';
import Btn2 from './day1/Contact';
import Btn3 from './day1/Search'
import Btn4 from './day1/Help'
import Btn5 from './day1/Home'
import Btn6 from './day1/Download'
 import {Unorder,Unorderlist} from './day1/problem1'
function App() {
  return (
    <>
    <div className='div1'>

    <h1>Mobile Operating System</h1>
    <Unorder/>
    <h1>Mobile Manufactures</h1>
    <Unorderlist/>
    </div>
    <div className="App">
      
    
    <Allbutton />
    <Allbutton1/>
    <Btn1 />
    <Btn2 />
    <Btn3 />
    <Btn4 />
    <Btn5 />
    <Btn6 />
   
    </div>
    </>

    
  );
}



export default App;

