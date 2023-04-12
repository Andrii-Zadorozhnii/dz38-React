import ReloadImg from '../images/reload.svg';
import AccountImg from '../images/account_circle.svg';

function Header() {
    return (
        <header className="header" style={{marginBottom: "20px"}}>
            <button className="header-button">=</button>
            <h1 className="header-name">~POSTER GALORE~</h1>
            <ul className="header-links">
                <li className="header-links__link"><a href='/'><img src={ReloadImg} alt="reload" style={{rotate:'50deg'}}/></a></li>
                <li className="header-links__link"><a href='/'><img src={AccountImg} alt="account"/></a></li>
            </ul>
        </header>
    );
}

export default Header;
