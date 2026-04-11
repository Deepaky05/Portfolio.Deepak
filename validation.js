function validateForm(name, email, mobile, subject, message) {

  if (!name) {
    showToast("Please enter your name", "error");
    return false;
  }

  if (!email || !email.includes("@")) {
    showToast("Please enter valid email", "error");
    return false;
  }

  if (!mobile || mobile.length < 10) {
    showToast("Please enter valid mobile number", "error");
    return false;
  }

  if (!subject) {
    showToast("Please enter subject", "error");
    return false;
  }

  if (!message) {
    showToast("Please enter message", "error");
    return false;
  }

  return true;
}

function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");

  const toast = document.createElement("div");
  toast.classList.add("toast", type);
  toast.innerText = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 10000);
}