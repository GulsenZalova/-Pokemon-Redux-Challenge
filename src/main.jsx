import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import pakemonReducer from "./store/pakemonSlice"


const store =configureStore({
  reducer:{
    pakemonReducer:pakemonReducer
  }
})


ReactDOM.createRoot(document.getElementById('root')).render(


    <Provider store={store} >
    <App />
    </Provider>

)
