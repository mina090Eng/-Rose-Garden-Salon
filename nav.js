(function(){
function $(s){return document.querySelector(s)}
const token = localStorage.getItem('salon_user')
// on pages other than index, redirect to login if not set
if(location.pathname.endsWith('index.html')===false && location.pathname.endsWith('/')===false){
if(!token) location.href = 'index.html'
}
// render sidebar if container موجود
document.addEventListener('DOMContentLoaded',()=>{
const side = document.getElementById('sidebar')
if(!side) return
side.innerHTML = `
<div class="logo">✂️ SalonSys</div>
<hr>
<ul class="menu">
<li><a href="suppliers.html">الموردين</a></li>
<li><a href="inventory.html">المخزن</a></li>
<li><a href="sales.html">المبيعات</a></li>
<li><a href="customers.html">العملاء</a></li>
<li><a href="employees.html">العمال</a></li>
<li><a href="reports.html">التقارير</a></li>
<li><a href="#" id="logout">تسجيل خروج</a></li>
</ul>
`
// set active
document.querySelectorAll('.menu a').forEach(a=>{
if(a.href===location.href) a.classList.add('active')
})
const out = document.getElementById('logout')
out && out.addEventListener('click',e=>{e.preventDefault();localStorage.removeItem('salon_user');location.href='index.html'})
})
})()