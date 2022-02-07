import './App.css';
import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Uzgartirish from './pages/Uzgartirish';
import Qushish from './pages/Qushish';
import Mebellar from './pages/Mebellar';
import GlobalStyle from './styles/GlobalStyle';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
     <>
      <GlobalStyle />
      <div className="main w-100">
        <Routes  >
          <Route path="/" element={<Mebellar />} />
          <Route path='/Mebellar/*' element={<Mebellar/>}/>
          <Route path="/Qushish/*" element={<Qushish />} />
          <Route path="/Uzgartirish/*" element={<Uzgartirish />} />
        </Routes>
      </div>

    </>
  );
}

export default App;
