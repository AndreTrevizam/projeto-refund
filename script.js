const form = document.querySelector("form")
const amount = document.getElementById("amount")
const expense = document.getElementById("expense")
const category = document.getElementById("category")

// Pegando o input Amount e removendo os caracteres não numéricos
amount.oninput = () => {
  let value = amount.value.replace(/\D/g, "")
  
  // transformar o valor em centavos 
  value = Number(value) / 100

  // Atualiza o valor do input
  amount.value = formatCurrencyBRL(value)
}

function formatCurrencyBRL(value) {
  value = value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL"
  })

  // Retorna o valor formatado
  return value
}

form.onsubmit = (event) => {
  event.preventDefault()
}