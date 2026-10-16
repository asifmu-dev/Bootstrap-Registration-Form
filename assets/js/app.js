
const form = document.querySelector("#registration-form");
const message = document.querySelector("#message");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const phone = document.querySelector("#phone").value.trim();
    const password = document.querySelector("#password").value;
    const confirmPassword = document.querySelector("#confirm-password").value;
    const course = document.querySelector("#course").value;

    message.classList.remove("d-none", "alert-success", "alert-danger");

    if (!name || !email || !phone || !password || !confirmPassword || !course) {
        message.textContent = "Please fill in all fields.";
        message.classList.add("alert-danger");
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        message.textContent = "Please enter a valid email address.";
        message.classList.add("alert-danger");
        return;
    }

    if (password.length < 8) {
        message.textContent = "Password must be at least 8 characters long.";
        message.classList.add("alert-danger");
        return;
    }

    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match.";
        message.classList.add("alert-danger");
        return;
    }

    message.textContent = `Registration successful! Welcome, ${name}.`;
    message.classList.add("alert-success");

    form.reset();
});
