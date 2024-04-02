import "./Style.css"
import salesLogo from "../../assets/Salesforce.com_logo.png"
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header>
            <div className="salesHeader">
                <div className="right">
                    <img width={100} height={82} src={salesLogo} />
                </div>

                <div className="center">
                    <h1 id="nome">Salesforce</h1>
                </div>

                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/sobre">Sobre</Link>
                    <Link to="/equipe">Equipe</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;