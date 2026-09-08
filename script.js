/**
 * Video Editing & Animation Portfolio - Interactive Engine
 * Portfolio of Shreshttha Goel
 */

// ==========================================================================
// Project Data & Case Studies
// ==========================================================================
const DRIVE_ARCHIVE_URL = 'https://drive.google.com/drive/u/1/folders/1Zr5mNo9_dqPJ4Ok-o-em3oodoKjJ1eJK';

const projectsData = {
  'showreel': {
    title: 'Featured Portfolio Reel & Video Highlights',
    category: 'Featured Showreel',
    videoType: 'drive',
    videoSrc: DRIVE_ARCHIVE_URL,
    driveUrl: DRIVE_ARCHIVE_URL,
    tools: ['DaVinci Resolve', 'Premiere Pro', 'Animation', 'AI Tools', 'Sound Design'],
    objective: 'A concise showcase highlighting commercial brand spots, wildlife documentary pacing, social AI reels, and keyframed animations.',
    approach: 'Balances client campaigns (Zentilo, Trivyom) with self-directed animation studies and YouTube documentary storytelling. Frame-accurate cuts, seamless audio sync, and intentional rhythm across every frame.'
  },
  'zentilo': {
    title: 'LOGO LAUNCH FILM — ZENTILO (Prefabrication Construction)',
    category: 'Commercial & Brand',
    videoType: 'drive',
    videoSrc: DRIVE_ARCHIVE_URL,
    driveUrl: DRIVE_ARCHIVE_URL,
    tools: ['DaVinci Resolve', 'Premiere Pro', 'Photoshop', 'Sound Design'],
    objective: 'A high-impact logo launch spot cut for Zentilo, a modern prefabrication construction company. Crafted to project structural precision, technological innovation, and architectural quality.',
    approach: 'Constructed an intentional visual rhythm mimicking industrial assembly. Combined sharp metallic sound impacts, fluid velocity transitions, deep architectural contrast grading in DaVinci Resolve, and bold typography to make the brand feel powerful and established.'
  },
  'trivyom': {
    title: 'TRIVYOM — Commercial Instagram Reels & Advertisements',
    category: 'Commercial & Vertical Ads',
    videoType: 'drive',
    videoSrc: DRIVE_ARCHIVE_URL,
    driveUrl: DRIVE_ARCHIVE_URL,
    tools: ['Premiere Pro', 'Canva', 'Figma', 'AI Video', 'Content Creation'],
    objective: 'Create high-converting, attention-commanding Instagram advertisements and commercial reels for TRIVYOM to drive brand awareness and engagement.',
    approach: 'Engineered high-retention hooks within the first 1.5 seconds, snappy B-roll cuts, custom styled dynamic subtitles, and AI-assisted visual ideation to ensure the video punches through busy social feeds.'
  },
  'wildlife': {
    title: 'WILDLIFE ENTHUSIAST — YouTube Documentary Series',
    category: 'YouTube & Documentary',
    videoType: 'drive',
    videoSrc: DRIVE_ARCHIVE_URL,
    driveUrl: DRIVE_ARCHIVE_URL,
    tools: ['DaVinci Resolve', 'Premiere Pro', 'Color Grading', 'Foley Audio'],
    objective: 'A series of atmospheric YouTube videos celebrating wildlife and the wonders of the natural world, crafted to educate and mesmerize viewers.',
    approach: 'Emphasized narrative pacing and natural audio immersion. Layered ambient forest beds and animal calls, guided the viewer through gradual emotional builds, and applied rich color grading in DaVinci Resolve to bring out foliage depth and sunlight.'
  },
  'ai-reels': {
    title: 'AI MASTERY & GENERATIVE REELS — Personal Showcase',
    category: 'AI & Social Innovation',
    videoType: 'drive',
    videoSrc: DRIVE_ARCHIVE_URL,
    driveUrl: DRIVE_ARCHIVE_URL,
    tools: ['AI Video Generation', 'AI Mastery Certified', 'Premiere Pro', 'Photoshop'],
    objective: 'Explore cutting-edge AI generative video workflows and futuristic motion aesthetics to produce viral short-form content for personal Instagram reels.',
    approach: 'Implemented advanced concepts from certified AI Mastery training: generative video prompt craft, image-to-video consistency, voice synthesis, kinetic captions, and seamless looping algorithms.'
  },
  'red-ball': {
    title: 'ANIMATION: FIRST PROJECT — Red Ball Motion Study',
    category: '2D Animation & Physics',
    videoType: 'drive',
    videoSrc: DRIVE_ARCHIVE_URL,
    driveUrl: DRIVE_ARCHIVE_URL,
    tools: ['Animation', 'Timing Curves', 'Premiere Pro', 'Photoshop'],
    objective: 'First foundational animation study depicting a red ball navigating and bouncing across the screen, inspired by the mechanics and energy of the iconic red dot game.',
    approach: 'Executed the core principles of animation: squash and stretch upon impact, anticipation before jumping, smooth ease-in/ease-out speed graphs, and kinetic momentum to give weight, elasticity, and personality to a simple shape.'
  },
  'personal-animation': {
    title: 'ANIMATION LAB — Personal Work & Motion Studies',
    category: 'Creative Animation',
    videoType: 'drive',
    videoSrc: DRIVE_ARCHIVE_URL,
    driveUrl: DRIVE_ARCHIVE_URL,
    tools: ['Animation', 'Figma', 'Photoshop', 'Premiere Pro', 'Creative Rhythm'],
    objective: 'A curated collection of 2-3 self-directed animation clips experimenting with visual rhythm, shape morphing, and fluid character/motion flow.',
    approach: 'Iterated through frame timing, custom bezier velocity curves, and sound design layers to explore unique motion signatures and refine personal animation sensibilities.'
  }
};

