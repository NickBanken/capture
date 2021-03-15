//Global Style
import GlobalStyle from "./components/GlobalStyle";
//import pages
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import Nav from "./components/Nav";
import MovieDetail from "./pages/MovieDetail";
//Router
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" component={AboutUs} exact></Route>
        <Route path="/work" component={OurWork} exact></Route>
        <Route path="/work/:id">
          <MovieDetail></MovieDetail>
        </Route>
        <Route path="/contact" component={ContactUs}></Route>
      </Switch>
    </div>
  );
}

export default App;
