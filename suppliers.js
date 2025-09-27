const supplierForm = document.getElementById("supplierForm");
const supplierTable = document.getElementById("supplierTable");

supplierForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const company = document.getElementById("company").value;
    const invoice = document.getElementById("invoice").value;
    const date = document.getElementById("date").value;
    const total = document.getElementById("total").value;
    const paid = document.getElementById("paid").value;
    const remaining = total - paid;

    const row = `<tr><td>${company}</td><td>${invoice}</td><td>${date}</td><td>${total}</td><td>${paid}</td><td>${remaining}</td></tr>`;
    supplierTable.innerHTML += row;
    supplierForm.reset();
});