import { Route, Switch } from 'wouter'
import Home from './pages/home'
import Logged from './pages/logged'
import Login from './pages/login'

function App () {
  return (
    <Switch>
      <Route path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/logged' component={Logged} />
    </Switch>
  )
}

export default App