// ==========================================================================
// Modal Player Management
// ==========================================================================
const videoModal = document.getElementById('videoModal');
const modalPlayerContainer = document.getElementById('modalPlayerContainer');
const modalTitle = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const modalTools = document.getElementById('modalTools');
const modalObjective = document.getElementById('modalObjective');
const modalApproach = document.getElementById('modalApproach');

function openShowreelModal() {
  openProjectModal('showreel');
}

function openProjectModal(projectId) {
  const data = projectsData[projectId];
  if (!data) return;

  // Populate info
  modalTitle.textContent = data.title;
  modalCategory.textContent = data.category;
  modalObjective.textContent = data.objective;
  modalApproach.textContent = data.approach;

  // Populate tools
  modalTools.innerHTML = '';
  data.tools.forEach(tool => {
    const badge = document.createElement('span');
    badge.className = 'tag';
    badge.textContent = tool;
    modalTools.appendChild(badge);
  });

  // Inject Player or Google Drive Access Card
  if (data.videoType === 'drive') {
    modalPlayerContainer.innerHTML = `
      <div style="width:100%; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; background: radial-gradient(circle, #1e1b4b 0%, #090d16 100%); text-align:center; padding: 30px;">
        <div style="width:64px; height:64px; border-radius:50%; background:rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.2); display:flex; align-items:center; justify-content:center; font-size:2rem; margin-bottom:16px;">
          🎬
        </div>
        <h4 style="font-size:1.3rem; margin-bottom:8px; color:#fff;">Watch Video in High Definition</h4>
        <p style="color:#94a3b8; max-width:480px; font-size:0.92rem; margin-bottom:20px;">
          Source video files, cuts, and exports for this project are hosted on Google Drive in full uncompressed quality.
        </p>
        <a href="${data.driveUrl}" target="_blank" rel="noopener" class="btn btn-primary" style="box-shadow: 0 4px 20px rgba(139, 92, 246, 0.5);">
          <svg style="width:18px; height:18px; margin-right:6px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
          </svg>
          Open Video on Google Drive ↗
        </a>
      </div>
    `;
  } else if (data.videoType === 'embed') {
    modalPlayerContainer.innerHTML = `
      <iframe 
        src="${data.videoSrc}" 
        title="${data.title}" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
      </iframe>
    `;
  } else if (data.videoType === 'html5') {
    modalPlayerContainer.innerHTML = `
      <video controls autoplay playsinline style="width:100%; height:100%;">
        <source src="${data.videoSrc}" type="video/mp4">
        Your browser does not support HTML video.
      </video>
    `;
  }

  // Show modal
  videoModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
  videoModal.classList.remove('active');
  document.body.style.overflow = '';
  setTimeout(() => {
    modalPlayerContainer.innerHTML = '';
  }, 200);
}

function closeModalOnBackdrop(event) {
  if (event.target === videoModal) {
    closeVideoModal();
  }
}

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && videoModal.classList.contains('active')) {
    closeVideoModal();
  }
});

// ==========================================================================
// Category Filtering
// ==========================================================================
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filterValue = btn.getAttribute('data-filter');

    projectCards.forEach(card => {
      const category = card.getAttribute('data-category');
      if (filterValue === 'all' || category === filterValue || category.includes(filterValue)) {
        card.style.display = 'flex';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 10);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(10px)';
        setTimeout(() => {
          card.style.display = 'none';
        }, 200);
      }
    });
  });
});

// ==========================================================================
// Mobile Navigation Toggle
// ==========================================================================
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');

if (mobileToggle && navLinks) {
  mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

// ==========================================================================
// Copy Email & Phone to Clipboard
// ==========================================================================
function copyEmail() {
  const emailText = document.getElementById('emailVal').textContent.trim();
  const tooltip = document.getElementById('copyEmailTooltip');

  navigator.clipboard.writeText(emailText).then(() => {
    tooltip.textContent = 'Copied! ✓';
    tooltip.style.background = '#10b981';

    setTimeout(() => {
      tooltip.textContent = 'Copy';
      tooltip.style.background = 'var(--accent-purple)';
    }, 2000);
  }).catch(() => {
    alert(`Email: ${emailText}`);
  });
}

function copyPhone() {
  const phoneText = document.getElementById('phoneVal').textContent.trim();
  const tooltip = document.getElementById('copyPhoneTooltip');

  navigator.clipboard.writeText(phoneText).then(() => {
    tooltip.textContent = 'Copied! ✓';
    tooltip.style.background = '#10b981';

    setTimeout(() => {
      tooltip.textContent = 'Copy';
      tooltip.style.background = 'var(--accent-purple)';
    }, 2000);
  }).catch(() => {
    alert(`Phone: ${phoneText}`);
  });
}

// ==========================================================================
// Contact Form Submission Handler
// ==========================================================================
function handleFormSubmit(event) {
  event.preventDefault();
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const roleType = document.getElementById('projectType').value;
  const message = document.getElementById('message').value;

  const mailtoLink = `mailto:shreshtthagoel19@gmail.com?subject=${encodeURIComponent(`Project / Role Inquiry from ${name} [${roleType}]`)}&body=${encodeURIComponent(`Hi Shreshttha,\n\n${message}\n\nFrom: ${name} (${email})`)}`;

  feedback.style.display = 'block';
  feedback.style.color = '#34d399';
  feedback.innerHTML = `
    <strong>Thank you, ${name}!</strong> Your message is ready. 
    <a href="${mailtoLink}" style="color:#06b6d4; text-decoration:underline; margin-left:6px;">Click here to send email to shreshtthagoel19@gmail.com</a>.
  `;

  window.location.href = mailtoLink;
  form.reset();
}

// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();
