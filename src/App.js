import React, { useState } from "react";
// import Start from './components/start/start'
import { Start, Next, Banner, Section, Shops, Categories, products, CategoryProducts, CartItem, Carts, Detail, BottomBar, Favorites, Price, Accepted, SignUp } from './components'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CatigoriesItemDisplay } from "./components/explore/catigoriesItem-display";
import { ShopProvider } from "./provider/shop-context";
import rice from './picture/rice.svg'
import Lodash from "./lodash";
import { LogIn } from "./components/account/log-in";

function App() {
  const [wait, setWait] = useState(false)
  setInterval(() => {
    setWait(true)
  }, 3000)

  return (
    <ShopProvider >
      <Router>
        <Routes>
          <Route path="/" exact element={wait ? <Next /> : <Start />}></Route>
          <Route path="/market" element={<Banner />}></Route>
          <Route path="/Explore" element={<Categories />}></Route>
          <Route path='Cart' element={<Carts />}></Route>
          <Route path='/Explore/detail/:category' element={<CatigoriesItemDisplay />}></Route>
          <Route path='/market/detail' element={<Detail />}></Route>
          <Route path='/Favorite' element={<Favorites />}></Route>
          <Route path='/Orderaccepted' element={<Accepted />}></Route>
          <Route path='/chekcout' element={<Price />}></Route>
          <Route path='/Account' element={<LogIn />}></Route>
          <Route path='/Account/Sign-Up' element={<SignUp />}></Route>

        </Routes>
      </Router>
    </ShopProvider>
  );
}

export default App;



// state "spalsh" , "onboarding"

// setInterval(() => {
//   setState("onboarding")
// }) 