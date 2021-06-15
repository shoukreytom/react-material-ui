import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import Typography from './components/Typography'
import Buttons from './components/Buttons'
import TextFields from './components/TextFields'
import RadioButton from './components/RadioButton'
import Checkboxes from './components/Checkboxes'
import Appbars from './components/Appbars'


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
        <Route path="/check_boxes">
          <Checkboxes />
        </Route>
        <Route path="/appbars">
          <Appbars />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
