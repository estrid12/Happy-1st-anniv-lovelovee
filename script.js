/* ════════════════════════════════════════
   CONFIG — Edit these to personalise
════════════════════════════════════════ */
const CONFIG = {
  names: { partner: "My Love", you: "Yours" },
  anniversaryDate: new Date("2025-04-19"),
  password: "041925",
  heroTagline: "Every moment with you is a chapter I never want to end. ",
  letterSalutation: "My Dearest Lovelove,",
  letterClosing: "Forever and always, yours LJ  ♡",
  defaultLetter: `HI loveloveee hope you appriciate this letter i wrote for you sana basahin mo diba AHAHAHAHAHAH, anyways Happy 1st annniversarry loveloveeee. i know weve beeen through so much this year but here we are making memories together making each other happy every single day
  
  you never failed to make me happy every single day kahit madlas kausap ko pader mo, kahit madalas moko inaaway alam mo namang ikaw lang happy pill ko e 
  kahit ganon AHAHAHAHAH 
  
  so far anng wish ko palang is umabot sa super daming anniv tong relasyon natin and sana SANA lang talaga dika mapagod saken love sana di dumating yung time na mapagod kang mhalin ako,
  sana wag dumating yung time na pag gising mo bigla mo nalang marrealized na wala na yung lovee mo for me. we both know how much i loved you and how mucuh i've treasure this relationship we have
  ikaw nalang meron ako na alam kong matatawag kong akin e.
  
  sana pag away, away lang love ha wag moko iiwan. sana pag galit ka, galit lang walang iwanan ha. and sana, sana di pumasok sa isip mo na lokohin at iwan ako love kasi kawawa naman ako AHAHAHAHAHA.
  kidding asside yun sana nga wag love kasi diko kaya. hindi lang dahil nasanay nako sa presensya mo, kundi dahil mahal kita and someday i want to marry you na.
  
  alam mo bang im soscared kada mag aaway tayo kasi baka mamaya pumasok sa isip mo na iwan ako tapos wala na ayun na diko kaya lovelove promise 
  super. nga pala please habaan mopa yung patience mo sakin love matalak lang ako kasi nasasaktan ako minsan pero alam mo namang love na love kita diba more than anything in this world lovelove
  
  nga pala thankyou so much love, thankyou sa pag tanggap sakin ng buo, thankyou sa pag mamahal at pag paparamdam sakin na mahalaga ako, things might have been change as time goes by but this love we have sana di magbago
  sana yung vaare and love mo for me never fades away kawawa naman ako diba. 
  
  last na promise. lovee gusto ko lang malaman mo na andito ko palagi for you hanggat kaya ko ibibigay ko lahat ng deserve mo at lahat ng kaya ko ibigay para lang mapasaya ka, andito lang ako lagi para samahan at supportahan ka sa mga balak mo sa buhay
  sa mga problema mo dika nag iisa meron kang ako lagi. tumalikod man ang mundo sayo meron kang ako na lagi nandyan for you, always remember na andito lang ako through up's and down's lovelove ko mamahalin ka at pipiliin ka kahit sa mga pinaka magulong sitwasyon 
  mahal na mahal kita lovelove ko I LOVE YOU SOOOOO MUCH MORE ANNIIV TO COME PO  `,
};

// ★ TIMELINE PHOTOS — Add an optional "image" property with your filename to show a real photo.
// Example: { image: "firstdate.jpg", date: "March 28", ... }
// If no image is set, the emoji is shown instead.
const TIMELINE = [
  { image: "firstmeet.jpg", date: "May 19",    year: "2025", milestone: "The Day We Met",           caption: "THis was yung day na mag mmeet tayo sa baclaran church na akala ko dimo nako ssiputin kasi youre almost 3 hours late na. alam moba i was planning to go home na that day buti nag trust ako na dadating ka and you came", tag: "First Meeting",  emoji: "✨" },
  { image: "firtdate.jpg", date: "March 19",    year: "2025", milestone: "Our First Date",            caption: "sa sea side yan diba, thats our very first date kasabay ng first meet kasi paldo tayo AHAHAHAHAHAHA. that time i was so thankful na you came kahit late ka that time din kita nakilala ng lubos i see how much you love me not because of what we do but for who i am S", tag: "First Date",     emoji: "☕" },
  { image: "firstgift.jpg", date: "March 19",      year: "2025", milestone: "First Gift from You",            caption: "these things may seems nothing to you ; pero for me it was a priceless things. it may seems small but these thing means so big for me ito yung first gift na bigay mo e.  ", tag: "Milestone",      emoji: "💫" },
   { image: "secgift.jpg", date: "Feburary 14",      year: "2025", milestone: "Second Gift from You",            caption: "i know gumastos kana dito kaya super halaga saken ng bagay na to you gave me this on valenties day. super memorable ng gift nato kasi first valentines together din natin tas wala manlang akong gift kahiya tuloy  ", tag: "GIft",      emoji: "🎁" },
  { image: "firstpic.jpg", date: "June 20", year: "2025", milestone: "First Picture Together",  caption: "eto yung after ano e AHAHAHAHAHAH. we both look super hagard and pagod tas inaya kita to take a pic ; i was hesitant at first kasi nahihya pako ng onti pero ayun it turns out cute naman so ehehheehe", tag: "Special Memory", emoji: "🎄" },
  { image: "firsttrip.jpg", date: "December 8",    year: "2025", milestone: "Our First Trip",            caption: "wala tayong pic neto e yung nag unli wigs tayo to celebrate my bday so yan nalang ha. pauwi kana nyan e you left pero nag iwan ka ng iwsang super sayang memory for my heart to remember hopefully more  lamon and trips with you mylove", tag: "Adventure",      emoji: "🗺️" },
  { image: "photo.jpg", date: "Feburary 14",       year: "2025", milestone: "A Year Together",     caption: "this photo was the last photo i see e bago tayo mag anniv kaya yan nilagay ko. second time na inaya kita to take a pic inaya na kita baka sabihin mo kinakahiya kita e ", tag: "Anniversary",    emoji: "♡" },
];

