import "./index.scss";
import {
  BrowserRouter as Router,
  NavLink as Link,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./pages/home/home";
import Navbar from "./container/Navbar/navbar";
import Layout from "./container/Layout/layout";

// const About = () => <div>PersonalHom11 e</div>;
// const Contact = () => <div>Bookmarks Home</div>;
// const SignIn = () => <div>SignInHome</div>;
// const SignUp = () => <div>SignUp Home</div>;

function App() {
  return (
    <Layout />
    // <Router>
    //   <Navbar />
    //   <Switch>
    //     <Route path='/' exact component={Home} />
    //     <Route path='/personal-cabinet' component={About} />
    //     <Route path='/bookmarks' component={Contact} />
    //     <Route path='/signin' component={SignIn} />
    //     <Route path='/sign-up' component={SignUp} />
    //   </Switch>
    // </Router>
  );
}
export default App;
