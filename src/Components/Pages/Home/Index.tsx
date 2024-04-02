import "./Style.css"
import img1 from "../../../assets/img1.webp"
import img2 from "../../../assets/img2.webp"
import img3 from "../../../assets/img3.webp"
import img4 from "../../../assets/img4.webp"
import img5 from "../../../assets/img5.png"
import img6 from "../../../assets/img6.png"
import img7 from "../../../assets/img7.png"
import img8 from "../../../assets/img8.webp"
import img9 from "../../../assets/img9.webp"



const Home = () => {

    return (
        <main>
            <div id="conteiner1">
                <div className="card">
                    <div className="icon">
                        <img src={img1} />
                    </div>

                    <div className="content">
                        <h3>Customer 360</h3>

                        <p>
                        Personalize cada experiência ao longo da jornada do cliente no CRM Nº 1 do mundo
                        </p>
                    </div>
                </div>


                <div className="card">
                    <div className="icon">
                        <img src={img2} />
                    </div>

                    <div className="content">
                        <h3>Inteligência artificial Salesforce</h3>

                        <p>
                        A IA da Salesforce oferece inteligência artificial confiável e extensível, com base na estrutura da nossa plataforma Einstein 1. Utilize a nossa IA nos dados de seus clientes para criar experiências de IA personalizadas, preditivas e generativas para atender a todas as suas necessidades de negócio com segurança. Leve a IA conversacional a qualquer fluxo de trabalho, usuário, departamento e indústria com o Einstein.
                        </p>
                    </div>
                </div>



                <div className="card">
                    <div className="icon">
                        <img src={img3} />

                    </div>

                    <div className="content">
                        <h3>Pequenas Empresas</h3>

                        <p>
                        Encontre mais clientes, conquiste seus negócios e mantenha-os satisfeitos com ferramentas que ajudam você a trabalhar de maneira mais inteligente e não mais difícil.
                        </p>
                    </div>
                </div>

            </div>
            <div id="conteiner2">
                <div className="card">
                    <div className="icon">
                        <img src={img4} />

                    </div>

                    <div className="content">
                        <h3>Aproveite melhor seus dados com os insights escaláveis do Tableau.</h3>

                        <p>
                        Impulsione a produtividade e a tomada de decisões com a plataforma de análise n° 1 com tecnologia de IA da Salesforce. O Tableau ajuda a entender os dados e tomar decisões com base neles, onde quer que você trabalhe.
                        </p>
                    </div>
                </div>

                <div className="card">
                    <div className="icon">
                        <img src={img5} />

                    </div>

                    <div className="content">
                        <h3>Acelere o crescimento agora mesmo com o Sales Cloud.</h3>

                        <p>
                        Venda mais rápido, mais inteligente e com mais eficiência, graças à combinação de IA + Dados + CRM. Impulsione a produtividade e expanda de uma maneira completamente inovadora, com o CRM com IA para vendas Nº 1 do mercado.
                        </p>
                    </div>
                </div>


                <div className="card">
                    <div className="icon">
                        <img src={img6} />

                    </div>

                    <div className="content">
                        <h3>Revolucione o atendimento com IA de confiança.</h3>

                        <p>
                        Revolucione a maneira como as equipes de atendimento entregam valor a cada contato com o cliente — desde a experiência do cliente ao engajamento, processos, automação e operações. Potencialize o valor de vida útil do cliente, reduza custos e maximize a eficiência, reinventando o atendimento com o Service Cloud - da central de atendimento ao atendimento em campo.
                        </p>
                    </div>
                </div>
            </div>


            <div id="conteiner3">
                <div className="card">
                    <div className="icon">
                        <img src={img7} />

                    </div>

                    <div className="content">
                        <h3>Faça cada momento valer a pena para alcançar o sucesso imediato</h3>

                        <p>
                        Atraia clientes. Gere mais engajamento.
Construa relações duradouras.
Tudo isso graças ao marketing digital baseado em dados.
                        </p>
                    </div>
                </div>



                <div className="card">
                    <div className="icon">
                        <img src={img8} />

                    </div>

                    <div className="content">
                        <h3>Potencialize o crescimento em todo lugar com o Commerce Cloud</h3>

                        <p>
                        Amplie seu comércio integrado com confiança na plataforma mais completa. Simplifique tudo, da configuração da sua loja digital até a promoção de vendas, em qualquer ponto de contato com o cliente, utilizando IA nativa e automação. Tudo isso com o poder do melhor CRM de IA.
                        </p>
                    </div>
                </div>


                <div className="card">
                    <div className="icon">
                        <img src={img9} />

                    </div>

                    <div className="content">
                        <h3>Uma plataforma de dados em hiperescala integrada à Salesforce.</h3>

                        <p>
                        Ative todos dados dos seus clientes nos diversos apps da Salesforce com o Data Cloud. Capacite as equipes a envolver os clientes, em cada ponto de contato, com insights relevantes e dados contextuais no fluxo do trabalho.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home;