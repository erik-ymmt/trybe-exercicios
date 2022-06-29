import React from "react";

class PersonalData extends React.Component {
  constructor() {
    super();

    this.handleInput = this.handleInput.bind(this);

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      type: '',
      data: '',
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
      <fieldset className='personal-infos'>
        <label className='form-label'>
          Nome
          <input 
            name="name" 
            type="text" 
            maxLength="40" 
            style={{textTransform: 'uppercase'}} 
            required 
            className='form-control'
            onChange={this.handleInput}
          />
        </label>
        <label className='form-label'>
          Email
          <input name="email" type="email" maxLength="50" required className='form-control' onChange={this.handleInput} />
        </label>
        <label className='form-label'>
          CPF
          <input name="cpf" type="text" maxLength="11" required className='form-control' onChange={this.handleInput} />
        </label>
        <label className='form-label'>
          Endereço
          <input name ="address" type="text" maxLength="200" required className='form-control' onChange={this.handleInput} />
        </label>
        <label className='form-label'>
          Cidade
          <input name="city" type="text" maxLength="28" required onBlur className='form-control' onChange={this.handleInput} />
        </label>
        <label name="state" className='form-label' htmlFor="states">
          Estado
          <select required className='form-control' id="states" name="state" onChange={this.handleInput}>
            <option value="select">Selecione um estado</option>
            <option value="SP">SP</option>
            <option value="SC">SC</option>
          </select>
        </label>
        <label htmlFor='casa' className='form-label'>
          Casa
          <input 
            htmlFor='casa'
            type="radio"
            onChange={this.handleInput}
            name="type"
            value='casa'
          />
        </label>
        <label htmlFor='apto' className='form-label'>
          Apartamento
          <input htmlFor='apto' type="radio" onChange={this.handleInput} name="type" value='apartment'/>
        </label>
      </fieldset>
    )
  }
}

export default PersonalData;
