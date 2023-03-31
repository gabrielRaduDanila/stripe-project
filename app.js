import get from './utils/getElement.js';
import sublinks from './data.js';

const toggleBtn = get('.toggle-btn');
const closeBtn = get('.close-btn');
const sidebarWrapper = get('.sidebar-wrapper');
const sidebar = get('.sidebar-links');
const linkBtns = [...document.querySelectorAll('.link-btn')];
const submenu = get('.submenu');
const hero = get('.hero');
const nav = get('.nav');

//hide/show side menu;

toggleBtn.addEventListener('click', () => sidebarWrapper.classList.add('show'));
closeBtn.addEventListener('click', () =>
  sidebarWrapper.classList.remove('show')
);

// set sidebar

sidebar.innerHTML = sublinks.map((item) => {
  const {links, page} = item;
  return `<article>
  <h4>${page}</h4>
  <div class="sidebar-sublinks">
  ${links.map(({url, icon, label}) => {
    return `<a href = "${url}">
    <i class="${icon}"></i>${label}
    </a>`
  }).join('')}
  </div>
  </article>`
}).join('');