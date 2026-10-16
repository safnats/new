
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Add from './Pages/Add'
import Edit from './Pages/Edit'



function App() {


  return (
    <>
<Routes>
        <Route   path='/' element={<Home/>}/>
                <Route   path='/add' element={<Add/>}/>
                       <Route   path='/edit/:id' element={<Edit/>}/>

</Routes>
    </>
  )
}

export default App
