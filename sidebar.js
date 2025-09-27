window.addEventListener('DOMContentLoaded', () => {
    const role = localStorage.getItem("role");
    if (!role) { window.location.href = "index.html"; }
    document.getElementById("userRole").textContent = role;
});
