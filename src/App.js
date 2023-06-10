import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import EditPost from "./EditPost";
import { DataProvider } from "./context/DataContext";

const App = () => {
  return (
    <div className="App">
      <Header title="REACT_ROUTER_V5" />
      <DataProvider>
        <Nav />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/post" component={NewPost} />
            <Route path="/post/:id" component={PostPage} />
            <Route path="/editPost/:id" component={EditPost} />
            <Route exact path="/about" component={About} />
            <Route path="*">
              <Missing />
            </Route>
          </Switch>
        </main>
      </DataProvider>
      <Footer />
    </div>
  );
};

export default App;
