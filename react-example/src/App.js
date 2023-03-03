import './App.css';
import ButtonPage from "./pages/button-page";
import AccordionPage from "./pages/accordion-page";
import DropDownPage from "./pages/drop-down-page";
import Route from "./components/route/route";
import MiscStuffPage from "./pages/misc-stuff-page";
import SideBar from "./components/side-bar/side-bar";
import ModalPage from "./pages/modal-page";
import TablePage from "./pages/table-page";
import CounterPage from "./pages/counter-page";
import "./store";
import {CarsPage} from "./pages/cars-page";
import MediaPage from "./pages/media-page";


function App() {
  return (
    <div>Hi there!</div>
    // <div className='app'>
    //   <div className="left-anchor"></div>
    //   <SideBar></SideBar>
    //   <div>
    //     <Route path="/accordion">
    //       <AccordionPage></AccordionPage>
    //     </Route>
    //     <Route path="/">
    //       <DropDownPage></DropDownPage>
    //     </Route>
    //     <Route path="/button">
    //       <ButtonPage></ButtonPage>
    //     </Route>
    //     <Route path="/misc">
    //       <MiscStuffPage></MiscStuffPage>
    //     </Route>
    //     <Route path="/modal">
    //       <ModalPage></ModalPage>
    //     </Route>
    //     <Route path="/table">
    //       <TablePage></TablePage>
    //     </Route>
    //     <Route path="/counter">
    //       <CounterPage initialCount={10}></CounterPage>
    //     </Route>
    //     <Route path="/cars">
    //       <CarsPage></CarsPage>
    //     </Route>
    //     <Route path="/media">
    //       <MediaPage></MediaPage>
    //     </Route>
    //   </div>
    //   <div className="right-anchor"></div>
    // </div>
  );
}

export default App;
