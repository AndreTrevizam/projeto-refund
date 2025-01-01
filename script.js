const amount = document.getElementById("amount")

amount.oninput = () => {
  let value = amount.value.replace(/\D/g, "")
  console.log(value)
  
  amount.value = value
}