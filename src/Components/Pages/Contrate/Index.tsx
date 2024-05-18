import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Product {
  ID_Produto: number;
  Nome_Produto: string;
  Descricao_Produto: string;
  Preco_Produto: number;
}

const Contrate: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    // Função para buscar todos os produtos
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>('http://localhost:8080/Produtos');
        setProducts(response.data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProducts();
  }, []); // Executa apenas uma vez ao montar o componente

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <h1>Selecione um Produto</h1>
      <select onChange={(e) => handleProductSelect(products.find(product => product.Nome_Produto === e.target.value) as Product)}>
        <option value="">Selecione um Produto</option>
        {products.map((product) => (
          <option key={product.ID_Produto} value={product.Nome_Produto}>
            {product.Nome_Produto}
          </option>
        ))}
      </select>
      {selectedProduct && (
        <div>
          <h2>Detalhes do Produto</h2>
          <p>ID: {selectedProduct.ID_Produto}</p>
          <p>Descrição: {selectedProduct.Descricao_Produto}</p>
          <p>Preço: {selectedProduct.Preco_Produto}</p>
        </div>
      )}
    </div>
  );
};

export default Contrate;
