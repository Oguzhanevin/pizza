
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import Header from './components/header'
import HomePage from './components/homepage'
import { Route, Switch } from 'react-router-dom';


import Form from './components/form'
import OnayPage from './components/onaypage'
import { useState } from 'react'
function App() {
  
  const [mevcutSipariş, setMevcutSipariş] = useState(null);
  return (
    
    <>
    
    <Header />
            <Switch>
                <Route path='/' exact>
                    <HomePage />
                </Route>
                <Route path='/Form' exact>
                    <Form setMevcutSipariş={setMevcutSipariş} />
                </Route>
                <Route path='/Onay' exact>
                    <OnayPage mevcutSipariş={mevcutSipariş} />
                </Route>
            </Switch>
    </>
  )
}

export default App