// ★ GALLERY PHOTOS — For each item, add an optional "image" property with your filename.
// Example: { image: "beach.jpg", emoji: "🌊", label: "...", caption: "..." }
// Place your image files in the same folder as index.html.
// If no image is set, the emoji is shown as a placeholder.
const GALLERY = [
  { image: "",    emoji: "🌅", label: "Our first sunrise together", caption: "The morning we realised we were inseparable" },
  { image: "",    emoji: "🌊", label: "That beach trip",            caption: "Salt, sand, and the best kind of chaos" },
  { image: "",    emoji: "🎂", label: "Birthday surprise",          caption: "You cried. I pretended not to notice. I cried too." },
  { image: "",    emoji: "🏔️", label: "Mountain escape",            caption: "Cold air, warm hearts, perfect views" },
  { image: "",    emoji: "🍕", label: "Pizza nights",               caption: "The simplest evenings are often the best ones" },
  { image: "",    emoji: "🎆", label: "New Year's Eve",             caption: "You, midnight, and a whole year waiting" },
  { image: "",    emoji: "🌸", label: "Spring walk",                caption: "Blossom everywhere, even in your smile" },
  { image: "",    emoji: "🎬", label: "Movie marathon",             caption: "You picked every film. I didn't mind." },
];

const QUIZ = [
  { q: "Where did we go on our first meet?", opts: ["Bahay nyo","Sogo","Baclaran","Moa"], correct: 2, feedback: { right: "Baclaran ang first meet haaaaaaaa", wrong: "it was baclaran tskkkkkkk yun yung you looked so nervous and adorable pa that time" } },
  { q: "Where did we go on our first lamon together?", opts: ["Jabili","MCDO","Wingzilla","SOGO"], correct: 0, feedback: { right: "Tama ah bembang ka saken♡", wrong: "Jabili yun yung sa baclarannnnn" } },
  { q: "What is my favourite thing about you?", opts: ["Your kuko","Yung putotoy","Your laugh","Everything"], correct: 3, feedback: { right: "Kala mo putoy lang nohhhh di ah♡", wrong: "Lahat naman gusto ko sayo yahhhh" } },
  { q: "Kelan first bemabangan nga daw kung tanda????? AHAHAHAHAHAH ", opts: ["May 19","March 19","June 20","December 8"], correct: 2, feedback: { right: "aba aba tanda nya galing AHAHAHAHAHAH♡", wrong: "Dimo tandaaaa????!!! june 20 yun yung second punta ko jan second monthsarry sowssssssssssss" } },
];

/* ─── PAGE SWITCHING ─── */
function showPage(id, btn) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
  const page = document.getElementById(id);
  page.classList.remove('active');
  void page.offsetWidth; // force reflow for animation replay
  page.classList.add('active');
  btn.classList.add('active');

  // Reset envelope when leaving or re-entering letter page
  if (id === 'page-letter') {
    resetEnvelope();
  }
}

/* ─── INIT ─── */
document.addEventListener('DOMContentLoaded', () => {
  initHero();
  initFloatingHearts();
  initCursorHeart();
  initTimeline();
  initLetter();
  initNotes();
  initQuiz();
  initCountdown();
});

window.addEventListener('load', () => {
  const audio = document.getElementById('bgMusic');
  audio.volume = 0.5;
  audio.play().catch(() => {
    document.body.addEventListener('click', function startMusic() {
      audio.play();
      document.body.removeEventListener('click', startMusic);
    }, { once: true });
  });
});

/* ─── HERO TYPEWRITER ─── */
function initHero() {
  const el = document.getElementById('heroTagline');
  const text = CONFIG.heroTagline;
  let i = 0;
  function type() {
    if (i <= text.length) { el.textContent = text.slice(0, i); i++; setTimeout(type, 28); }
  }
  setTimeout(type, 1600);
}

/* ─── COUNTDOWN ─── */
function initCountdown() {
  function update() {
    const now = new Date();
    const start = new Date(CONFIG.anniversaryDate);
    const diff = now - start;
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    document.getElementById('cdDays').textContent  = String(d).padStart(2,'0');
    document.getElementById('cdHours').textContent = String(h).padStart(2,'0');
    document.getElementById('cdMins').textContent  = String(m).padStart(2,'0');
    document.getElementById('cdSecs').textContent  = String(s).padStart(2,'0');
  }
  update(); setInterval(update, 1000);
}


/* ─── FLOATING HEARTS ─── */
function initFloatingHearts() {
  const container = document.getElementById('heartsBg');
  const symbols = ['♡','♥','❤','✿','✾'];
  for (let i = 0; i < 18; i++) {
    const h = document.createElement('div');
    h.className = 'heart-float';
    h.textContent = symbols[Math.floor(Math.random()*symbols.length)];
    h.style.left = Math.random()*100 + '%';
    h.style.fontSize = (10 + Math.random()*14) + 'px';
    h.style.animationDuration = (14 + Math.random()*16) + 's';
    h.style.animationDelay = -(Math.random()*20) + 's';
    h.style.opacity = .1 + Math.random()*.25;
    container.appendChild(h);
  }
}

/* ─── CURSOR HEART ─── */
function initCursorHeart() {
  const c = document.getElementById('cursorHeart');
  document.addEventListener('mousemove', e => {
    c.style.left = e.clientX + 'px';
    c.style.top  = e.clientY + 'px';
    c.style.opacity = '1';
  });
}

/* ─── TIMELINE ─── */
function initTimeline() {
  const wrapper = document.getElementById('timelineWrapper');
  TIMELINE.forEach(item => {
    const photoSlot = item.image
      ? `<div class="timeline-photo"><img src="${item.image}" alt="${item.milestone}"></div>`
      : `<div class="timeline-photo"><div class="timeline-photo-placeholder">${item.emoji}</div></div>`;
    wrapper.innerHTML += `
      <div class="timeline-item">
        <div class="timeline-date-block">
          <span class="timeline-date">${item.date}</span>
          <span class="timeline-year">${item.year}</span>
          ${photoSlot}
        </div>
        <div class="timeline-content-block">
          <h3 class="timeline-milestone">${item.milestone}</h3>
          <p class="timeline-caption">${item.caption}</p>
          <span class="timeline-tag">${item.tag}</span>
        </div>
      </div>`;
  });
}

/* ─── LOVE LETTER / ENVELOPE ─── */
let letterContent = CONFIG.defaultLetter;

function initLetter() {
  document.getElementById('letterSalutation').textContent = CONFIG.letterSalutation;
  document.getElementById('letterClosing').textContent = CONFIG.letterClosing;
}

function resetEnvelope() {
  const env = document.getElementById('envelope');
  const reveal = document.getElementById('letterReveal');
  const scene = document.getElementById('envelopeScene');
  env.classList.remove('open', 'opening');
  reveal.classList.remove('open');
  scene.style.display = 'flex';
}

