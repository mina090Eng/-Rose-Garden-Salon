const subServices = {
    "Haircut": ["قص عادي", "قص مع تصفيف", "قص + غسيل"],
    "Color": ["تلوين كامل", "هايلايت", "صبغة جزئية"],
    "Manicure": ["مانيكير عادي", "مانيكير + طلاء", "باديكير"]
};

const mainSelect = document.getElementById('mainServiceSelect');
const subSelect = document.getElementById('subServiceSelect');
const addBtn = document.getElementById('addService');
const invoiceTable = document.querySelector('#invoiceTable tbody');
const totalPriceEl = document.getElementById('totalPrice');

mainSelect.addEventListener('change', () => {
    const mainVal = mainSelect.value;
    subSelect.innerHTML = '<option value="">اختر الخدمة الفرعية</option>';
    if (subServices[mainVal]) {
        subServices[mainVal].forEach(sub => {
            const opt = document.createElement('option');
            opt.value = sub;
            opt.textContent = sub;
            subSelect.appendChild(opt);
        });
    }
});

let total = 0;

addBtn.addEventListener('click', () => {
    const mainService = mainSelect.value;
    const subService = subSelect.value;
    const price = parseFloat(document.getElementById('servicePrice').value);

    if (!mainService || !subService || isNaN(price)) {
        alert("من فضلك اكمل كل الحقول!");
        return;
    }

    const tr = document.createElement('tr');

    tr.innerHTML = `
        <td>${mainService}</td>
        <td>${subService}</td>
        <td>${price.toFixed(2)}</td>
        <td><button class="deleteBtn">حذف</button></td>
    `;

    invoiceTable.appendChild(tr);

    total += price;
    totalPriceEl.textContent = total.toFixed(2);

    tr.querySelector('.deleteBtn').addEventListener('click', () => {
        invoiceTable.removeChild(tr);
        total -= price;
        totalPriceEl.textContent = total.toFixed(2);
    });

    // إعادة تعيين الحقول
    mainSelect.value = "";
    subSelect.innerHTML = '<option value="">اختر الخدمة الفرعية</option>';
    document.getElementById('servicePrice').value = "";
});

// طباعة الفاتورة
document.getElementById('printInvoice').addEventListener('click', () => {
    window.print();
});
