import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Home from "./Pages/Home"
import './App.css'
import './bootstrap.min.css'
import Mainpage from "./Pages/Mainpage"
import { Route, Routes } from "react-router-dom"
import History from "./Pages/History"
import Pnf from "./Pages/Pnf"


function App() {
  return (
    <div className="aa">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}> </Route>
          <Route path='/main' element={<Mainpage></Mainpage>}></Route>
      <Route path='/history' element={<History></History>}></Route>
     <Route path="*" element={<Pnf></Pnf>}></Route>
      </Routes>
      
      <Footer></Footer>
      
    </div>
  )
}

export default App