function openEnvelope() {
  const env = document.getElementById('envelope');
  const reveal = document.getElementById('letterReveal');
  const scene = document.getElementById('envelopeScene');
  if (env.classList.contains('open')) return;

  env.classList.add('opening');
  env.classList.add('open');

  // After flap animates, hide envelope and show letter
  setTimeout(() => {
    scene.style.display = 'none';
    reveal.classList.add('open');
    typewriteLetter();
  }, 700);
}

function typewriteLetter() {
  const el = document.getElementById('letterText');
  const cursor = '<span class="letter-cursor"></span>';
  let i = 0;
  el.innerHTML = cursor;
  function type() {
    if (i <= letterContent.length) {
      el.innerHTML = letterContent.slice(0, i).replace(/\n/g,'<br>') + cursor;
      i++;
      setTimeout(type, i < 10 ? 80 : 18);
    } else {
      el.innerHTML = letterContent.replace(/\n/g,'<br>');
    }
  }
  type();
}
function openLetterModal() {
  document.getElementById('letterEditArea').value = letterContent;
  document.getElementById('letterModal').classList.add('open');
}
function closeLetterModal() { document.getElementById('letterModal').classList.remove('open'); }
function saveLetter() {
  letterContent = document.getElementById('letterEditArea').value;
  closeLetterModal();
  document.getElementById('letterText').innerHTML = letterContent.replace(/\n/g,'<br>');
}

/* ─── LOVE NOTES WALL ─── */
const NOTE_COLOURS = ['note-yellow','note-pink','note-peach','note-mint','note-lavender','note-blue'];
const NOTE_TILTS   = ['rotate(-3deg)','rotate(2deg)','rotate(-1.5deg)','rotate(3.5deg)','rotate(-2.5deg)','rotate(1deg)','rotate(4deg)','rotate(-4deg)'];
const DEFAULT_NOTES = [
  { text: "The way you laugh at your own jokes before you even finish them — I live for it.", from: "LJ" },
  { text: "You make every ordinary Tuesday feel like a holiday.", from: "LJ" },
  { text: "I love how you always save me the last bite.", from: "LJ" },
  { text: "Falling asleep next to you is my favourite part of every day kahit vc lang soon sa kama na yan .", from: "LJ" },
  { text: "You are my home, wherever we are.", from: "LJ" },
  { text: "I'd choose you in every life, every time, without hesitation.", from: "LJ" },
];

let userNotes = JSON.parse(localStorage.getItem('lovestory_userNotes') || '[]');
let deletedDefaultIndexes = new Set(JSON.parse(localStorage.getItem('lovestory_deletedNotes') || '[]'));

function saveNotesToStorage() {
  localStorage.setItem('lovestory_userNotes', JSON.stringify(userNotes));
  localStorage.setItem('lovestory_deletedNotes', JSON.stringify([...deletedDefaultIndexes]));
}

function initNotes() {
  const wall = document.getElementById('notesWall');
  wall.innerHTML = '';
  const defaultNotes = DEFAULT_NOTES.map((n, i) => ({ ...n, _type: 'default', _idx: i }));
  const added = userNotes.map((n, i) => ({ ...n, _type: 'user', _idx: i }));
  const allNotes = [...defaultNotes.filter(n => !deletedDefaultIndexes.has(n._idx)), ...added];
  allNotes.forEach((note, i) => {
    const colour = NOTE_COLOURS[i % NOTE_COLOURS.length];
    const tilt   = NOTE_TILTS[i % NOTE_TILTS.length];
    const delay  = (i * 0.08).toFixed(2);
    const div = document.createElement('div');
    div.className = `note-card ${colour}`;
    div.style.cssText = `--tilt:${tilt}; transform:${tilt}; animation-delay:${delay}s;`;
    div.dataset.type = note._type;
    div.dataset.idx  = note._idx;
    div.innerHTML = `
      <div class="note-pin"></div>
      <button class="note-delete-btn" onclick="deleteNote(this)" title="Remove note">✕</button>
      <p class="note-text">${note.text}</p>
      <p class="note-from">— ${note.from || 'Me'}</p>
      <span class="note-heart">♡</span>`;
    wall.appendChild(div);
  });
}

function deleteNote(btn) {
  const card = btn.closest('.note-card');
  const type = card.dataset.type;
  const idx  = parseInt(card.dataset.idx, 10);
  // Animate out
  card.style.transition = 'transform .3s ease, opacity .3s ease';
  card.style.transform  = `${card.style.getPropertyValue('--tilt') || 'rotate(0deg)'} scale(0.7)`;
  card.style.opacity    = '0';
  setTimeout(() => {
    if (type === 'default') {
      deletedDefaultIndexes.add(idx);
    } else {
      userNotes.splice(idx, 1);
    }
    saveNotesToStorage();
    initNotes();
  }, 300);
}

function openNoteModal() {
  document.getElementById('noteAuthor').value = '';
  document.getElementById('noteText').value = '';
  document.getElementById('noteModal').classList.add('open');
}
function closeNoteModal() {
  document.getElementById('noteModal').classList.remove('open');
}
function saveNote() {
  const text = document.getElementById('noteText').value.trim();
  const from = document.getElementById('noteAuthor').value.trim() || 'Me';
  if (!text) return;
  userNotes.push({ text, from });
  saveNotesToStorage();
  closeNoteModal();
  initNotes();
}

/* ─── QUIZ ─── */
let quizScore = 0, quizAnswered = 0;
function initQuiz() {
  const wrapper = document.getElementById('quizWrapper');
  QUIZ.forEach((q, qi) => {
    const card = document.createElement('div');
    card.className = 'quiz-card';
    card.innerHTML = `
      <p class="quiz-question">${qi+1}. ${q.q}</p>
      <div class="quiz-options">
        ${q.opts.map((o,oi)=>`<button class="quiz-option" onclick="answerQuiz(this,${qi},${oi})">${o}</button>`).join('')}
      </div>
      <div class="quiz-feedback" id="qf${qi}"></div>`;
    wrapper.appendChild(card);
  });
}
function answerQuiz(btn, qi, chosen) {
  const card = btn.closest('.quiz-card');
  const opts = card.querySelectorAll('.quiz-option');
  const fb = document.getElementById('qf'+qi);
  const q = QUIZ[qi];
  opts.forEach(o => o.classList.add('disabled'));
  if (chosen === q.correct) {
    btn.classList.add('correct');
    fb.textContent = '✓ ' + q.feedback.right;
    fb.className = 'quiz-feedback show good';
    quizScore++;
  } else {
    btn.classList.add('wrong');
    opts[q.correct].classList.add('correct');
    fb.textContent = '✗ ' + q.feedback.wrong;
    fb.className = 'quiz-feedback show bad';
  }
  quizAnswered++;
  if (quizAnswered === QUIZ.length) {
    const pct = Math.round(quizScore/QUIZ.length*100);
    const msgs = ['Getting there, my love!','Not bad for someone so adorable!','You know us well! 💛','You know me better than I know myself ♡'];
    const msg = pct===100 ? msgs[3] : pct>=75 ? msgs[2] : pct>=50 ? msgs[1] : msgs[0];
    document.getElementById('quizScoreDisplay').innerHTML =
      `You scored <span>${quizScore}/${QUIZ.length}</span> — ${msg}`;
  }
}

