const services = [
  { id: 1, main: 'Hair', sub: 'Haircut', price: 50 },
  { id: 2, main: 'Hair', sub: 'Hair Coloring', price: 150 },
  { id: 3, main: 'Hair', sub: 'Styling', price: 80 },
  { id: 4, main: 'Hair', sub: 'Keratin Treatment', price: 300 },
  { id: 5, main: 'Hair', sub: 'Highlights', price: 200 },
  { id: 6, main: 'Hair', sub: 'Hair Mask', price: 120 },
  { id: 7, main: 'Hair', sub: 'Blow Dry', price: 70 },
  { id: 8, main: 'Hair', sub: 'Hair Spa', price: 180 },
  { id: 9, main: 'Hair', sub: 'Perm', price: 250 },
  { id: 10, main: 'Hair', sub: 'Extensions', price: 400 },
  { id: 11, main: 'Nails', sub: 'Manicure', price: 40 },
  { id: 12, main: 'Nails', sub: 'Pedicure', price: 60 },
  { id: 13, main: 'Nails', sub: 'Gel Manicure', price: 70 },
  { id: 14, main: 'Nails', sub: 'Gel Pedicure', price: 90 },
  { id: 15, main: 'Nails', sub: 'Nail Art', price: 50 },
  { id: 16, main: 'Nails', sub: 'French Manicure', price: 60 },
  { id: 17, main: 'Nails', sub: 'Acrylic Nails', price: 120 },
  { id: 18, main: 'Nails', sub: 'Nail Repair', price: 30 },
  { id: 19, main: 'Nails', sub: 'Paraffin Treatment', price: 70 },
  { id: 20, main: 'Nails', sub: 'Cuticle Care', price: 25 },
  { id: 21, main: 'Face', sub: 'Facial Basic', price: 100 },
  { id: 22, main: 'Face', sub: 'Deep Cleansing Facial', price: 150 },
  { id: 23, main: 'Face', sub: 'Anti-Aging Facial', price: 200 },
  { id: 24, main: 'Face', sub: 'Hydrating Facial', price: 180 },
  { id: 25, main: 'Face', sub: 'Acne Treatment', price: 160 },
  { id: 26, main: 'Face', sub: 'Brightening Facial', price: 170 },
  { id: 27, main: 'Face', sub: 'Face Mask', price: 80 },
  { id: 28, main: 'Face', sub: 'Eyebrow Shaping', price: 40 },
  { id: 29, main: 'Face', sub: 'Threading', price: 35 },
  { id: 30, main: 'Face', sub: 'Waxing', price: 50 },
  { id: 31, main: 'Makeup', sub: 'Bridal Makeup', price: 250 },
  { id: 32, main: 'Makeup', sub: 'Evening Makeup', price: 150 },
  { id: 33, main: 'Makeup', sub: 'Day Makeup', price: 100 },
  { id: 34, main: 'Makeup', sub: 'Party Makeup', price: 120 },
  { id: 35, main: 'Makeup', sub: 'Makeup Lesson', price: 80 },
  { id: 36, main: 'Makeup', sub: 'False Eyelashes', price: 50 },
  { id: 37, main: 'Makeup', sub: 'Highlight & Contour', price: 70 },
  { id: 38, main: 'Makeup', sub: 'Lip Coloring', price: 40 },
  { id: 39, main: 'Makeup', sub: 'Eye Shadow', price: 30 },
  { id: 40, main: 'Makeup', sub: 'Eyebrow Tint', price: 45 },
  { id: 41, main: 'Massage', sub: 'Relaxing Massage', price: 200 },
  { id: 42, main: 'Massage', sub: 'Deep Tissue Massage', price: 250 },
  { id: 43, main: 'Massage', sub: 'Hot Stone Massage', price: 300 },
  { id: 44, main: 'Massage', sub: 'Aromatherapy', price: 220 },
  { id: 45, main: 'Massage', sub: 'Head & Shoulder', price: 150 },
  { id: 46, main: 'Massage', sub: 'Foot Massage', price: 120 },
  { id: 47, main: 'Massage', sub: 'Back Massage', price: 180 },
  { id: 48, main: 'Massage', sub: 'Body Scrub', price: 200 },
  { id: 49, main: 'Massage', sub: 'Body Wrap', price: 250 },
  { id: 50, main: 'Massage', sub: 'Cellulite Treatment', price: 300 },
  { id: 51, main: 'Hair', sub: 'Root Touch Up', price: 120 },
  { id: 52, main: 'Hair', sub: 'Blowout', price: 70 },
  { id: 53, main: 'Face', sub: 'Microdermabrasion', price: 250 },
  { id: 54, main: 'Face', sub: 'LED Therapy', price: 300 },
  { id: 55, main: 'Nails', sub: 'Gel Removal', price: 35 },
  { id: 56, main: 'Makeup', sub: 'Airbrush Makeup', price: 300 },
  { id: 57, main: 'Massage', sub: 'Couples Massage', price: 400 },
  { id: 58, main: 'Hair', sub: 'Scalp Treatment', price: 150 },
  { id: 59, main: 'Face', sub: 'Chemical Peel', price: 350 },
  { id: 60, main: 'Nails', sub: 'Nail Repair & Fill', price: 50 }
];

