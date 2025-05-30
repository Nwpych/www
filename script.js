function loadMarkdown(mdFile, targetElementId) {
    const targetElement = document.getElementById(targetElementId);
    if (!targetElement) {
        console.error(`Element with id "${targetElementId}" not found.`);
        if (document.getElementById('main-content')) { // Check if main content area exists
             document.getElementById('main-content').innerHTML = `<div class="prose max-w-none"><h1>Error</h1><p>Content loading area not found.</p></div>`;
        }
        return;
    }


    targetElement.innerHTML = '<p class="text-center text-slate-500 py-10">Loading content...</p>';

    fetch(mdFile)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${mdFile}: ${response.status} ${response.statusText}`);
            }
            return response.text();
        })
        .then(text => {
            if (typeof marked !== 'undefined') {
                targetElement.innerHTML = marked.parse(text);
            } else {
                console.error('marked.js library is not loaded.');
                targetElement.innerHTML = '<p class="text-red-500">Error: Markdown library not loaded.</p>';
            }
        })
        .catch(error => {
            console.error('Error loading or parsing markdown:', error);
            targetElement.innerHTML = `<p class="text-red-500 text-center py-10">Error loading content for ${mdFile}. Please check the file path and ensure the file exists.<br>Details: ${error.message}</p>`;
        });
}

document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('#sidebar nav a, #mobile-nav nav a');

    navLinks.forEach(link => {

        let linkHref = link.getAttribute('href');
        if (linkHref.startsWith('./')) {
            linkHref = linkHref.substring(2);
        }

        if (linkHref === currentPath) {
            link.classList.add('bg-emerald-600', 'text-white', 'active-nav-link');
            link.classList.remove('hover:bg-slate-200', 'text-slate-700');
        } else {
            link.classList.remove('bg-emerald-600', 'text-white', 'active-nav-link');

            if(link.closest('#sidebar')) { // Desktop sidebar links
                 link.classList.add('text-slate-700', 'hover:bg-slate-200');
            } else { // Mobile nav links
                 link.classList.add('text-white', 'hover:bg-emerald-600');
            }
        }
    });

    const menuButton = document.getElementById('menu-button');
    const mobileNav = document.getElementById('mobile-nav');

    if (menuButton && mobileNav) {
        menuButton.addEventListener('click', () => {
            mobileNav.classList.toggle('hidden');
            const isExpanded = menuButton.getAttribute('aria-expanded') === 'true' || false;
            menuButton.setAttribute('aria-expanded', !isExpanded);

            if (!isExpanded) { // If it was hidden, now shown
                menuButton.innerHTML = `<svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>`; // X icon
            } else { // If it was shown, now hidden
                menuButton.innerHTML = `<svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>`; // Hamburger icon
            }
        });
    }
});