/* ─── SURPRISE ─── */
function checkPassword() {
  const input = document.getElementById('passwordInput');
  if (input.value.trim().toLowerCase() === CONFIG.password.toLowerCase()) {
    document.getElementById('surpriseLock').style.display = 'none';
    document.getElementById('surpriseReveal').classList.add('open');
    launchConfetti();
  } else {
    input.classList.add('error');
    setTimeout(() => input.classList.remove('error'), 500);
  }
}
function launchConfetti() {
  const colours = ['♡','✿','✾','★','♥'];
  for (let i = 0; i < 30; i++) {
    const el = document.createElement('div');
    el.textContent = colours[Math.floor(Math.random()*colours.length)];
    el.style.cssText = `position:fixed;left:${Math.random()*100}vw;top:${Math.random()*60}vh;font-size:${1+Math.random()*1.5}rem;color:hsl(${340+Math.random()*40},70%,${55+Math.random()*20}%);pointer-events:none;z-index:400;animation:floatUp ${2+Math.random()*3}s ease forwards;opacity:0.8;`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 5000);
  }
}

/* ─── MUSIC ─── */
function toggleMusic() {
  const audio = document.getElementById('bgMusic');
  const btn = document.getElementById('musicToggle');
  if (audio.paused) {
    audio.play();
    btn.classList.add('playing');
  } else {
    audio.pause();
    btn.classList.remove('playing');
  }
}

emailjs.init('mssTGpeMbtKViSxnu');

function answerProposal(yes) {
  document.getElementById('proposalBtns').style.display = 'none';
  const response = document.getElementById('proposalResponse');
  response.style.display = 'block';

  if (yes) {
   response.innerHTML = `
  <div style="text-align:center;padding:1rem;">
    <div style="font-size:2.5rem;margin-bottom:1rem;">💍</div>
    <p style="font-family:'Cormorant Garamond',serif;font-size:1.4rem;color:var(--deep-rose);font-style:italic;margin-bottom:.5rem;">
      Yes?! TALAGA?! YEYYYYYYYYYY
    </p>
    <p style="font-family:'Jost',sans-serif;font-size:.9rem;color:var(--text-mid);line-height:1.8;margin-bottom:1.5rem;">
      finally dimo nalang ako gf AHAHAHAHAH fiance na wala ka ng kawala boiii 🤍
    </p>
    <div style="background:var(--petal);border:1px solid var(--gold-light);border-radius:20px;padding:1.5rem;max-width:380px;margin:0 auto;">
      <p style="font-family:'Dancing Script',cursive;font-size:1rem;color:var(--text-mid);margin-bottom:1rem;">
        💌 Enter your email and I'll send you something special ♡
      </p>
      <div style="display:flex;flex-direction:column;gap:.6rem;align-items:center;">
        <input type="email" id="hisEmailInput" placeholder="your email address ♡" 
          style="padding:.7rem 1.4rem;border:1.5px solid var(--gold-light);border-radius:30px;
          font-size:.9rem;font-family:'Jost',sans-serif;color:var(--text-dark);
          outline:none;width:100%;text-align:center;background:white;">
        <button onclick="sendToHisEmail()" 
          style="padding:.7rem 2rem;background:var(--deep-rose);color:white;border:none;
          border-radius:30px;font-family:'Jost',sans-serif;font-size:.8rem;
          letter-spacing:.1em;cursor:pointer;width:100%;">
          Send 💌
        </button>
      </div>
      <p id="emailSentMsg" style="display:none;margin-top:1rem;font-family:'Dancing Script',cursive;
      font-size:1.1rem;color:var(--deep-rose);">
        Sent! Check your email my love 💍🤍
      </p>
    </div>
  </div>`;
response.style.color = 'var(--deep-rose)';
launchConfetti();

    emailjs.send('service_43eoeyx', 'template_ufpmeri', {
      answer: 'YES 💍',
      message: 'He said YES to the proposal! 💍🎉 Time to plan the wedding! Forever starts now!',
      to_email: 'angcayalharrahjhade@gmail.com,tiktokeristsanaol@gmail.com',
      certificate_link: 'https://estrid12.github.io/Happy-1st-anniv-lovelovee/certificate.html'
    }).then(() => {
      console.log('Email sent!');
    }).catch((err) => {
      console.error('Email error:', err);
    });

  } else {
    response.innerHTML = `Okay lang… 😢 Hihintayin kita. Lagi akong nandito. ♡`;
    response.style.color = 'var(--text-soft)';
    rainSadEmojis();

    emailjs.send('service_43eoeyx', 'template_ufpmeri', {
      answer: 'No 😢',
      message: 'He clicked No on the proposal… he does not agree yet. 💔 But I will wait for you.',
      to_email: 'angcayalharrahjhade@gmail.com,Jdael1738@gmail.com',
      certificate_link: 'https://estrid12.github.io/Happy-1st-anniv-lovelovee/certificate.html'
    }).then(() => {
      console.log('Email sent!');
    }).catch((err) => {
      console.error('Email error:', err);
    });
  }
}

