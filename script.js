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

// Captura o evento de submit obtendo os valores
form.onsubmit = (event) => {
  event.preventDefault()

  // Cria um objeto com os detalhes da despesa
  const newExpense = {
    id: new Date().getTime(),
    expense: expense.value,
    category_id: category.value,
    category_name: category.options[category.selectedIndex].text,
    amount: amount.value,
    create_at: new Date()
  }

  // Chama a função que adiciona o item na lista
  expenseAdd(newExpense)
}

function expenseAdd(newExpense) {
  try {
    // Criando o elemento li para adicionar o item na lista
    const expenseItem = document.createElement("li")
    expenseItem.classList.add("expense")

  } catch (error) {
    console.log(error)
    alert("Ocorreu um erro. Tente novamente.")
  }
}