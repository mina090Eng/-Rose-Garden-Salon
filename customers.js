const customerForm = document.getElementById("customerForm");
const customerTable = document.getElementById("customerTable");

customerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const refill = document.getElementById("refill").value;

    const row = `<tr><td>${name}</td><td>${phone}</td><td>${service}</td><td>${refill}</td></tr>`;
    customerTable.innerHTML += row;
    customerForm.reset();
});