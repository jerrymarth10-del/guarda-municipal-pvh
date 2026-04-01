const loginScreen = document.getElementById('loginScreen');
const app = document.getElementById('app');
const form = document.getElementById('loginForm');
const error = document.getElementById('loginError');
const PASSWORD = 'IDCAN2026';

function showApp() {
  loginScreen.classList.add('hidden');
  app.classList.remove('hidden');
}
function showLogin() {
  app.classList.add('hidden');
  loginScreen.classList.remove('hidden');
}
if (sessionStorage.getItem('jr_portal_logged') === 'true') showApp();

form.addEventListener('submit', function(e){
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  if (!email) {
    error.textContent = 'Digite um e-mail.';
    return;
  }
  if (password !== PASSWORD) {
    error.textContent = 'Senha incorreta.';
    return;
  }
  sessionStorage.setItem('jr_portal_logged', 'true');
  showApp();
});

document.getElementById('logoutBtn').addEventListener('click', function(){
  sessionStorage.removeItem('jr_portal_logged');
  showLogin();
});

document.querySelectorAll('.menu-link').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.menu-link').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const target = btn.getAttribute('data-target');
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(target).classList.add('active');
  });
});
