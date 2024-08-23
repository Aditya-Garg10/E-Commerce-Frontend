import './App.css';
import {BrowserRouter,Route,Routes } from "react-router-dom"
import Home from './pages/Home';
import ShopCategory from './pages/ShopCategory';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Wishlist from './pages/Wishlist';
import Searchbar from './pages/Searchbar';
import Display from './components/Display/Display';
import { useEffect } from 'react';
import { ShopContext } from './components/Context/Context';
import { useContext } from 'react';
import LatestCollection from './pages/LatestCollection';
import AllReviews from './pages/AllReviews';
// import { message } from 'antd';

export const HOST = "https://e-commerce-backend-1hmj.onrender.com"


function App() {


  const { setall_product } = useContext(ShopContext) 
  

  const fetchData = async()=>{
    const response = await fetch(`${HOST}/allProducts`,{
     method:"get"
 })
 
 const data =  await response.json()   
    setall_product(data)
    console.log(data)
    localStorage.setItem('productData',JSON.stringify(data))
}




useEffect(()=>{
   
  fetchData()
  
  // eslint-disable-next-line
},[])

  return (
    <div>
      <BrowserRouter>
      
      <Routes>
        
        <Route path='/'element={<Home/>}></Route>
        <Route path='/men'element={<ShopCategory banner={"https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_banner_copy_5_ZA9GA89.jpg?format=webp&w=1500&dpr=1.5"} category="men" />}></Route>
        <Route path='/women'element={<ShopCategory banner={"https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage-Banner_6_YS3Ox5l.jpg?format=webp&w=1500&dpr=1.5"} category="women"/>}></Route>
        <Route path='/kid'element={<ShopCategory banner={"https://prod-img.thesouledstore.com/public/theSoul/uploads/themes/1867520240724135735.jpg?format=webp&w=1500&dpr=1.5"} category="kid"/>}></Route>
        <Route path='/latest'element={<LatestCollection/>}></Route>
        <Route path='/product'element={<Display/>}>
        <Route path=':productId'element={<Display />}/>
        </Route>
        <Route path='/cart'element={<Cart/>}></Route>
        <Route path='/search'element={<Searchbar/>}></Route>
        <Route path='/wishlist'element={<Wishlist/>}></Route>
        <Route path='/login'element={<Login/>}></Route>
        <Route path='/signup'element={<Signup/>}></Route>
        <Route path='/searchBar'element={<Searchbar/>}></Route>
        <Route path='/allReviews'element={<AllReviews/>}></Route>
        <Route path='*'element={<Home/>}></Route>        
      </Routes>    
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
