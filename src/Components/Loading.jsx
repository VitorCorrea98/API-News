import React from 'react';

const Loading = ({ category }) => {
  return (
    <div className="flex flex-col items-center mt-24 text-2xl gap-4 h-screen -mb-60">
      <h1>Muito obrigado por usar o meu site!!</h1>
      <p>Enquanto você espera carreagar a seção de {category.toUpperCase()}</p>
      <span>Por favor observe essa linda tela de fundo preto.</span>
    </div>
  );
};

export default Loading;
