import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/header'
import HomePage from './components/homepage'
import { Route, Routes } from 'react-router-dom'; // Switch yerine Routes kullanılıyor
import Form from './components/form'
import OnayPage from './components/onaypage'
import { useState } from 'react'

function App() {
  const [mevcutSipariş, setMevcutSipariş] = useState(null);

  return (
    <>
      <Header />
      <Routes> {/* Switch yerine Routes kullanıyoruz */}
        <Route path='/' element={<HomePage />} /> {/* exact kaldırıldı, element kullanıldı */}
        <Route path='/Form' element={<Form setMevcutSipariş={setMevcutSipariş} />} />
        <Route path='/Onay' element={<OnayPage mevcutSipariş={mevcutSipariş} />} />
      </Routes>
    </>
  )
}

export default App;
