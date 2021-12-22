import './App.scss';
import React, { useState, useRef } from 'react';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Row from "./components/Row";
import requests from "./config/Requests";
import Loading from './components/Loader.js';
import Video from "./components/Video";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const [loading, setLoading] = useState(true);
  const counter = useRef(0);
  const imageLoaded = () => {
    counter.current += 1;
    if (counter.current > 0) {
      setLoading(false);
    }
  }


  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <div style={{ display: loading ? "block" : "none" }}>
              <Loading />
            </div>
            <div style={{ display: loading ? "none" : "block" }}>
              <Nav />
              <Banner imageLoaded={imageLoaded} />
              <Row title="Programmes originaux Netflux" fetchUrl={requests.fetchNetflixOriginals} isPoster={true} />
              <Row title="Tendances actuelles" fetchUrl={requests.fetchTrending} />
              <Row title="Les mieux notés" fetchUrl={requests.fetchTopRated} />
              <Row title="Films d'action" fetchUrl={requests.fetchActionMovies} />
              <Row title="Comédies" fetchUrl={requests.fetchComedyMovies} />
              <Row title="Films d'horreurs" fetchUrl={requests.fetcHorrorMovies} />
              <Row title="Documentaires" fetchUrl={requests.fetchDocumentaries} />
              <Footer />
            </div>
          </Route>
          <Route path="/video/:id" component={Video} />
          <Route path="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
