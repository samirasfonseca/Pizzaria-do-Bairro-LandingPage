const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  // Alterna aria-expanded para acessibilidade
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
  menuToggle.setAttribute('aria-expanded', !expanded);
});




const pizzas = [
  {
    id: 1,
    nome: "Mussarela Pequena",
    preco: 20,
    ingredientes: ["queijo mussarela", "orégano"],
    descricao: "Pizza clássica com queijo mussarela derretido e um toque de orégano."
  },
  {
    id: 2,
    nome: "Mussarela Média",
    preco: 30,
    ingredientes: ["queijo mussarela", "orégano"],
    descricao: "Versão média da nossa tradicional pizza de mussarela, perfeita para compartilhar."
  },
  {
    id: 3,
    nome: "Mussarela Grande",
    preco: 40,
    ingredientes: ["queijo mussarela", "orégano"],
    descricao: "Grande e saborosa pizza de mussarela para os amantes do queijo."
  },
  {
    id: 4,
    nome: "Calabresa Pequena",
    preco: 22,
    ingredientes: ["calabresa fatiada", "cebola", "queijo mussarela"],
    descricao: "Pizza saborosa com fatias de calabresa, cebola e mussarela."
  },
  {
    id: 5,
    nome: "Calabresa Média",
    preco: 32,
    ingredientes: ["calabresa fatiada", "cebola", "queijo mussarela"],
    descricao: "Média calabresa, ideal para encontros com amigos e família."
  },
  {
    id: 6,
    nome: "Calabresa Grande",
    preco: 42,
    ingredientes: ["calabresa fatiada", "cebola", "queijo mussarela"],
    descricao: "Pizza grande de calabresa com bastante recheio e sabor marcante."
  },
  {
    id: 7,
    nome: "Portuguesa Pequena",
    preco: 23,
    ingredientes: ["presunto", "ovo", "cebola", "pimentão", "azeitonas", "queijo mussarela"],
    descricao: "Clássica pizza portuguesa com ingredientes variados e sabor equilibrado."
  },
  {
    id: 8,
    nome: "Portuguesa Média",
    preco: 33,
    ingredientes: ["presunto", "ovo", "cebola", "pimentão", "azeitonas", "queijo mussarela"],
    descricao: "Versão média da pizza portuguesa, perfeita para compartilhar."
  },
  {
    id: 9,
    nome: "Portuguesa Grande",
    preco: 43,
    ingredientes: ["presunto", "ovo", "cebola", "pimentão", "azeitonas", "queijo mussarela"],
    descricao: "Grande pizza portuguesa com sabores tradicionais e marcantes."
  },
  {
    id: 10,
    nome: "Marguerita Pequena",
    preco: 24,
    ingredientes: ["queijo mussarela", "tomate", "manjericão fresco"],
    descricao: "Pizza leve e fresca, com tomate e manjericão."
  },
  {
    id: 11,
    nome: "Marguerita Média",
    preco: 34,
    ingredientes: ["queijo mussarela", "tomate", "manjericão fresco"],
    descricao: "Média pizza Marguerita para os fãs de sabores simples e delicados."
  },
  {
    id: 12,
    nome: "Marguerita Grande",
    preco: 44,
    ingredientes: ["queijo mussarela", "tomate", "manjericão fresco"],
    descricao: "Grande pizza Marguerita com sabor tradicional italiano."
  },
  {
    id: 13,
    nome: "Quatro Queijos Pequena",
    preco: 25,
    ingredientes: ["mussarela", "parmesão", "gorgonzola", "catupiry"],
    descricao: "Combinação irresistível de quatro queijos diferentes."
  },
  {
    id: 14,
    nome: "Quatro Queijos Média",
    preco: 35,
    ingredientes: ["mussarela", "parmesão", "gorgonzola", "catupiry"],
    descricao: "Média quatro queijos, cremosa e saborosa."
  },
  {
    id: 15,
    nome: "Quatro Queijos Grande",
    preco: 45,
    ingredientes: ["mussarela", "parmesão", "gorgonzola", "catupiry"],
    descricao: "Grande pizza quatro queijos para os amantes de queijo."
  },
  {
    id: 16,
    nome: "Frango com Catupiry Pequena",
    preco: 26,
    ingredientes: ["frango desfiado", "catupiry", "queijo mussarela"],
    descricao: "Pizza saborosa com frango desfiado e catupiry cremoso."
  },
  {
    id: 17,
    nome: "Frango com Catupiry Média",
    preco: 36,
    ingredientes: ["frango desfiado", "catupiry", "queijo mussarela"],
    descricao: "Média pizza de frango com catupiry, ótima para a família."
  },
  {
    id: 18,
    nome: "Frango com Catupiry Grande",
    preco: 46,
    ingredientes: ["frango desfiado", "catupiry", "queijo mussarela"],
    descricao: "Grande e deliciosa pizza de frango com catupiry."
  },
  {
    id: 19,
    nome: "Pepperoni Pequena",
    preco: 27,
    ingredientes: ["pepperoni fatiado", "queijo mussarela"],
    descricao: "Pizza apimentada com fatias generosas de pepperoni."
  },
  {
    id: 20,
    nome: "Pepperoni Média",
    preco: 37,
    ingredientes: ["pepperoni fatiado", "queijo mussarela"],
    descricao: "Média pizza pepperoni para quem gosta de um sabor marcante."
  },
  {
    id: 21,
    nome: "Pepperoni Grande",
    preco: 47,
    ingredientes: ["pepperoni fatiado", "queijo mussarela"],
    descricao: "Grande pizza pepperoni com muito recheio."
  },
  {
    id: 22,
    nome: "Vegetariana Pequena",
    preco: 23,
    ingredientes: ["vegetais frescos", "queijo mussarela", "molho especial"],
    descricao: "Opção vegetariana com mix de vegetais frescos e sabor especial."
  },
  {
    id: 23,
    nome: "Vegetariana Média",
    preco: 33,
    ingredientes: ["vegetais frescos", "queijo mussarela", "molho especial"],
    descricao: "Média pizza vegetariana para quem busca saúde e sabor."
  },
  {
    id: 24,
    nome: "Vegetariana Grande",
    preco: 43,
    ingredientes: ["vegetais frescos", "queijo mussarela", "molho especial"],
    descricao: "Grande pizza vegetariana com ingredientes frescos e deliciosos."
  },
];

