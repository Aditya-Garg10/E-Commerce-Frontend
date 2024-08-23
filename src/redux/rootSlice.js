import { createSlice } from "@reduxjs/toolkit";



const rootSlice = createSlice({
    name:"root",
    initialState :{
        loading:false,
        productData : JSON.parse(localStorage.getItem('productData')) || [],
        reloadData : false,
    },
    reducers:{
        ShowLoading:(state,action)=>{
            state.loading = true;
        },
        HideLoading: (state,action)=>{
            state.loading = false;
        },
        setProductData : (state,action) =>{
            state.productData = action.payload;
        },
        ReloadData : (state,action) =>{
            state.reloadData = action.payload;
        }
    }
}) 


export default rootSlice.reducer;
export const {ShowLoading,HideLoading,setProductData,ReloadData} = rootSlice.actions;