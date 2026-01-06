document.addEventListener("DOMContentLoaded", () => {

  const items = document.querySelectorAll(".item");
  const bg = document.querySelector(".background");
  let index = 0;
  let autoSlideTimer;

  if (!items.length || !bg) return;

  /* ACTIVATE SLIDE */
  function activate(i) {
    items.forEach(item => item.classList.remove("active"));
    items[i].classList.add("active");

    const img = items[i].querySelector("img");
    if (img) {
      bg.style.backgroundImage = `url('${img.src}')`;
    }

    index = i;
    resetAutoSlide();
  }

  /* AUTO SLIDE */
  function startAutoSlide() {
    autoSlideTimer = setInterval(() => {
      index = (index + 1) % items.length;
      activate(index);
    }, 4000);
  }

  function resetAutoSlide() {
    clearInterval(autoSlideTimer);
    startAutoSlide();
  }

  /* CLICK & HOVER */
  items.forEach((item, i) => {
    item.addEventListener("click", () => activate(i));
    item.addEventListener("mouseenter", () => activate(i));
  });

  /* SWIPE SUPPORT */
  let startX = 0;

  document.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  });

  document.addEventListener("touchend", e => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        index = (index + 1) % items.length;
      } else {
        index = (index - 1 + items.length) % items.length;
      }
      activate(index);
    }
  });

  /* INITIALIZE */
  activate(0);
  startAutoSlide();

});

/* BIBLE VERSE ROTATOR */
const verses = [
  {
    text: "The Lord is my shepherd; I shall not want.",
    ref: "Psalm 23:1"
  },
  {
    text: "For I know the plans I have for you, declares the Lord.",
    ref: "Jeremiah 29:11"
  },
  {
    text: "Come to me, all who are weary and burdened, and I will give you rest.",
    ref: "Matthew 11:28"
  },
  {
    text: "With God all things are possible.",
    ref: "Matthew 19:26"
  }
];

let verseIndex = 0;
const verseText = document.getElementById("verse-text");
const verseRef = document.getElementById("verse-ref");

function changeVerse() {
  verseText.textContent = verses[verseIndex].text;
  verseRef.textContent = verses[verseIndex].ref;
  verseIndex = (verseIndex + 1) % verses.length;
}

changeVerse();
setInterval(changeVerse, 8000);

/* WORSHIP MUSIC CONTROL */
const music = document.getElementById("worshipMusic");
const musicBtn = document.getElementById("musicToggle");
let playing = false;

musicBtn.addEventListener("click", () => {
  if (!playing) {
    music.volume = 0.4;
    music.play();
    musicBtn.textContent = "⏸ Worship Music";
  } else {
    music.pause();
    musicBtn.textContent = "🔊 Worship Music";
  }
  playing = !playing;
});