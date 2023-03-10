import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Landing/>}></Route>
        <Route exact path='/category/:productID' element={<ItemListContainer/>}></Route>
        <Route exact path='/item/:itemID' element={<ItemDetailContainer/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
