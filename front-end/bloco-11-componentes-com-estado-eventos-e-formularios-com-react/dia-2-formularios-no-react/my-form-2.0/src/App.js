import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
    }
  }

  handleInput( {target} ) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Formulário</h1>
        <form className='form-control'>
          <fieldset className='personal-infos'>
            <label className='form-label'>
              Nome
              <input name="name" type="text" maxLength="40" style={{textTransform: 'uppercase'}} required className='form-control' />
            </label>
            <label name="email" className='form-label'>
              Email
              <input type="email" maxLength="50" required className='form-control' />
            </label>
            <label name="cpf" className='form-label'>
              CPF
              <input type="text" maxLength="11" required className='form-control' />
            </label>
            <label name ="address" className='form-label'>
              Endereço
              <input type="text" maxLength="200" required className='form-control' />
            </label>
            <label name="city" className='form-label'>
              Cidade
              <input type="text" maxLength="28" required onBlur className='form-control' />
            </label>
            <label name="state" className='form-label'>
              Estado
              <input type="comboBox" maxLength="28" required className='form-control' />
            </label>
            <label htmlFor='casa' className='form-label'>
              Casa
              <input htmlFor='casa' type="radio" name='tipo' />
            </label>
            <label htmlFor='apto' className='form-label'>
              Apartamento
              <input htmlFor='apto' type="radio" name='tipo' />
            </label>
          </fieldset>
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
      </div>
    );
  }
}

export default App;
