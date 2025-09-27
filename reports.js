const reportForm = document.getElementById("reportForm");
const reportResult = document.getElementById("reportResult");

reportForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const service = document.getElementById("service").value;
    const month = document.getElementById("month").value;

    reportResult.innerHTML = `<p>نتائج البحث عن الخدمة: ${service}, للشهر: ${month}</p>`;
});