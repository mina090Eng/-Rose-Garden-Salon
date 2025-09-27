const employeeForm = document.getElementById("employeeForm");
const employeeTable = document.getElementById("employeeTable");

employeeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const salary = document.getElementById("salary").value;
    const loan = document.getElementById("loan").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;

    const row = `<tr><td>${name}</td><td>${salary}</td><td>${loan}</td><td>${checkin}</td><td>${checkout}</td></tr>`;
    employeeTable.innerHTML += row;
    employeeForm.reset();
});