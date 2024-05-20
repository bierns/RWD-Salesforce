import React, { useState } from 'react';
import Select from 'react-select';
import './Style.css';

interface Product {
  value: string;
  label: string;
  description: string;
  price: number;
}

const products: Product[] = [
  { value: 'customer360', label: 'Customer 360', description: 'Personalize cada experiência ao longo da jornada do cliente no CRM Nº 1 do mundo', price: 0 },
  { value: 'salesforceAI', label: 'Inteligência artificial Salesforce', description: 'A IA da Salesforce oferece inteligência artificial confiável e extensível, com base na estrutura da nossa plataforma Einstein 1. Utilize a nossa IA nos dados de seus clientes para criar experiências de IA personalizadas, preditivas e generativas para atender a todas as suas necessidades de negócio com segurança. Leve a IA conversacional a qualquer fluxo de trabalho, usuário, departamento e indústria com o Einstein.', price: 0 },
  { value: 'smallBusiness', label: 'Pequenas Empresas', description: 'Encontre mais clientes, conquiste seus negócios e mantenha-os satisfeitos com ferramentas que ajudam você a trabalhar de maneira mais inteligente e não mais difícil.', price: 0 },
  { value: 'tableau', label: 'Aproveite melhor seus dados com os insights escaláveis do Tableau.', description: 'Impulsione a produtividade e a tomada de decisões com a plataforma de análise n° 1 com tecnologia de IA da Salesforce. O Tableau ajuda a entender os dados e tomar decisões com base neles, onde quer que você trabalhe.', price: 0 },
  { value: 'salesCloud', label: 'Acelere o crescimento agora mesmo com o Sales Cloud.', description: 'Venda mais rápido, mais inteligente e com mais eficiência, graças à combinação de IA + Dados + CRM. Impulsione a produtividade e expanda de uma maneira completamente inovadora, com o CRM com IA para vendas Nº 1 do mercado.', price: 0 },
  { value: 'serviceCloud', label: 'Revolucione o atendimento com IA de confiança.', description: 'Revolucione a maneira como as equipes de atendimento entregam valor a cada contato com o cliente — desde a experiência do cliente ao engajamento, processos, automação e operações. Potencialize o valor de vida útil do cliente, reduza custos e maximize a eficiência, reinventando o atendimento com o Service Cloud - da central de atendimento ao atendimento em campo.', price: 0 },
  { value: 'digitalMarketing', label: 'Faça cada momento valer a pena para alcançar o sucesso imediato', description: 'Atraia clientes. Gere mais engajamento. Construa relações duradouras. Tudo isso graças ao marketing digital baseado em dados.', price: 0 },
  { value: 'commerceCloud', label: 'Potencialize o crescimento em todo lugar com o Commerce Cloud', description: 'Amplie seu comércio integrado com confiança na plataforma mais completa. Simplifique tudo, da configuração da sua loja digital até a promoção de vendas, em qualquer ponto de contato com o cliente, utilizando IA nativa e automação. Tudo isso com o poder do melhor CRM de IA.', price: 0 },
  { value: 'dataCloud', label: 'Uma plataforma de dados em hiperescala integrada à Salesforce.', description: 'Ative todos dados dos seus clientes nos diversos apps da Salesforce com o Data Cloud. Capacite as equipes a envolver os clientes, em cada ponto de contato, com insights relevantes e dados contextuais no fluxo do trabalho.', price: 0 },
];

const Contrate: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleProductChange = (selectedOption: Product | null) => {
    setSelectedProduct(selectedOption);
    setShowContactForm(false); // Resetar o estado do formulário ao selecionar um novo produto
  };

  const handleContactFormSubmit = () => {
    // Aqui você pode lidar com os dados do formulário (telefone e email) como desejar
    console.log('Telefone:', phone);
    console.log('Email:', email);
    // Resetar os campos do formulário após enviar
    setPhone('');
    setEmail('');
    // Você pode adicionar lógica adicional aqui, como enviar os dados para um servidor ou exibir uma mensagem de sucesso
  };

  return (
    <>
      <div className="enunciado">
        <h2>Menu de Seleção de Produtos</h2>
      </div>

      <div className="contrate-container">

        <div className="product-info">
          <Select
            options={products}
            onChange={handleProductChange}
            placeholder="Selecione um produto"
            getOptionLabel={(option) => option.label}
            getOptionValue={(option) => option.value}
          />
          {selectedProduct && (
            <div className="selected-product">
              <h2>Produto Selecionado:</h2>
              <p><strong>Nome:</strong> {selectedProduct.label}</p>
              <p><strong>Descrição:</strong> {selectedProduct.description}</p>
              <p><strong>Preço: R$</strong> {selectedProduct.price}</p>
              <button className='btn' onClick={() => setShowContactForm(true)}>Desejo adquirir este produto</button>
            </div>
          )}
        </div>

        {showContactForm && (
          <div className="contact-form">
            <h2>Preencha seus dados de contato</h2>
            <input
              type="text"
              placeholder="Telefone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className='btn' onClick={handleContactFormSubmit}>Enviar</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Contrate;
