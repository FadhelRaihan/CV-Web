import './navbar.css'

function Navbar() {
    return (
        <nav>
            <div className='kiri'>
                <a href='/'><h1>Fadhel Raihan</h1></a>
            </div>

            <div className='kanan'>
                <a href='/'>Resume</a>
                <p>|</p>
                <a href='/'>Contact</a>
            </div>
        </nav>
    )
}

export default Navbar;