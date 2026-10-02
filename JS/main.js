const memoryStage = document.getElementById("memory-stage");
const loveAudio = document.getElementById("love-audio");
const musicNote = document.getElementById("music-note");
const filmTrack = document.getElementById("film-track");
const filmCards = Array.from(document.querySelectorAll(".film-card"));

let carouselIndex = 0;
let carouselIntervalId = null;

const showCard = (index) => {
    if (!filmTrack) {
        return;
    }

    filmTrack.style.transform = `translateX(-${index * 100}%)`;
};

const startCarousel = () => {
    if (filmCards.length <= 1 || carouselIntervalId) {
        return;
    }

    carouselIntervalId = window.setInterval(() => {
        carouselIndex = (carouselIndex + 1) % filmCards.length;
        showCard(carouselIndex);
    }, 2600);
};

if (memoryStage) {
    const revealMemories = async () => {
        memoryStage.classList.add("is-revealed");
        memoryStage.setAttribute("aria-expanded", "true");
        showCard(carouselIndex);
        startCarousel();

        if (!loveAudio) {
            return;
        }

        try {
            await loveAudio.play();
            if (musicNote) {
                musicNote.textContent = "La musica ya esta sonando de fondo para acompanar los recuerdos.";
            }
        } catch (error) {
            if (musicNote) {
                musicNote.textContent = "La animacion ya funciona. La musica empezara en cuanto agreguemos un archivo valido en ASSETS/MUSIC.";
            }
        }
    };

    memoryStage.addEventListener("mouseenter", revealMemories, { once: true });
    memoryStage.addEventListener("click", revealMemories);
    memoryStage.addEventListener("focus", revealMemories, { once: true });
}
