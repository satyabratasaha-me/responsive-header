import React from 'react';
import  './Toolbar.css'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'


const ToolBar = (props) => {
    return(
        <header className='toolbar'>
            <nav className='toolbar__navigation'>  
                <div className='toolbar__togglebutton'> 
                    <DrawerToggleButton click={props.click}/>
                </div>              
                <div className='toolbar__logo' > 
                    <a href='./' >Logo</a>
                </div>
                <div className='spacer'></div>
                <div className='toolbar__navigation-items'>
                    <ul>
                        <li>
                            <a href='./'>Products</a>
                        </li>
                        <li>
                            <a href='./'>Users</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}


export default ToolBar;