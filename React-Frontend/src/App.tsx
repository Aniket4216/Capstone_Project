import logo from './logo.svg';
import './App.css';
import Signup from './Signup'
import SignIn from './SignIn';
// import Booking from './component/Booking';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from './Dashboard';
import ContactUs from './ConatctUs';
import Book from './Book';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path="/book" element={<Book/>}/>

          {/* <Route exact path='/booking' element={<Booking/>}/> */}
        </Routes>



      </div>
    </BrowserRouter>

  );
}

export default App;
