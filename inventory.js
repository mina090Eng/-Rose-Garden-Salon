const inventoryForm = document.getElementById('inventoryForm');
const inventoryTable = document.getElementById('inventoryTable');

let inventory = [];

inventoryForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const productName = document.getElementById('product').value;
    const quantity = parseInt(document.getElementById('quantity').value);

    // لو الصنف موجود بالفعل نزود الكمية
    const existingItem = inventory.find(item => item.product === productName);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        inventory.push({ product: productName, quantity: quantity });
    }

    renderInventory();
    inventoryForm.reset();
});

function renderInventory() {
    inventoryTable.innerHTML = '';
    inventory.forEach((item, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${item.product}</td>
            <td>${item.quantity}</td>
            <td>${item.quantity}</td>
            <td>
                <button onclick="withdraw(${index})">سحب كمية</button>
            </td>
        `;

        inventoryTable.appendChild(row);
    });
}

function withdraw(index) {
    const amount = prompt(`ادخل الكمية اللي عايز تسحبها من ${inventory[index].product}:`);
    const qty = parseInt(amount);

    if (!isNaN(qty) && qty > 0) {
        if (qty <= inventory[index].quantity) {
            inventory[index].quantity -= qty;
            renderInventory();
        } else {
            alert('الكمية أكبر من المتوفر!');
        }
    } else {
        alert('ادخل رقم صالح');
    }
}