function sendToHisEmail() {
  const hisEmail = document.getElementById('hisEmailInput').value.trim();
  if (!hisEmail) {
    document.getElementById('hisEmailInput').style.borderColor = 'var(--deep-rose)';
    return;
  }

  emailjs.send('service_43eoeyx', 'template_ufpmeri', {
    answer: 'YES 💍',
    message: 'He said YES to the proposal! 💍🎉 Time to plan the wedding! Forever starts now!',
    to_email: hisEmail + ',angcayalharrahjhade@gmail.com',
    certificate_link: 'https://estrid12.github.io/Happy-1st-anniv-lovelovee/certificate.html'
  }).then(() => {
    document.getElementById('hisEmailInput').style.display = 'none';
    document.querySelector('button[onclick="sendToHisEmail()"]').style.display = 'none';
    document.getElementById('emailSentMsg').style.display = 'block';
    launchConfetti();
  }).catch((err) => {
    console.error('Email error:', err);
  });
}/* ════════════════════════════════════════
   CONFIG — Edit these to personalise
════════════════════════════════════════ */
const CONFIG = {
  names: { partner: "My Love", you: "Yours" },
  anniversaryDate: new Date("2025-04-19"),
  password: "041925",
  heroTagline: "Every moment with you is a chapter I never want to end. ",
  letterSalutation: "My Dearest Lovelove,",
  letterClosing: "Forever and always, yours LJ  ♡",
  defaultLetter: `HI loveloveee hope you appriciate this letter i wrote for you sana basahin mo diba AHAHAHAHAHAH, anyways Happy 1st annniversarry loveloveeee. i know weve beeen through so much this year but here we are making memories together making each other happy every single day
  
  you never failed to make me happy every single day kahit madlas kausap ko pader mo, kahit madalas moko inaaway alam mo namang ikaw lang happy pill ko e 
  kahit ganon AHAHAHAHAH 
  
  so far anng wish ko palang is umabot sa super daming anniv tong relasyon natin and sana SANA lang talaga dika mapagod saken love sana di dumating yung time na mapagod kang mhalin ako,
  sana wag dumating yung time na pag gising mo bigla mo nalang marrealized na wala na yung lovee mo for me. we both know how much i loved you and how mucuh i've treasure this relationship we have
  ikaw nalang meron ako na alam kong matatawag kong akin e.
  
  sana pag away, away lang love ha wag moko iiwan. sana pag galit ka, galit lang walang iwanan ha. and sana, sana di pumasok sa isip mo na lokohin at iwan ako love kasi kawawa naman ako AHAHAHAHAHA.
  kidding asside yun sana nga wag love kasi diko kaya. hindi lang dahil nasanay nako sa presensya mo, kundi dahil mahal kita and someday i want to marry you na.
  
  alam mo bang im soscared kada mag aaway tayo kasi baka mamaya pumasok sa isip mo na iwan ako tapos wala na ayun na diko kaya lovelove promise 
  super. nga pala please habaan mopa yung patience mo sakin love matalak lang ako kasi nasasaktan ako minsan pero alam mo namang love na love kita diba more than anything in this world lovelove
  
  nga pala thankyou so much love, thankyou sa pag tanggap sakin ng buo, thankyou sa pag mamahal at pag paparamdam sakin na mahalaga ako, things might have been change as time goes by but this love we have sana di magbago
  sana yung vaare and love mo for me never fades away kawawa naman ako diba. 
  
  last na promise. lovee gusto ko lang malaman mo na andito ko palagi for you hanggat kaya ko ibibigay ko lahat ng deserve mo at lahat ng kaya ko ibigay para lang mapasaya ka, andito lang ako lagi para samahan at supportahan ka sa mga balak mo sa buhay
  sa mga problema mo dika nag iisa meron kang ako lagi. tumalikod man ang mundo sayo meron kang ako na lagi nandyan for you, always remember na andito lang ako through up's and down's lovelove ko mamahalin ka at pipiliin ka kahit sa mga pinaka magulong sitwasyon 
  mahal na mahal kita lovelove ko I LOVE YOU SOOOOO MUCH MORE ANNIIV TO COME PO  `,
};

// ★ TIMELINE PHOTOS — Add an optional "image" property with your filename to show a real photo.
// Example: { image: "firstdate.jpg", date: "March 28", ... }
// If no image is set, the emoji is shown instead.
const TIMELINE = [
  { image: "firstmeet.jpg", date: "May 19",    year: "2025", milestone: "The Day We Met",           caption: "THis was yung day na mag mmeet tayo sa baclaran church na akala ko dimo nako ssiputin kasi youre almost 3 hours late na. alam moba i was planning to go home na that day buti nag trust ako na dadating ka and you came", tag: "First Meeting",  emoji: "✨" },
  { image: "firtdate.jpg", date: "March 19",    year: "2025", milestone: "Our First Date",            caption: "sa sea side yan diba, thats our very first date kasabay ng first meet kasi paldo tayo AHAHAHAHAHAHA. that time i was so thankful na you came kahit late ka that time din kita nakilala ng lubos i see how much you love me not because of what we do but for who i am S", tag: "First Date",     emoji: "☕" },
  { image: "firstgift.jpg", date: "March 19",      year: "2025", milestone: "First Gift from You",            caption: "these things may seems nothing to you ; pero for me it was a priceless things. it may seems small but these thing means so big for me ito yung first gift na bigay mo e.  ", tag: "Milestone",      emoji: "💫" },
   { image: "secgift.jpg", date: "Feburary 14",      year: "2025", milestone: "Second Gift from You",            caption: "i know gumastos kana dito kaya super halaga saken ng bagay na to you gave me this on valenties day. super memorable ng gift nato kasi first valentines together din natin tas wala manlang akong gift kahiya tuloy  ", tag: "GIft",      emoji: "🎁" },
  { image: "firstpic.jpg", date: "June 20", year: "2025", milestone: "First Picture Together",  caption: "eto yung after ano e AHAHAHAHAHAH. we both look super hagard and pagod tas inaya kita to take a pic ; i was hesitant at first kasi nahihya pako ng onti pero ayun it turns out cute naman so ehehheehe", tag: "Special Memory", emoji: "🎄" },
  { image: "firsttrip.jpg", date: "December 8",    year: "2025", milestone: "Our First Trip",            caption: "wala tayong pic neto e yung nag unli wigs tayo to celebrate my bday so yan nalang ha. pauwi kana nyan e you left pero nag iwan ka ng iwsang super sayang memory for my heart to remember hopefully more  lamon and trips with you mylove", tag: "Adventure",      emoji: "🗺️" },
  { image: "photo.jpg", date: "Feburary 14",       year: "2025", milestone: "A Year Together",     caption: "this photo was the last photo i see e bago tayo mag anniv kaya yan nilagay ko. second time na inaya kita to take a pic inaya na kita baka sabihin mo kinakahiya kita e ", tag: "Anniversary",    emoji: "♡" },
];

