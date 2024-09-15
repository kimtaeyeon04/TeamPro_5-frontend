import './App.css'
import { Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage'
function App() {
  return (
    <>
    <Routes>
      <Route>
        <Route exact path="/MainPage" element={<MainPage/>} />

      </Route>

    </Routes>
    </>
  )
}

export default App
