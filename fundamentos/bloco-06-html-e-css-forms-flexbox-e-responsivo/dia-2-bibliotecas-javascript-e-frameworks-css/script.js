const submitButton = document.getElementById('submit-btn');
const textInput = document.getElementById('input-textarea');
const numberOfChars = document.getElementById('number-chars');

window.addEventListener('DOMContentLoaded', datePicker);
textInput.addEventListener('keyup', textInputCounter);

function textInputCounter() {
  let charsCounter = `caracteres: ${textInput.value.length}`;
  numberOfChars.innerText = charsCounter;;
}

function datePicker() {
  const datePicker = document.getElementById('datepicker');

  datePicker.DatePickerX.init({
    format: 'dd/mm/yyyy'
  });
      clearButton: false
};
// Referência: https://github.com/AlexKrupko/DatePickerX

const validate = new JustValidate('#form');

validate
  .addField('#input-name', [
    {
      rule: 'required',
      errorMessage: 'O campo de nome é obrigatório.',
    },
    {
      rule: 'maxLength',
      value: 40,
      errorMessage: 'Por favor, digite no máximo 40 caracteres.',
    },
    {
      rule: 'minLength',
      value: 10,
      errorMessage: 'Por favor, digite no mínimo 10 caracteres.',
    },
  ])
  .addField('#input-email', [
    {
      rule: 'required',
      errorMessage: 'Campo obrigatório.',
    },
    {
      rule: 'email',
      errorMessage: 'O email é inválido.',
    },
    {
      rule: 'maxLength',
      value: 50,
      errorMessage: 'Por favor, digite no máximo 50 caracteres.',
    },
  ])
  .addField('#input-textarea', [
    {
      rule: 'required',
      errorMessage: 'O campo de resposta é obrigatório.',
    },
    {
      rule: 'maxLength',
      value: 500,
      errorMessage: `Por favor, digite no máximo 500 caracteres.`,
    },
  ])
  .addField('#datepicker', [
    {
      rule: 'required',
      errorMessage: 'O campo de data é obrigatório.',
    },
  ])
  .addField('#term2', [
    {
      rule: 'required',
      errorMessage: 'Por favor, concorde com a política de imagens',
    },
  ])
  .onSuccess(function () {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  });

// Referência: https://github.com/horprogs/Just-validate
  