// ★ GALLERY PHOTOS — For each item, add an optional "image" property with your filename.
// Example: { image: "beach.jpg", emoji: "🌊", label: "...", caption: "..." }
// Place your image files in the same folder as index.html.
// If no image is set, the emoji is shown as a placeholder.
const GALLERY = [
  { image: "",    emoji: "🌅", label: "Our first sunrise together", caption: "The morning we realised we were inseparable" },
  { image: "",    emoji: "🌊", label: "That beach trip",            caption: "Salt, sand, and the best kind of chaos" },
  { image: "",    emoji: "🎂", label: "Birthday surprise",          caption: "You cried. I pretended not to notice. I cried too." },
  { image: "",    emoji: "🏔️", label: "Mountain escape",            caption: "Cold air, warm hearts, perfect views" },
  { image: "",    emoji: "🍕", label: "Pizza nights",               caption: "The simplest evenings are often the best ones" },
  { image: "",    emoji: "🎆", label: "New Year's Eve",             caption: "You, midnight, and a whole year waiting" },
  { image: "",    emoji: "🌸", label: "Spring walk",                caption: "Blossom everywhere, even in your smile" },
  { image: "",    emoji: "🎬", label: "Movie marathon",             caption: "You picked every film. I didn't mind." },
];

const QUIZ = [
  { q: "Where did we go on our first meet?", opts: ["Bahay nyo","Sogo","Baclaran","Moa"], correct: 2, feedback: { right: "Baclaran ang first meet haaaaaaaa", wrong: "it was baclaran tskkkkkkk yun yung you looked so nervous and adorable pa that time" } },
  { q: "Where did we go on our first lamon together?", opts: ["Jabili","MCDO","Wingzilla","SOGO"], correct: 0, feedback: { right: "Tama ah bembang ka saken♡", wrong: "Jabili yun yung sa baclarannnnn" } },
  { q: "What is my favourite thing about you?", opts: ["Your kuko","Yung putotoy","Your laugh","Everything"], correct: 3, feedback: { right: "Kala mo putoy lang nohhhh di ah♡", wrong: "Lahat naman gusto ko sayo yahhhh" } },
  { q: "Kelan first bemabangan nga daw kung tanda????? AHAHAHAHAHAH ", opts: ["May 19","March 19","June 20","December 8"], correct: 2, feedback: { right: "aba aba tanda nya galing AHAHAHAHAHAH♡", wrong: "Dimo tandaaaa????!!! june 20 yun yung second punta ko jan second monthsarry sowssssssssssss" } },
];

/* ─── PAGE SWITCHING ─── */
function showPage(id, btn) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
  const page = document.getElementById(id);
  page.classList.remove('active');
  void page.offsetWidth; // force reflow for animation replay
  page.classList.add('active');
  btn.classList.add('active');

  // Reset envelope when leaving or re-entering letter page
  if (id === 'page-letter') {
    resetEnvelope();
  }
}

/* ─── INIT ─── */
document.addEventListener('DOMContentLoaded', () => {
  initHero();
  initFloatingHearts();
  initCursorHeart();
  initTimeline();
  initLetter();
  initNotes();
  initQuiz();
  initCountdown();
});

window.addEventListener('load', () => {
  const audio = document.getElementById('bgMusic');
  audio.volume = 0.5;
  audio.play().catch(() => {
    document.body.addEventListener('click', function startMusic() {
      audio.play();
      document.body.removeEventListener('click', startMusic);
    }, { once: true });
  });
});

/* ─── HERO TYPEWRITER ─── */
function initHero() {
  const el = document.getElementById('heroTagline');
  const text = CONFIG.heroTagline;
  let i = 0;
  function type() {
    if (i <= text.length) { el.textContent = text.slice(0, i); i++; setTimeout(type, 28); }
  }
  setTimeout(type, 1600);
}

/* ─── COUNTDOWN ─── */
function initCountdown() {
  function update() {
    const now = new Date();
    const start = new Date(CONFIG.anniversaryDate);
    const diff = now - start;
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    document.getElementById('cdDays').textContent  = String(d).padStart(2,'0');
    document.getElementById('cdHours').textContent = String(h).padStart(2,'0');
    document.getElementById('cdMins').textContent  = String(m).padStart(2,'0');
    document.getElementById('cdSecs').textContent  = String(s).padStart(2,'0');
  }
  update(); setInterval(update, 1000);
}


/* ─── FLOATING HEARTS ─── */
function initFloatingHearts() {
  const container = document.getElementById('heartsBg');
  const symbols = ['♡','♥','❤','✿','✾'];
  for (let i = 0; i < 18; i++) {
    const h = document.createElement('div');
    h.className = 'heart-float';
    h.textContent = symbols[Math.floor(Math.random()*symbols.length)];
    h.style.left = Math.random()*100 + '%';
    h.style.fontSize = (10 + Math.random()*14) + 'px';
    h.style.animationDuration = (14 + Math.random()*16) + 's';
    h.style.animationDelay = -(Math.random()*20) + 's';
    h.style.opacity = .1 + Math.random()*.25;
    container.appendChild(h);
  }
}

/* ─── CURSOR HEART ─── */
function initCursorHeart() {
  const c = document.getElementById('cursorHeart');
  document.addEventListener('mousemove', e => {
    c.style.left = e.clientX + 'px';
    c.style.top  = e.clientY + 'px';
    c.style.opacity = '1';
  });
}

/* ─── TIMELINE ─── */
function initTimeline() {
  const wrapper = document.getElementById('timelineWrapper');
  TIMELINE.forEach(item => {
    const photoSlot = item.image
      ? `<div class="timeline-photo"><img src="${item.image}" alt="${item.milestone}"></div>`
      : `<div class="timeline-photo"><div class="timeline-photo-placeholder">${item.emoji}</div></div>`;
    wrapper.innerHTML += `
      <div class="timeline-item">
        <div class="timeline-date-block">
          <span class="timeline-date">${item.date}</span>
          <span class="timeline-year">${item.year}</span>
          ${photoSlot}
        </div>
        <div class="timeline-content-block">
          <h3 class="timeline-milestone">${item.milestone}</h3>
          <p class="timeline-caption">${item.caption}</p>
          <span class="timeline-tag">${item.tag}</span>
        </div>
      </div>`;
  });
}

/* ─── LOVE LETTER / ENVELOPE ─── */
let letterContent = CONFIG.defaultLetter;

function initLetter() {
  document.getElementById('letterSalutation').textContent = CONFIG.letterSalutation;
  document.getElementById('letterClosing').textContent = CONFIG.letterClosing;
}

function resetEnvelope() {
  const env = document.getElementById('envelope');
  const reveal = document.getElementById('letterReveal');
  const scene = document.getElementById('envelopeScene');
  env.classList.remove('open', 'opening');
  reveal.classList.remove('open');
  scene.style.display = 'flex';
}

