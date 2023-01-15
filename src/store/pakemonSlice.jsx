import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const pakemonSlice=createSlice({
    name:"pakemons",
    initialState:{
        pakemons:[],
        pakemonDetail:null
    },
    reducers:{
        showDetails:(state,action)=>{
            // console.log(action.payload)
            state.pakemonDetail=action.payload
            // console.log(state.pakemonDetail)
        },
        load:(state,action)=>{
            state.pakemons=action.payload
        }

    }
})

export const {showDetails,load}=pakemonSlice.actions

export default pakemonSlice.reducer


export const loadPakemons=(page)=>(dispatch)=>{
    // console.log(page)
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${(page)*10}`)
    .then(res=>{
        dispatch(load(res.data))
    })
}

export const showDetailsPage=(url)=>(dispatch)=>{
    axios.get(url)
    .then(res=>{
        dispatch(showDetails(res.data))
    })
}