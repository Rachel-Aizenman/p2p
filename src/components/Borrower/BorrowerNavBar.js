import React from 'react'
import {Link} from 'react-router-dom'
function BorrowerNavBar() {
    return (<ul>
        <Link to='/about' className="nav-link">About</Link>
        <Link to='/newLoan' className="nav-link">Add Loan</Link>
        <Link to='/' className="nav-link">Log Out</Link>
    </ul>)
}

export default BorrowerNavBar