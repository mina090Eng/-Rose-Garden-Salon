document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "123") {
        localStorage.setItem("role", "Admin");
        window.location.href = "suppliers.html";
    } else if (username === "user" && password === "1234") {
        localStorage.setItem("role", "User");
        window.location.href = "sales.html";
    } else { alert("خطأ في اسم المستخدم أو كلمة المرور"); }
});

function logout() {
    localStorage.removeItem("role");
}
