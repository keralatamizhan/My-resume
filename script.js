/**
 * script.js — Handles interactions and resume download
 */

document.addEventListener('DOMContentLoaded', () => {
  // ── Mobile Nav ────────────────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const open = navLinks.style.display === 'flex';
      navLinks.style.cssText = open ? '' : `
        display:flex; flex-direction:column; position:absolute;
        top:64px; right:1.5rem; background:#141414;
        padding:1rem 1.5rem; border-radius:10px;
        border:1px solid rgba(212,175,55,0.15); z-index:99;`;
    });
  }

  // ── Active nav on scroll ───────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 100) current = s.id; });
    links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
  });
});

function downloadResume() {
  const resumeLink = 'Reaume/My resume (2).pdf'; // Changed to relative path
  const link = document.createElement('a');
  link.href = resumeLink;
  link.download = 'My resume (2).pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