const mainSelect = document.getElementById('mainServiceSelect');
const subSelect = document.getElementById('subServiceSelect');
const addServiceBtn = document.getElementById('addService');
const invoiceTableBody = document.querySelector('#invoiceTable tbody');
const printBtn = document.getElementById('printInvoice');
const customerNameInput = document.getElementById('customerName');
const customerPhoneInput = document.getElementById('customerPhone');
const invoiceDateInput = document.getElementById('invoiceDate');

let invoice = [];

// تحميل الخدمات الأساسية
function loadMainServices() {
  const mainGroups = [...new Set(services.map(s => s.main))];
  mainSelect.innerHTML = '<option value="">اختر الخدمة الأساسية</option>';
  mainGroups.forEach(group => {
    const option = document.createElement('option');
    option.value = group;
    option.textContent = group;
    mainSelect.appendChild(option);
  });
}
loadMainServices();

// تحديث الخدمات الفرعية عند اختيار الأساسية
mainSelect.addEventListener('change', () => {
  const selectedMain = mainSelect.value;
  subSelect.innerHTML = '<option value="">اختر الخدمة الفرعية</option>';
  services.filter(s => s.main === selectedMain).forEach(s => {
    const option = document.createElement('option');
    option.value = s.id;
    option.textContent = s.sub; // شيلنا السعر من هنا
    subSelect.appendChild(option);
  });
});

// إضافة خدمة للفاتورة
addServiceBtn.addEventListener('click', () => {
  const serviceId = parseInt(subSelect.value);
  if (!serviceId) return alert('اختر الخدمة أولاً');

  const service = services.find(s => s.id === serviceId);
  invoice.push(service);

  renderInvoiceTable();
});

// دالة لإظهار الجدول
function renderInvoiceTable() {
  invoiceTableBody.innerHTML = '';
  invoice.forEach((service, index) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${service.main}</td>
      <td>${service.sub}</td>
      <td><button class="remove" data-index="${index}">حذف</button></td>
    `;
    invoiceTableBody.appendChild(tr);

    tr.querySelector('.remove').addEventListener('click', () => {
      invoice.splice(index, 1);
      renderInvoiceTable();
    });
  });
}

// الطباعة
printBtn.addEventListener('click', () => {
  let tbodyContent = '';
  invoice.forEach(service => {
    tbodyContent += `
      <tr>
        <td>${service.main}</td>
        <td>${service.sub}</td>
      </tr>
    `;
  });

  const printContent = `
  <html>
  <head>
    <title>فاتورة Rose Garden Salon</title>
    <style>
      body { font-family: Arial, sans-serif; padding: 20px; }
      h2 { text-align: center; color: #FF3B6B; }
      table { width: 100%; border-collapse: collapse; margin-top: 20px; }
      th, td { border: 1px solid #000; padding: 8px; text-align: left; }
      th { background: #FFDEE9; }
      p { margin: 5px 0; }
    </style>
  </head>
  <body>
    <h2>Rose Garden Salon</h2>
    <p>اسم العميل: ${customerNameInput.value}</p>
    <p>رقم التليفون: ${customerPhoneInput.value}</p>
    <p>التاريخ: ${invoiceDateInput.value}</p>
    <table>
      <thead>
        <tr>
          <th>الخدمة الأساسية</th>
          <th>الخدمة الفرعية</th>
        </tr>
      </thead>
      <tbody>
        ${tbodyContent}
      </tbody>
    </table>
    <p>شكراً لزيارتكم Rose Garden Salon</p>
  </body>
  </html>
  `;

  const printWindow = window.open('', '', 'height=700,width=900');
  printWindow.document.write(printContent);
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
});