function openEnvelope() {
  const env = document.getElementById('envelope');
  const reveal = document.getElementById('letterReveal');
  const scene = document.getElementById('envelopeScene');
  if (env.classList.contains('open')) return;

  env.classList.add('opening');
  env.classList.add('open');

  // After flap animates, hide envelope and show letter
  setTimeout(() => {
    scene.style.display = 'none';
    reveal.classList.add('open');
    typewriteLetter();
  }, 700);
}

function typewriteLetter() {
  const el = document.getElementById('letterText');
  const cursor = '<span class="letter-cursor"></span>';
  let i = 0;
  el.innerHTML = cursor;
  function type() {
    if (i <= letterContent.length) {
      el.innerHTML = letterContent.slice(0, i).replace(/\n/g,'<br>') + cursor;
      i++;
      setTimeout(type, i < 10 ? 80 : 18);
    } else {
      el.innerHTML = letterContent.replace(/\n/g,'<br>');
    }
  }
  type();
}
function openLetterModal() {
  document.getElementById('letterEditArea').value = letterContent;
  document.getElementById('letterModal').classList.add('open');
}
function closeLetterModal() { document.getElementById('letterModal').classList.remove('open'); }
function saveLetter() {
  letterContent = document.getElementById('letterEditArea').value;
  closeLetterModal();
  document.getElementById('letterText').innerHTML = letterContent.replace(/\n/g,'<br>');
}

/* ─── LOVE NOTES WALL ─── */
const NOTE_COLOURS = ['note-yellow','note-pink','note-peach','note-mint','note-lavender','note-blue'];
const NOTE_TILTS   = ['rotate(-3deg)','rotate(2deg)','rotate(-1.5deg)','rotate(3.5deg)','rotate(-2.5deg)','rotate(1deg)','rotate(4deg)','rotate(-4deg)'];
const DEFAULT_NOTES = [
  { text: "The way you laugh at your own jokes before you even finish them — I live for it.", from: "LJ" },
  { text: "You make every ordinary Tuesday feel like a holiday.", from: "LJ" },
  { text: "I love how you always save me the last bite.", from: "LJ" },
  { text: "Falling asleep next to you is my favourite part of every day kahit vc lang soon sa kama na yan .", from: "LJ" },
  { text: "You are my home, wherever we are.", from: "LJ" },
  { text: "I'd choose you in every life, every time, without hesitation.", from: "LJ" },
];

let userNotes = JSON.parse(localStorage.getItem('lovestory_userNotes') || '[]');
let deletedDefaultIndexes = new Set(JSON.parse(localStorage.getItem('lovestory_deletedNotes') || '[]'));

function saveNotesToStorage() {
  localStorage.setItem('lovestory_userNotes', JSON.stringify(userNotes));
  localStorage.setItem('lovestory_deletedNotes', JSON.stringify([...deletedDefaultIndexes]));
}

function initNotes() {
  const wall = document.getElementById('notesWall');
  wall.innerHTML = '';
  const defaultNotes = DEFAULT_NOTES.map((n, i) => ({ ...n, _type: 'default', _idx: i }));
  const added = userNotes.map((n, i) => ({ ...n, _type: 'user', _idx: i }));
  const allNotes = [...defaultNotes.filter(n => !deletedDefaultIndexes.has(n._idx)), ...added];
  allNotes.forEach((note, i) => {
    const colour = NOTE_COLOURS[i % NOTE_COLOURS.length];
    const tilt   = NOTE_TILTS[i % NOTE_TILTS.length];
    const delay  = (i * 0.08).toFixed(2);
    const div = document.createElement('div');
    div.className = `note-card ${colour}`;
    div.style.cssText = `--tilt:${tilt}; transform:${tilt}; animation-delay:${delay}s;`;
    div.dataset.type = note._type;
    div.dataset.idx  = note._idx;
    div.innerHTML = `
      <div class="note-pin"></div>
      <button class="note-delete-btn" onclick="deleteNote(this)" title="Remove note">✕</button>
      <p class="note-text">${note.text}</p>
      <p class="note-from">— ${note.from || 'Me'}</p>
      <span class="note-heart">♡</span>`;
    wall.appendChild(div);
  });
}

function deleteNote(btn) {
  const card = btn.closest('.note-card');
  const type = card.dataset.type;
  const idx  = parseInt(card.dataset.idx, 10);
  // Animate out
  card.style.transition = 'transform .3s ease, opacity .3s ease';
  card.style.transform  = `${card.style.getPropertyValue('--tilt') || 'rotate(0deg)'} scale(0.7)`;
  card.style.opacity    = '0';
  setTimeout(() => {
    if (type === 'default') {
      deletedDefaultIndexes.add(idx);
    } else {
      userNotes.splice(idx, 1);
    }
    saveNotesToStorage();
    initNotes();
  }, 300);
}

function openNoteModal() {
  document.getElementById('noteAuthor').value = '';
  document.getElementById('noteText').value = '';
  document.getElementById('noteModal').classList.add('open');
}
function closeNoteModal() {
  document.getElementById('noteModal').classList.remove('open');
}
function saveNote() {
  const text = document.getElementById('noteText').value.trim();
  const from = document.getElementById('noteAuthor').value.trim() || 'Me';
  if (!text) return;
  userNotes.push({ text, from });
  saveNotesToStorage();
  closeNoteModal();
  initNotes();
}

/* ─── QUIZ ─── */
let quizScore = 0, quizAnswered = 0;
function initQuiz() {
  const wrapper = document.getElementById('quizWrapper');
  QUIZ.forEach((q, qi) => {
    const card = document.createElement('div');
    card.className = 'quiz-card';
    card.innerHTML = `
      <p class="quiz-question">${qi+1}. ${q.q}</p>
      <div class="quiz-options">
        ${q.opts.map((o,oi)=>`<button class="quiz-option" onclick="answerQuiz(this,${qi},${oi})">${o}</button>`).join('')}
      </div>
      <div class="quiz-feedback" id="qf${qi}"></div>`;
    wrapper.appendChild(card);
  });
}
function answerQuiz(btn, qi, chosen) {
  const card = btn.closest('.quiz-card');
  const opts = card.querySelectorAll('.quiz-option');
  const fb = document.getElementById('qf'+qi);
  const q = QUIZ[qi];
  opts.forEach(o => o.classList.add('disabled'));
  if (chosen === q.correct) {
    btn.classList.add('correct');
    fb.textContent = '✓ ' + q.feedback.right;
    fb.className = 'quiz-feedback show good';
    quizScore++;
  } else {
    btn.classList.add('wrong');
    opts[q.correct].classList.add('correct');
    fb.textContent = '✗ ' + q.feedback.wrong;
    fb.className = 'quiz-feedback show bad';
  }
  quizAnswered++;
  if (quizAnswered === QUIZ.length) {
    const pct = Math.round(quizScore/QUIZ.length*100);
    const msgs = ['Getting there, my love!','Not bad for someone so adorable!','You know us well! 💛','You know me better than I know myself ♡'];
    const msg = pct===100 ? msgs[3] : pct>=75 ? msgs[2] : pct>=50 ? msgs[1] : msgs[0];
    document.getElementById('quizScoreDisplay').innerHTML =
      `You scored <span>${quizScore}/${QUIZ.length}</span> — ${msg}`;
  }
}

