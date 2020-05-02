import React from 'react'
import './DrawerToggleButton.css'


const DrawerToggleButton = (props) => {
    return(
        <button className='drawer-toggle' onClick={props.click}>
            <div className='drawer-toggle__lines'></div>
            <div className='drawer-toggle__lines'></div>
            <div className='drawer-toggle__lines'></div>
        </button>
    )
}

export default DrawerToggleButton;