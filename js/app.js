// Portfolio logic — simplified
const $year = document.getElementById('year');
const themeBtn = document.getElementById('themeBtn');
const themeIcon = document.getElementById('themeIcon');

$year.textContent = new Date().getFullYear();

function syncThemeIcon(){
  if (themeIcon) {
    themeIcon.textContent = document.documentElement.classList.contains('dark') ? '☀️' : '🌙';
  }
}

// Función para cambiar tema
function toggleTheme() {
  const el = document.documentElement;
  el.classList.toggle('dark');
  localStorage.setItem('theme', el.classList.contains('dark') ? 'dark' : 'light');
  syncThemeIcon();
}

// Inicializar tema
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  syncThemeIcon();
}

// Event listener para el botón de tema
if (themeBtn) {
  themeBtn.addEventListener('click', toggleTheme);
}

document.getElementById('copyBtn')?.addEventListener('click', ()=>{
  const email = document.getElementById('emailLink').textContent.replace('✉️','').trim();
  navigator.clipboard.writeText(email);
  const btn = document.getElementById('copyBtn'); const old=btn.textContent;
  btn.textContent='¡Copiado!'; setTimeout(()=>btn.textContent=old,1200);
});

// Función de inicialización simplificada
function init(){
  console.log('Inicializando portafolio...');
  
  try {
    initTheme();
    console.log('Tema inicializado');
    
  } catch (error) {
    console.error('Error durante la inicialización:', error);
  }
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
