import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavHeader from './components/NavHeader';
import Footer from  './components/Footer';
 import Cards from './components/Cards';
 import ProductList from './components/ProductList';
 import{ BrowserRouter as Router,Routes,Route } from 'react-router-dom';
 import Details from './components/Details';
import Userform from './components/Userform';
 

function App() {
//   return (
    
//     <div className="App">
//       <header className="App-header">
//        <NavHeader/>
//       </header>
//       <Cards/>
//       <Cards/>
//       <Footer/>
   
//     </div>
//   );
// }
return(
  <Router>
    <div>
      <NavHeader/>
    <div className="container mt-5">
      <div className="row">
        

        <Routes>
        
          <Route path="/" element={<ProductList/>}/>
          <Route path="/checkout/:id" element={<Details/>}/>
          <Route path="/blog" element={<Userform/>}/>
        </Routes>
      </div>
    </div>
    <Footer/>
    </div>
  </Router>
);
}
export default App;
