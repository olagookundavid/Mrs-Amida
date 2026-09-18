/**
 * AMIDA NOBLE WOMEN PROGRESSIVE ACHIEVERS INITIATIVE
 * Main Interactive Application Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initGallery();
  initCertificateModal();
  initContactForm();
  initCopyrightYear();
});

/* ==========================================================================
   1. NAVBAR & MOBILE NAVIGATION
   ========================================================================== */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  // Sticky navbar shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('shadow-md', 'bg-white/95', 'backdrop-blur-md');
      navbar.classList.remove('bg-white');
    } else {
      navbar.classList.remove('shadow-md', 'bg-white/95', 'backdrop-blur-md');
      navbar.classList.add('bg-white');
    }
  });

  // Mobile menu toggle
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

/* ==========================================================================
   2. EXTENSIBLE GALLERY & LIGHTBOX
   ========================================================================== */
let currentCategory = 'all';
let currentLightboxIndex = 0;
let filteredItems = [];

function initGallery() {
  const galleryGrid = document.getElementById('gallery-grid');
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');

  if (!galleryGrid || typeof GALLERY_ITEMS === 'undefined') return;

  renderGallery(currentCategory);

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-emerald-800', 'text-white');
        b.classList.add('bg-slate-100', 'text-slate-700', 'hover:bg-slate-200');
      });

      btn.classList.add('bg-emerald-800', 'text-white');
      btn.classList.remove('bg-slate-100', 'text-slate-700', 'hover:bg-slate-200');

      currentCategory = btn.getAttribute('data-filter') || 'all';
      renderGallery(currentCategory);
    });
  });

  initLightbox();
}

function renderGallery(category) {
  const galleryGrid = document.getElementById('gallery-grid');
  if (!galleryGrid) return;

  filteredItems = category === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === category);

  if (filteredItems.length === 0) {
    galleryGrid.innerHTML = `
      <div class="col-span-full text-center py-12 text-slate-500">
        <p class="text-lg">No photos found under this category yet.</p>
      </div>
    `;
    return;
  }

  galleryGrid.innerHTML = filteredItems.map((item, index) => `
    <div class="gallery-card group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 cursor-pointer flex flex-col"
         data-index="${index}" onclick="openLightbox(${index})">
      <div class="gallery-img-container relative h-64 overflow-hidden bg-slate-100">
        <img src="${item.src}" alt="${item.title}" class="w-full h-full object-cover object-center" loading="lazy" />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span class="inline-flex items-center gap-1 text-white text-sm font-medium bg-emerald-700/90 backdrop-blur-sm px-3 py-1 rounded-full">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
            Click to expand
          </span>
        </div>
        <span class="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-emerald-900 text-xs font-semibold px-2.5 py-1 rounded-md shadow-sm">
          ${item.categoryLabel || item.category}
        </span>
      </div>
      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between text-xs text-slate-500 mb-2">
            <span>${item.date || 'Movement Event'}</span>
          </div>
          <h4 class="font-bold text-slate-800 text-base leading-snug group-hover:text-emerald-800 transition-colors">
            ${item.title}
          </h4>
          <p class="text-sm text-slate-600 mt-2 line-clamp-2">
            ${item.caption}
          </p>
        </div>
      </div>
    </div>
  `).join('');
}

function initLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  if (!modal) return;

  closeBtn?.addEventListener('click', closeLightbox);
  prevBtn?.addEventListener('click', prevLightbox);
  nextBtn?.addEventListener('click', nextLightbox);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (modal.classList.contains('hidden')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevLightbox();
    if (e.key === 'ArrowRight') nextLightbox();
  });
}

window.openLightbox = function(index) {
  const modal = document.getElementById('lightbox-modal');
  if (!modal || !filteredItems[index]) return;

  currentLightboxIndex = index;
  updateLightboxContent();
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
};

function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
}

function prevLightbox() {
  if (filteredItems.length === 0) return;
  currentLightboxIndex = (currentLightboxIndex - 1 + filteredItems.length) % filteredItems.length;
  updateLightboxContent();
}

function nextLightbox() {
  if (filteredItems.length === 0) return;
  currentLightboxIndex = (currentLightboxIndex + 1) % filteredItems.length;
  updateLightboxContent();
}

function updateLightboxContent() {
  const item = filteredItems[currentLightboxIndex];
  if (!item) return;

  const img = document.getElementById('lightbox-img');
  const title = document.getElementById('lightbox-title');
  const caption = document.getElementById('lightbox-caption');
  const category = document.getElementById('lightbox-category');
  const counter = document.getElementById('lightbox-counter');

  if (img) img.src = item.src;
  if (title) title.textContent = item.title;
  if (caption) caption.textContent = item.caption;
  if (category) category.textContent = item.categoryLabel || item.category;
  if (counter) counter.textContent = `${currentLightboxIndex + 1} of ${filteredItems.length}`;
}

/* ==========================================================================
   3. CERTIFICATE MODAL
   ========================================================================== */
function initCertificateModal() {
  const certModal = document.getElementById('cert-modal');
  const openCertBtns = document.querySelectorAll('.open-cert-modal');
  const closeCertBtn = document.getElementById('cert-modal-close');

  if (!certModal) return;

  openCertBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      certModal.classList.remove('hidden');
      certModal.classList.add('flex');
      document.body.style.overflow = 'hidden';
    });
  });

  closeCertBtn?.addEventListener('click', () => {
    certModal.classList.add('hidden');
    certModal.classList.remove('flex');
    document.body.style.overflow = '';
  });

  certModal.addEventListener('click', (e) => {
    if (e.target === certModal) {
      certModal.classList.add('hidden');
      certModal.classList.remove('flex');
      document.body.style.overflow = '';
    }
  });
}

/* ==========================================================================
   4. MEMBERSHIP & CONTACT FORM (WHATSAPP DISPATCH)
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('inquiry-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fullName = document.getElementById('form-name')?.value || '';
    const phone = document.getElementById('form-phone')?.value || '';
    const interest = document.getElementById('form-interest')?.value || 'General Membership';
    const message = document.getElementById('form-message')?.value || '';

    const text = `Hello Amida Noble Women Initiative,\n\nMy name is *${fullName}* (Phone: ${phone}).\nI am interested in: *${interest}*.\n\nMessage/Inquiry: ${message}`;
    
    // Convener WhatsApp phone: +2348034100434
    const whatsappUrl = `https://wa.me/2348034100434?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  });
}

/* ==========================================================================
   5. COPYRIGHT YEAR
   ========================================================================== */
function initCopyrightYear() {
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}
