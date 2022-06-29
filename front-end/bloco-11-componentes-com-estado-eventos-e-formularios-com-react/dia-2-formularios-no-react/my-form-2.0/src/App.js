import React from 'react';
import './App.css';
import PersonalData from './components/PersonalData';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Formulário</h1>
        <form className='form-control'>
          <PersonalData />
          <fieldset className='last-job'>
          <label>
            Resumo do Currículo
            <textarea maxLength="1000" required className='form-control' />
          </label>
          <label>
            Cargo
            <textarea maxLength="40" required className='form-control' />
          </label>
          <label>
            Descrição do Cargo
            <textarea maxLength="500" required className='form-control' />
          </label>
          </fieldset>
          <button className='btn btn-primary'>
            Salvar
          </button>
        </form>
        <div className='data-collected'>
        </div>
      </div>
    );
  }
}

export default App;