/* ─── SURPRISE ─── */
function checkPassword() {
  const input = document.getElementById('passwordInput');
  if (input.value.trim().toLowerCase() === CONFIG.password.toLowerCase()) {
    document.getElementById('surpriseLock').style.display = 'none';
    document.getElementById('surpriseReveal').classList.add('open');
    launchConfetti();
  } else {
    input.classList.add('error');
    setTimeout(() => input.classList.remove('error'), 500);
  }
}
function launchConfetti() {
  const colours = ['♡','✿','✾','★','♥'];
  for (let i = 0; i < 30; i++) {
    const el = document.createElement('div');
    el.textContent = colours[Math.floor(Math.random()*colours.length)];
    el.style.cssText = `position:fixed;left:${Math.random()*100}vw;top:${Math.random()*60}vh;font-size:${1+Math.random()*1.5}rem;color:hsl(${340+Math.random()*40},70%,${55+Math.random()*20}%);pointer-events:none;z-index:400;animation:floatUp ${2+Math.random()*3}s ease forwards;opacity:0.8;`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 5000);
  }
}

/* ─── MUSIC ─── */
function toggleMusic() {
  const audio = document.getElementById('bgMusic');
  const btn = document.getElementById('musicToggle');
  if (audio.paused) {
    audio.play();
    btn.classList.add('playing');
  } else {
    audio.pause();
    btn.classList.remove('playing');
  }
}

emailjs.init('mssTGpeMbtKViSxnu');

function answerProposal(yes) {
  document.getElementById('proposalBtns').style.display = 'none';
  const response = document.getElementById('proposalResponse');
  response.style.display = 'block';

  if (yes) {
   response.innerHTML = `
  <div style="text-align:center;padding:1rem;">
    <div style="font-size:2.5rem;margin-bottom:1rem;">💍</div>
    <p style="font-family:'Cormorant Garamond',serif;font-size:1.4rem;color:var(--deep-rose);font-style:italic;margin-bottom:.5rem;">
      Yes?! TALAGA?! YEYYYYYYYYYY
    </p>
    <p style="font-family:'Jost',sans-serif;font-size:.9rem;color:var(--text-mid);line-height:1.8;margin-bottom:1.5rem;">
      finally dimo nalang ako gf AHAHAHAHAH fiance na wala ka ng kawala boiii 🤍
    </p>
    <div style="background:var(--petal);border:1px solid var(--gold-light);border-radius:20px;padding:1.5rem;max-width:380px;margin:0 auto;">
      <p style="font-family:'Dancing Script',cursive;font-size:1rem;color:var(--text-mid);margin-bottom:1rem;">
        💌 Enter your email and I'll send you something special ♡
      </p>
      <div style="display:flex;flex-direction:column;gap:.6rem;align-items:center;">
        <input type="email" id="hisEmailInput" placeholder="your email address ♡" 
          style="padding:.7rem 1.4rem;border:1.5px solid var(--gold-light);border-radius:30px;
          font-size:.9rem;font-family:'Jost',sans-serif;color:var(--text-dark);
          outline:none;width:100%;text-align:center;background:white;">
        <button onclick="sendToHisEmail()" 
          style="padding:.7rem 2rem;background:var(--deep-rose);color:white;border:none;
          border-radius:30px;font-family:'Jost',sans-serif;font-size:.8rem;
          letter-spacing:.1em;cursor:pointer;width:100%;">
          Send 💌
        </button>
      </div>
      <p id="emailSentMsg" style="display:none;margin-top:1rem;font-family:'Dancing Script',cursive;
      font-size:1.1rem;color:var(--deep-rose);">
        Sent! Check your email my love 💍🤍
      </p>
    </div>
  </div>`;
response.style.color = 'var(--deep-rose)';
launchConfetti();

    emailjs.send('service_43eoeyx', 'template_ufpmeri', {
      answer: 'YES 💍',
      message: 'He said YES to the proposal! 💍🎉 Time to plan the wedding! Forever starts now!',
      to_email: 'angcayalharrahjhade@gmail.com,tiktokeristsanaol@gmail.com',
      certificate_link: 'https://estrid12.github.io/Happy-1st-anniv-lovelovee/certificate.html'
    }).then(() => {
      console.log('Email sent!');
    }).catch((err) => {
      console.error('Email error:', err);
    });

  } else {
    response.innerHTML = `Okay lang… 😢 Hihintayin kita. Lagi akong nandito. ♡`;
    response.style.color = 'var(--text-soft)';
    rainSadEmojis();

    emailjs.send('service_43eoeyx', 'template_ufpmeri', {
      answer: 'No 😢',
      message: 'He clicked No on the proposal… he does not agree yet. 💔 But I will wait for you.',
      to_email: 'angcayalharrahjhade@gmail.com,tiktokeristsanaol@gmail.com',
      certificate_link: 'https://estrid12.github.io/Happy-1st-anniv-lovelovee/certificate.html'
    }).then(() => {
      console.log('Email sent!');
    }).catch((err) => {
      console.error('Email error:', err);
    });
  }
}

function sendToHisEmail() {
  const hisEmail = document.getElementById('hisEmailInput').value.trim();
  if (!hisEmail) {
    document.getElementById('hisEmailInput').style.borderColor = 'var(--deep-rose)';
    return;
  }

  emailjs.send('service_43eoeyx', 'template_ufpmeri', {
    answer: 'YES 💍',
    message: 'He said YES to the proposal! 💍🎉 Time to plan the wedding! Forever starts now!',
    to_email: hisEmail + ',angcayalharrahjhade@gmail.com',
    certificate_link: 'https://estrid12.github.io/Happy-1st-anniv-lovelovee/certificate.html'
  }).then(() => {
    document.getElementById('hisEmailInput').style.display = 'none';
    document.querySelector('button[onclick="sendToHisEmail()"]').style.display = 'none';
    document.getElementById('emailSentMsg').style.display = 'block';
    launchConfetti();
  }).catch((err) => {
    console.error('Email error:', err);
  });
}