// Elementos DOM
const listaPizzasEl = document.querySelector(".carousel-track");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;
const cardWidth = 270; // deve ser igual à largura do card + margem no CSS
let visibleCards = 0;

// Calcula quantos cards cabem visivelmente na tela
function calcularVisibleCards() {
  const containerWidth = listaPizzasEl.parentElement.offsetWidth;
  visibleCards = Math.floor(containerWidth / cardWidth);
}
calcularVisibleCards();

// Função para mostrar as pizzas no carrossel
function mostrarPizzas() {
  pizzas.forEach(pizza => {
    const card = document.createElement("div");
    card.classList.add("promo-card");
    card.innerHTML = `
      <h3>${pizza.nome}</h3>
      <p><strong>Preço:</strong> R$ ${pizza.preco.toFixed(2)}</p>
      <p><strong>Ingredientes:</strong> ${pizza.ingredientes.join(", ")}</p>
      <p><em>${pizza.descricao}</em></p>
      <button class="btn-add" onclick="adicionarAoCarrinho('${pizza.nome}', ${pizza.preco})">
        Adicionar ao Carrinho
      </button>
    `;
    listaPizzasEl.appendChild(card);
  });
}

mostrarPizzas();

function atualizarCarrossel() {
  listaPizzasEl.style.transform = `translateX(${-index * cardWidth}px)`;
}

