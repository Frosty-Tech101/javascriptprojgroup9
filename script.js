let balance = 0;

function addTransaction() {
  const desc = document.getElementById("desc").value;
  const amount = parseInt(document.getElementById("amount").value);

  if (!desc || isNaN(amount)) {
    alert("Enter valid data");
    return;
  }

  balance += amount;

  document.getElementById("balance").textContent = balance;

  const li = document.createElement("li");
  li.textContent = desc + ": ₦" + amount;

  document.getElementById("list").appendChild(li);

  // clear inputs
  document.getElementById("desc").value = "";
  document.getElementById("amount").value = "";
}