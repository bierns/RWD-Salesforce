import gabriel from "../../../assets/gabrielfoto.jpg"
import lucas from "../../../assets/lucasfoto.jpg"
import murillo from "../../../assets/murillofot.jpg"
import gitLogo from "../../../assets/gitLogo.png"
import './Style.css';

const Equipe = () => {
    return (

        <main>
            <div id="fotos">
                <div className="fotos_perfil">
                    <img width={320} height={250} src={gabriel} />
                    <div className="descricao">
                        <p>Gabriel Oliveira</p>
                        <p> RM: 553079 </p>
                        <p> Email: RM553079@fiap.com.br</p>
                        <div className="git">
                            <img width={30} height={30} src={gitLogo} />bierns


                        </div>
                    </div>
                </div>
                <div className="fotos_perfil">
                    <img width={320} height={250} src={lucas} />

                    <div className="descricao">
                        <p>Lucas Martinez </p>
                        <p>RM: 553816 </p>
                        <p>Email: RM553816@fiap.com.br </p>
                        <div className="git">
                            <img width={30} height={30} src={gitLogo} />Lucasmartilopes

                        </div>
                    </div>
                </div>
                <div className="fotos_perfil">
                    <img width={320} height={250} src={murillo} />
                    <div className="descricao">
                        <p>Murillo Carvalho </p>
                        <p>RM: 550551 </p>
                        <p>Email: RM550551@fiap.com.br</p>
                        <div className="git">
                            <img width={30} height={30} src={gitLogo} />MMedi17

                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
}

export default Equipe;
