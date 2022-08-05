import { Route, Switch } from 'wouter'
import Home from './pages/home'
import Login from './pages/login'

function App () {
  return (
    <Switch>
      <Route path='/' component={Home} />
      <Route path='/login' component={Login} />
    </Switch>
  )
}

export default App
