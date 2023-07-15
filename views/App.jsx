import React from 'react'
import './App.css'

import {BrowserRouter} from 'react-router-dom'

import Menu from '../components/layouts/Menu'
import Content from '../components/layouts/Content';

const App = props =>{
   return( 
   
   <div className='App'>
        <BrowserRouter>
            <Menu/>
            <Content/>
        </BrowserRouter>
   </div>
    )
}
export default App;