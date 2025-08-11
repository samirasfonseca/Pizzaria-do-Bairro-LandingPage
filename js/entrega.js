const mensagemEntrega = document.getElementById('mensagem-entrega');
const inputEndereco = document.getElementById('input-endereco');
const btnCalcularTempo = document.getElementById('btn-calcular-tempo');
const resultadoTempo = document.getElementById('resultado-tempo');

function calcularTempoEntrega() {
  const agora = new Date();
  const hora = agora.getHours();

  let tempoEstimado;

  if (hora >= 18 && hora <= 22) {
    // Horário de pico (ex: 18h às 22h)
    tempoEstimado = 60; // minutos
  } else {
    tempoEstimado = 30; // minutos
  }

  resultadoTempo.textContent = `Estimativa de entrega: cerca de ${tempoEstimado} minutos.`;
}

btnCalcularTempo.addEventListener('click', () => {
  if(inputEndereco.value.trim() === '') {
    alert('Por favor, informe seu endereço para um cálculo mais preciso.');
    return;
  }
  calcularTempoEntrega();
});
