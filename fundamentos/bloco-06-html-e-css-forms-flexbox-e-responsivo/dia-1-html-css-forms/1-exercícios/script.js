const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', function (event) {

  event.preventDefault();

  const nameInput = document.getElementById('input-name').value;
  const emailInput = document.getElementById('input-email').value;
  const textInput = document.getElementById('input-textarea').value;
  const imgRightsCheckbox = document.getElementById('term2');
  let errorVerificator = false;

  if (nameInput.length < 10 || nameInput > 40) {
    alert('Nome inválido, deve conter de 10 a 40 caracteres');
    errorVerificator = true;
  }
  if (emailInput.length < 10 || emailInput > 50) {
    alert('Email inválido, deve conter de 10 a 50 caracteres');
    errorVerificator = true;
  }
  if (textInput.length > 500) {
    alert(`Resposta inválida, deve conter até 500 caracteres. Número de caracteres atual: ${textInput.length}`);
    errorVerificator = true;
  }

  if (imgRightsCheckbox.checked === false) {
    alert('Por favor, aceite os termos de imagem.')
  }  

  if (errorVerificator === false && imgRightsCheckbox.checked) {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
  }  
});
