const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', function (event) {

  event.preventDefault();

  const nameInput = document.getElementById('input-name').value;
  const emailInput = document.getElementById('input-email').value;
  const textInput = document.getElementById('input-textarea').value;
  const imgRightsCheckbox = document.getElementById('term2');
  let errorVerificator = false;

function validateCharLength(input, min, max, inputLabel) {
  if (input.length < min || input.length > max) {
    alert(`${inputLabel} inválido, deve conter de ${min} a ${max} caracteres`);
    errorVerificator = true;
  }
}

validateCharLength(nameInput, 10, 40, 'Nome');
validateCharLength(emailInput, 10, 50, 'Email');
validateCharLength(textInput, 0, 500, 'Resposta');

  if (imgRightsCheckbox.checked === false) {
    alert('Por favor, aceite os termos de imagem.')
  }  

  if (errorVerificator === false && imgRightsCheckbox.checked) {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
  }  
});
