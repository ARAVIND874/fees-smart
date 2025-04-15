// LOGIN
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const validUsers = { admin: "1234", staff: "5678", student: "abcd" };

  if (validUsers[username] === password) {
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("billingPage").classList.remove("hidden");
  } else {
    document.getElementById("loginError").style.display = "block";
  }
});

// BILL FORM
document.getElementById("billForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const reg = document.getElementById("registerNo").value;
  const name = document.getElementById("studentName").value;
  const dept = document.getElementById("department").value;
  const type = document.getElementById("billType").value;
  const amount = document.getElementById("billAmount").value;
  const date = document.getElementById("billDate").value;

  const table = document.querySelector("#billsTable tbody");
  const row = table.insertRow();

  row.innerHTML = `
    <td>${reg}</td>
    <td>${name}</td>
    <td>${dept}</td>
    <td>${type}</td>
    <td>₹${amount}</td>
    <td>${date}</td>
    <td>
      <button onclick="showReceipt('${reg}','${name}','${dept}','${type}','${amount}','${date}')">🖨️</button>
      <button onclick="deleteRow(this)">🗑️</button>
    </td>
  `;

  document.getElementById("billForm").reset();
});

// PRINT RECEIPT
function showReceipt(reg, name, dept, type, amount, date) {
  document.getElementById("rReg").textContent = reg;
  document.getElementById("rName").textContent = name;
  document.getElementById("rDept").textContent = dept;
  document.getElementById("rType").textContent = type;
  document.getElementById("rAmount").textContent = amount;
  document.getElementById("rDate").textContent = date;

  document.getElementById("randomNum").textContent = Math.floor(1000 + Math.random() * 9000);
  document.getElementById("issueDate").textContent = new Date().toLocaleDateString();

  document.getElementById("billReceipt").classList.remove("hidden");
  window.print();
  document.getElementById("billReceipt").classList.add("hidden");
}

// DELETE ROW
function deleteRow(btn) {
  if (confirm("Are you sure you want to delete this record?")) {
    const row = btn.closest("tr");
    row.remove();
  }
}
