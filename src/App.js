import { SignalCellularAltSharp } from '@material-ui/icons';
import './App.css';
import Footer from './component/Footer';
import Mainbody from './component/Mainbody';
import Navb from './component/Navb';
import Signup from './component/Signup';
import { BrowserRouter as Router , Switch ,Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <Switch>
    <div>
      <Navb/>
      <Route exact path="/">

      <Mainbody/>
      </Route>
      <Route path="/signup">
      <Signup/>
      </Route>
      <Footer/>
    </div>
    </Switch>
    </Router>
  );
}

export default App;
