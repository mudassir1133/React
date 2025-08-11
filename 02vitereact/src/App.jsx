
// import BgChanger from "./BgChanger"
// import Hooksreact from "./Hooksreact"
// import PasswordGenerator from "./Passwordgenerator"
// import ReactRouter from "../reactRouter/reactrRouter";
import Header from "../reactRouter/Components/Header/Header";
import Footer from "../reactRouter/Components/Footer/footer";
import About from "../reactRouter/Components/About/About";
// import Home from "../reactRouter/Components/Home/home";
import {Outlet} from 'react-router-dom';



function App() {

  return (
    <>

        
       {/* <BgChanger /> */}
       {/* <Hooksreact /> */}
      {/* <PasswordGenerator /> */}
      {/* <ReactRouter /> */}
      
      <Header />
      <Outlet />
      {/* <About /> */}
      <Footer />
      

    </>
  );
}

export default App;
