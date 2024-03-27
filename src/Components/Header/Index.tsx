import "./style.css"
import salesLogo from "../../assets/Salesforce.com_logo.png"
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
               <button>Home</button>
               <button>Login</button>
               <button>Sobre</button>
               <button>Contato</button>
            </nav>
         </div>
      </header>
   )
}

export default Header;