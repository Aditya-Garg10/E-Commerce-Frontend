import React, { createContext,useEffect,useState } from 'react'
import { HOST } from '../../App';



export const ShopContext = createContext(null);

const getDefaultCart = () =>{
    let cart = {};
    for (let index=0;index< 300+1; index++){
        cart[index] = 0;
    }
    return cart;
}


const getDefaultWishlist = () =>{
    let list = {};
    for (let index=0;index< 300+1; index++){
        list[index] = 0;
    }
    return list 
}





const ShopContextProvider = (props) =>{
    const [all_product, setall_product] = useState(JSON.parse(localStorage.getItem('productData')) || []);
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [listItems, setlistItems] = useState(getDefaultWishlist() || false);    
    
    useEffect(()=>{
        
        if(localStorage.getItem('auth-token')){
            fetch(`${HOST}/getCart`,{
                method : "POST",
                headers:{
                    Accept : 'application/form-data',
                    'auth-token' : `${localStorage.getItem('auth-token')}`,
                    'Content-Type' : "application/json",                                   
                },
                body : "",
            }
        ).then((resp)=>resp.json()).then((data)=> setCartItems(data))
        }

        if(localStorage.getItem('auth-token')){
            fetch(`${HOST}/getList`,{
                method : "POST",
                headers:{
                    Accept : 'application/form-data',
                    'auth-token' : `${localStorage.getItem('auth-token')}`,
                    'Content-Type' : "application/json",                                   
                },
                body : "",
            }
        ).then((resp)=>resp.json()).then((data)=> setlistItems(data))
        }
    },[])

    const addtoList = async(ItemId) =>{
        setlistItems((prev)=>({...prev,[ItemId]:prev[ItemId]+1}))
        if(localStorage.getItem("auth-token")){
            const response = await fetch(`${HOST}/addtoList`,{
                method : "POST",
                headers:{
                    Accept : 'application/form-data',
                    'auth-token' : `${localStorage.getItem('auth-token')}`,
                    'Content-Type' : "application/json",                                   
                },
                body: JSON.stringify({"itemId":ItemId}),
            })                    
            const data = await response.json();
            if(data.status === 200){
                return true
            }
            else if (data.status === 201){
                return false
            }
        }
       
    }

    const removeFromList = (ItemId) =>{
        setlistItems((prev)=>({...prev,[ItemId]:prev[ItemId]-1}))
        if(localStorage.getItem("auth-token")){
            fetch(`${HOST}/removefromList`,{
                method : "POST",
                headers:{
                    Accept : 'application/form-data',
                    'auth-token' : `${localStorage.getItem('auth-token')}`,
                    'Content-Type' : "application/json",                                   
                },
                body: JSON.stringify({"itemId":ItemId}),
            }).then((response)=>response.json())
            .then((data)=>console.log(data))
        }
    }

    const addtoCart = async(ItemId) =>{
        setCartItems((prev)=>({...prev,[ItemId]:prev[ItemId]+1}))
        if(localStorage.getItem("auth-token")){
           const response = await fetch(`${HOST}/addtoCart`,{
                method : "POST",
                headers:{
                    Accept : 'application/form-data',
                    'auth-token' : `${localStorage.getItem('auth-token')}`,
                    'Content-Type' : "application/json",                                   
                },
                body: JSON.stringify({"itemId":ItemId}),

            })                    
            const data = await response.json();
            if(data.success){
                return true
            }
        }
    }
    
    const removeFromCart = async(ItemId) =>{
        setCartItems((prev)=>({...prev,[ItemId]:prev[ItemId]-1}))
        if(localStorage.getItem("auth-token")){
           const response = await fetch(`${HOST}/removefromCart`,{
                method : "POST",
                headers:{
                    Accept : 'application/form-data',
                    'auth-token' : `${localStorage.getItem('auth-token')}`,
                    'Content-Type' : "application/json",                                   
                },
                body: JSON.stringify({"itemId":ItemId}),
            })
            const data = await response.json();
            if(data.success){
                return true
            }
        }
    }

    const getTotalCartItems = () =>{
        let totalItems = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    }
    
    
    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = all_product.find((product)=>product.id===Number(item));
                totalAmount += itemInfo.new_price*cartItems[item]   
            }
        }
        return totalAmount
    }
    const contextValue = {all_product,setall_product,cartItems,addtoCart,removeFromCart,getTotalCartAmount,getTotalCartItems,addtoList,removeFromList,listItems}
    
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;