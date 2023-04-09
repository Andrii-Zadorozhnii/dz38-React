import Svgs from '../images/symbol-defs.svg';

function Header() {
    return (
        <header className="header" style={{marginBottom: "20px"}}>
            <button className="header-button">=</button>
            <h1 className="header-name">~POSTER GALORE~</h1>
            <ul className="header-links">
                <li className="header-links__link"><a href='/'>reload</a></li>
                <li className="header-links__link"><a href='/'>account</a></li>
            </ul>
        </header>
    );
}

export default Header