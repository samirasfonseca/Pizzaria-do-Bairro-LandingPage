const btnAplicarCupom = document.getElementById('btn-aplicar-cupom');
const inputCupom = document.getElementById('input-cupom');
const mensagemCupom = document.getElementById('mensagem-cupom');

btnAplicarCupom.addEventListener('click', () => {
  const cupom = inputCupom.value.trim().toUpperCase();

  if(cupom === 'BOASVINDAS10') {
    mensagemCupom.textContent = 'Cupom aplicado! Você ganhou 10% de desconto na sua compra.';
    mensagemCupom.style.color = 'green';
    // Aqui você pode integrar com o carrinho para aplicar o desconto
  } else {
    mensagemCupom.textContent = 'Cupom inválido. Tente novamente.';
    mensagemCupom.style.color = 'red';
  }
});