// Evento para o botão "próximo"
nextBtn.addEventListener("click", () => {
  index++;
  if (index > pizzas.length - visibleCards) {
    index = 0;
  }
  atualizarCarrossel();
});

// Evento para o botão "anterior"
prevBtn.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = pizzas.length - visibleCards;
  }
  atualizarCarrossel();
});

// Recalcula cards visíveis e ajusta índice ao redimensionar a janela
window.addEventListener("resize", () => {
  calcularVisibleCards();
  if (index > pizzas.length - visibleCards) {
    index = pizzas.length - visibleCards;
  }
  atualizarCarrossel();
});

// Lógica do carrinho
let carrinho = [];
const contadorCarrinhoEl = document.getElementById('contador-carrinho');

function adicionarAoCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  
  console.log(carrinho);

  // Atualiza o contador no botão do carrinho
  contadorCarrinhoEl.textContent = carrinho.length;
}

const btnCarrinho = document.getElementById('btn-carrinho');
const carrinhoContainer = document.getElementById('carrinho-container');
const carrinhoOverlay = document.getElementById('carrinho-overlay');
const fecharCarrinhoBtn = document.getElementById('fechar-carrinho');
const listaCarrinhoEl = document.getElementById('lista-carrinho');
const totalCarrinhoEl = document.getElementById('total-carrinho');



function adicionarAoCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  
  atualizarCarrinho();
  abrirCarrinho();
}

function atualizarCarrinho() {
  // Atualiza contador no botão
  contadorCarrinhoEl.textContent = carrinho.length;

  // Atualiza lista no painel
  listaCarrinhoEl.innerHTML = '';

  if (carrinho.length === 0) {
    listaCarrinhoEl.innerHTML = '<li>Carrinho vazio.</li>';
    totalCarrinhoEl.textContent = '0,00';
    return;
  }

  // Adiciona itens e botão remover
  carrinho.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;

    const btnRemover = document.createElement('button');
    btnRemover.textContent = 'Remover';
    btnRemover.style.marginLeft = '10px';
    btnRemover.addEventListener('click', () => {
      removerDoCarrinho(index);
    });

    li.appendChild(btnRemover);
    listaCarrinhoEl.appendChild(li);
  });

  // Atualiza total
  const total = carrinho.reduce((acc, item) => acc + item.preco, 0);
  totalCarrinhoEl.textContent = total.toFixed(2);
}

function removerDoCarrinho(index) {
  carrinho.splice(index, 1);
  atualizarCarrinho();
}

function abrirCarrinho() {
  carrinhoContainer.classList.add('aberto');
  carrinhoOverlay.classList.add('aberto');
  btnCarrinho.setAttribute('aria-expanded', 'true');
  carrinhoContainer.setAttribute('aria-hidden', 'false');
  carrinhoOverlay.setAttribute('aria-hidden', 'false');
  // opcional: trava scroll da página enquanto carrinho aberto
  document.body.style.overflow = 'hidden';
}

function fecharCarrinho() {
  carrinhoContainer.classList.remove('aberto');
  carrinhoOverlay.classList.remove('aberto');
  btnCarrinho.setAttribute('aria-expanded', 'false');
  carrinhoContainer.setAttribute('aria-hidden', 'true');
  carrinhoOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// Toggle carrinho ao clicar no botão
btnCarrinho.addEventListener('click', () => {
  if (carrinhoContainer.classList.contains('aberto')) {
    fecharCarrinho();
  } else {
    abrirCarrinho();
    atualizarCarrinho();
  }
});

// Fecha carrinho ao clicar no botão fechar
fecharCarrinhoBtn.addEventListener('click', fecharCarrinho);

// Fecha carrinho ao clicar no overlay (fora do painel)
carrinhoOverlay.addEventListener('click', fecharCarrinho);

// Fecha carrinho ao apertar Esc
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && carrinhoContainer.classList.contains('aberto')) {
    fecharCarrinho();
  }
});
