import './App.css';
import './styles/global.scss';
import { Switch, Route } from "react-router-dom";
import MainPage from './components/MainPage';




function App() {

  return (

    <main>

        <Switch>

          <Route path="/" exact>
            <MainPage />
          </Route>



        </Switch>

    </main>

  );
}

export default App;

