import './App.scss';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Row from "./components/Row";
import requests from "./config/Requests";
import Video from "./components/Video";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Nav />
            <Banner />
            <Row title="Programmes originaux Netflux" fetchUrl={requests.fetchNetflixOriginals} isPoster={true} />
            <Row title="Tendances actuelles" fetchUrl={requests.fetchTrending} />
            <Row title="Les mieux notés" fetchUrl={requests.fetchTopRated} />
            <Row title="Films d'action" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comédies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Films d'horreurs" fetchUrl={requests.fetcHorrorMovies} />
            <Row title="Documentaires" fetchUrl={requests.fetchDocumentaries} />
            <div className="test"></div>
            <Footer />
          </Route>
          <Route path="/video/:id" component={Video} />
          <Route path="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
