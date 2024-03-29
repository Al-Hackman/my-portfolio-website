import './App.css';
import './styles/global.scss';
import { Switch, Route } from "react-router-dom";
import MainPage from './components/MainPage/MainPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import ProjectsPage from './components/ProjectsPage/ProjectsPage';




function App() {

  return (

    <main>

        <Switch>

          <Route path="/" exact>
            <MainPage />
          </Route>

          <Route path="/profile">
            <ProfilePage/>
          </Route>

          <Route path="/projects">
            <ProjectsPage/>
          </Route>



        </Switch>

    </main>

  );
}

export default App;

