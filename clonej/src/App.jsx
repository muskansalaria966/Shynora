import "./App.css";
import Navbar from "./components/Navbar";
// import Products from "./components/Products";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import { Routes, Route } from "react-router-dom";


import Home from "./Pages/Home";
import Collection from "./Pages/Collection";
import NewArrivals from "./Pages/NewArrivals";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

import Necklace from "./Pages/Necklace";
import Ring from "./Pages/Ring";
import Bracelet from "./Pages/Bracelet";
import Earrings from "./Pages/Earrings";
import Bangles from "./Pages/Bangles"
import AnkletsFeets from "./Pages/AnkletsFeets";
import Hair from"./Pages/Hair";
import Nose from"./Pages/Nose";
import HandWaist from "./Pages/HandWaist";

import RingCategory from"./Pages/RingCategory";
import BraceletCategory from "./Pages/BraceletCategory";
import EarringCategory from "./Pages/EarringsCategory";
import NecklaceCategory from "./Pages/NecklaceCategory";
import BanglesCategory from "./Pages/BanglesCategory";
import AnkletsFeetsCategory from "./Pages/AnkletsFeetsCategory";
import HairCategory from"./Pages/HairCategory";
import NoseCategory from"./Pages/NoseCategory";
import HandWaistCategory from "./Pages/HandWaistCategory";



function App() {
  return (
    <>
      {<Navbar /> }

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/newarrivals" element={<NewArrivals />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> 

      

      <Routes>
           <Route path="/necklace" element={<Necklace />} />
           <Route path="/ring" element={<Ring />} />
           <Route path="/bracelet" element={<Bracelet />}/>
           <Route path="/earrings" element={<Earrings />} />
           <Route path="/bangles" element={<Bangles/>}/>
           <Route path="/ankletsFeets" element={<AnkletsFeets/>}/>
           <Route path="/hair" element={<Hair/>}/>
           <Route path="/nose" element={<Nose/>}/>
           <Route path="/handwaist" element={<HandWaist/>}/>
         
           <Route path="/rings/:category" element={<RingCategory/>}/>

           <Route path="/bracelets/:category" element={<BraceletCategory/>}/> 
           <Route path="/earrings/:category" element={<EarringCategory />} />  
           <Route path="/necklace/:category" element={<NecklaceCategory />}/>
           <Route path="/necklaces/:category" element={<NecklaceCategory />} />
           <Route path="/bangles/:category" element={<BanglesCategory />} />
           <Route path="/AnkletsFeets/:category" element={<AnkletsFeetsCategory />} />
           <Route path="/hair/:category" element={<HairCategory />}/>
           <Route path="/nose/:category" element={<NoseCategory />}/>
           <Route path="/handwaist/:category" element={<HandWaistCategory />}/>

      </Routes>



 </>  
  );
}

export default App;

// import {useState} from 'react';

// function App(){
//     const[count,setCount] = useState(0);

//     return(

//     <div>
//         <h1>Count: {count}</h1>
//         <button onClick={()=>setCount(count+1)}>Increment</button>
//         <button onClick={()=>setCount(count-1)}>Decrement</button>
//     </div>
//     );
// };

// export default App;

// import User from "./components/user";

// function App() {
//   return (
//     <>
//     <User name="Muskan Salaria" age={20}/>,
//     <User name="Ankita" age={21} class="B.tech"/>
//     </>
//   );
// }

// export default App;

// import Card from "./components/card";


// function App() {
//   return (
//     <>
//       <Card Name="Muskan Salaria" Age={20} Address="Punjab" />,
//       <Card Name="Ankita" Age={21} Address="Punjab" />,
//       <Card Name="Dikasha" Age={25} Address="Himachal Pradesh" />,
//       <Card Name="Ankit" Age={19} Address="Punjab" />,
//       <Card Name="Bhanvi" Age={19} Address="Punjab" />,
//       <Card Name="Nisha" Age={24} Address="Punjab" />,
//       <Card Name="Sahil" Age={25} Address="Punjab" />,
//       <Card Name="Kajal" Age={26} Address="Punjab" />,
//       <Card Name="Navi" Age={21} Address="Punjab" />,
//       <Card Name="Oshin" Age={20} Address="Punjab" />,
      
//     </>
//   );
// }

// export default App;