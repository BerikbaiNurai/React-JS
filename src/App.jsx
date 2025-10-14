
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StudentssList } from './pages/StudentssList';
import { AddStudents } from './pages/AddStudent';
import { StudentCard } from './components/StudentCard'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {

  return (
   <BrowserRouter>
    <Routes>
        <Route path='*' element={<h1>404 page is not found</h1>} />
        <Route path='/studentsslist' element={<StudentssList/>} />
        <Route path='/addstudents' element={<AddStudents/>} />
    </Routes>
   </BrowserRouter>
   
  )
}

export default App;