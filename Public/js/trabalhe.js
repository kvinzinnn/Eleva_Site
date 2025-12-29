const vagas = [
  {
    ativa: true,
    titulo: "Auxiliar de RH",
    local: "Passo Fundo / RS",
    horario: "Segunda a sexta, 8h às 18h",
    descricao: "Apoiar as rotinas administrativas e operacionais do setor de RH, auxiliando nos processos de admissão, ponto, benefícios, recrutamento e treinamentos.",
    requisitos: [
      "Ensino médio completo",
      "Conhecimento básico em RH / DP",
      "Pacote Office",
      "Boa comunicação e organização"
    ],
    beneficios: [
      "Vale Transporte",
      "Vale Refeição",
      "Oportunidade de crescimento"
    ]
  }
];

const grid = document.getElementById("vagasGrid");

vagas.forEach((vaga, index) => {
  if (!vaga.ativa) return;

  const card = document.createElement("div");
  card.className = "vaga-card";

  card.innerHTML = `
    <h3>${vaga.titulo}</h3>
    <span>${vaga.local}</span>
    <span>CLT - Integral</span>
    <button onclick="abrirModal(${index})">Saiba mais</button>
  `;

  grid.appendChild(card);
});


const modal = document.getElementById("vagaModal");
const closeBtn = document.querySelector(".close");

function abrirModal(index) {
  const vaga = vagas[index];

  document.getElementById("modalTitulo").innerText = vaga.titulo;
  document.getElementById("modalDescricao").innerText = vaga.descricao;
  document.getElementById("modalLocal").innerText = vaga.local;
  document.getElementById("modalHorario").innerText = vaga.horario;

  const requisitos = document.getElementById("modalRequisitos");
  requisitos.innerHTML = "";
  vaga.requisitos.forEach(r => {
    requisitos.innerHTML += `<li>${r}</li>`;
  });

  const beneficios = document.getElementById("modalBeneficios");
  beneficios.innerHTML = "";
  vaga.beneficios.forEach(b => {
    beneficios.innerHTML += `<li>${b}</li>`;
  });

  modal.style.display = "flex";
}

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = e => {
  if (e.target === modal) modal.style.display = "none";
};