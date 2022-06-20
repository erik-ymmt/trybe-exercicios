import React from "react";

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

const conteudosRenderFormatItem = (element) => {
  return (
    <li className="content" key={ element.conteudo }>
      <h3>O conteúdo é:</h3>
      <h2>{ element.conteudo }</h2>
      <p>Status: { element.status }</p>
      <p>Bloco: { element.bloco }</p>
    </li>
  )
}

const createMapOfConteudos = () => conteudos.map((element) => conteudosRenderFormatItem(element));

class Content extends React.Component {
  render() {
    return <ul key="content-list" className="content-list"> { createMapOfConteudos() } </ul>
  };
}

export default Content;
