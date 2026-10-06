// Buka Sampul & Putar Musik
const cover = document.getElementById('cover');
const bgMusic = document.getElementById('bgMusic');
const musicControl = document.getElementById('musicControl');
let isPlaying = false;

function openInvitation() {
    cover.classList.add('opened');
    playMusic();
}

function playMusic() {
    bgMusic.play().then(() => {
        isPlaying = true;
        musicControl.classList.add('playing');
    }).catch(error => {
        console.log("Audio gagal diputar: ", error);
    });
}

function toggleMusic() {
    if (isPlaying) {
        bgMusic.pause();
        musicControl.classList.remove('playing');
        isPlaying = false;
    } else {
        bgMusic.play();
        musicControl.classList.add('playing');
        isPlaying = true;
    }
}

// Logika Hitung Mundur (Countdown)
const weddingDate = new Date("Dec 12, 2026 08:00:00").getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";
    }
}, 1000);

// Salin Nomor Rekening
function copyText(elementId) {
    const textToCopy = document.getElementById(elementId).innerText.replace(/\s+/g, '');
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("Nomor rekening berhasil disalin: " + textToCopy);
    }).catch(err => {
        console.error('Gagal menyalin text: ', err);
    });
}