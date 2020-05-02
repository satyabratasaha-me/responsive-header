import React from 'react';
import './SideDrawer.css';



const SideDrawer = (props) => {

    let classname = null;

    if(props.show){
        classname = 'side-drawer__navigation open';
    }
    else{
        classname = 'side-drawer__navigation'
    }

    return(
            <nav className={classname}>
                <ul>
                    <li>
                        <a href='./'>Products</a>
                    </li>
                    <li>
                        <a href='./'>Users</a>
                    </li>
                </ul>
            </nav>
    );



}



export default SideDrawer;