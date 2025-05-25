function togglePopup() {
  const popup = document.getElementById('auth-popup');
  popup.classList.toggle('hidden');
}

function switchMode() {
  const title = document.getElementById('auth-title');
  const text = document.getElementById('toggle-text');
  const form = document.getElementById('auth-form');

  if (title.innerText === 'Login') {
    title.innerText = 'Sign Up';
    text.innerHTML = 'Already have an account? <a href="#" onclick="switchMode()">Login</a>';
  } else {
    title.innerText = 'Login';
    text.innerHTML = `Don't have an account? <a href="#" onclick="switchMode()">Sign up</a>`;
  }

  form.reset();
}

// Event listeners for open/close buttons
document.addEventListener('DOMContentLoaded', () => {
  // Open button
  const openBtn = document.getElementById('open-auth-btn');
  if (openBtn) {
    openBtn.addEventListener('click', togglePopup);
  }

  // Close (X) button
  const closeBtn = document.getElementById('close-auth-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', togglePopup);
  }
});
