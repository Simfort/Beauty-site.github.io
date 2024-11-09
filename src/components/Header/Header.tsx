import './Header.scss'
import beauty_icon from '../../assets/beauty-icon.svg'

export default function Header(){
    return <header className="header">
        <img src={beauty_icon} height='50' className='header-beauty__logo'/>
        <nav className='header-nav'>
            <a href="/">Home</a>
            <a href='/about'>About</a>
        </nav>
    </header>
}