import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import Typography from './components/Typography'
import Buttons from './components/Buttons'
import TextFields from './components/TextFields'
import RadioButton from './components/RadioButton'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <h1>This is main page</h1>
        </Route>
        <Route path="/typography">
          <Typography />
        </Route>
        <Route path="/buttons">
          <Buttons />
        </Route>
        <Route path="/textfields">
          <TextFields />
        </Route>
        <Route path="/radio">
          <RadioButton />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
