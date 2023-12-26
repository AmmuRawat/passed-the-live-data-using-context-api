import React from 'react'

import { Link } from 'react-router-dom';
function Navigation() {
    return (
        <div style = {{position: 'fixed', top:'0', left: '0', right: '0', display:'flex'}}>
            <div className='guided' style = {{padding: '0 5px', background: '#bbdefb',flex: 'none'}}>
                <Link to='/'>Guided</Link>
            </div>

            <div className='mission' style = {{padding: '0 5px',  background: '#bbdefb',flex: 'none'}}>
                <Link to='/mission'>Mission</Link>
            </div>

            <div className='setting' style = {{padding: '0 5px' ,background: '#bbdefb',flex: 'none'}}>
                <Link to='/setting'>Setting</Link>
            </div>
        </div>
    )
}

export default Navigation