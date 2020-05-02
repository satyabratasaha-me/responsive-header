import React , {useState} from 'react';
import './App.css';


import ToolBar from './components/Toolbar/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer';
import BackDrop from './components/BackDrop/BackDrop';

const App = () => {

  let sideDrawer = null;
  let backdrop = null;

  const [sidedrawerTogglerState, setsidedrawerTogglerState] = useState(false)

  const [backdropState, setbackdropState] = useState(false)

  const drawerToggleButtonClickHandler = () => {
    console.log('ToggleButton Clicked')
    setsidedrawerTogglerState(!sidedrawerTogglerState)
    setbackdropState(()=>{
      return true;
    })
  }

  const backdropClickHandler = () => {
    console.log('Clicked Backdrop')
    setsidedrawerTogglerState(false)
    setbackdropState(false)
  }


  
  if(backdropState){
    backdrop = <BackDrop click={backdropClickHandler}/>
  }

  

  return (
    <div className="App" >
      <ToolBar click={drawerToggleButtonClickHandler}/>
      <SideDrawer show={sidedrawerTogglerState}/>
      {backdrop}
      <main style={{marginTop:56, backgroundColor:'#92a8d1'}}>
        <p>The content goes here</p>
      </main>
    </div>
  );
}

export default App;
