import { Route, Routes } from 'react-router-dom'
import './App.css'
import RootLayout from './components/layouts/RootLayout'
import Home from './components/pages/Home'
import NewsDetails from './components/pages/NewsDetails'


function App() {
  

  return (
   <>
    <Routes>
      <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='/newsDetails' element={<NewsDetails/>}/> 
      </Route>
    </Routes>
   </>
  )
}

export default App
