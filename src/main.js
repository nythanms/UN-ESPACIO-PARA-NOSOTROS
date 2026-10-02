import "./style.css";
import { gsap } from "gsap";

const baseUrl = import.meta.env.BASE_URL;
const mediaUrl = (path) => `${baseUrl}media/${path}`;
const spotifyPlaylistUri = "spotify:playlist:6hgUjtnyl1gG2P452b47tp";

const memories = [
  {
    src: mediaUrl("IMAGES/1.webp"),
    alt: "Un recuerdo especial de nuestra historia",
  },
  {
    src: mediaUrl("IMAGES/image00001.jpg"),
    alt: "Nosotros juntos en un recuerdo especial",
  },
  {
    src: mediaUrl("IMAGES/image00003.jpg"),
    alt: "Un momento bonito compartido",
  },
  {
    src: mediaUrl("IMAGES/image00004.jpg"),
    alt: "Otra foto especial de nosotros",
  },
  {
    src: mediaUrl("IMAGES/image00005.jpg"),
    alt: "Una foto de nuestra historia",
  },
  {
    src: mediaUrl("IMAGES/image00006.jpg"),
    alt: "Un recuerdo lleno de carino",
  },
  {
    src: mediaUrl("IMAGES/image00007.jpg"),
    alt: "Un instante feliz de nuestra relacion",
  },
  {
    src: mediaUrl("IMAGES/image00008.jpg"),
    alt: "Una foto hermosa de los dos",
  },
  {
    src: mediaUrl("IMAGES/image00010.jpg"),
    alt: "Otro momento bonito de los dos",
  },
  {
    src: mediaUrl("IMAGES/image00011.jpg"),
    alt: "Un recuerdo tierno de nuestra historia",
  },
  {
    src: mediaUrl("IMAGES/image00012.jpg"),
    alt: "Una escena especial de nosotros",
  },
  {
    src: mediaUrl("IMAGES/image00013.jpg"),
    alt: "Un momento bonito que compartimos",
  },
  {
    src: mediaUrl("IMAGES/image00014.jpg"),
    alt: "Una foto romantica de nosotros",
  },
  {
    src: mediaUrl("IMAGES/image00015.jpg"),
    alt: "Otro recuerdo romantico de nuestra historia",
  },
];

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(189,196,212,0.2),_transparent_28%),linear-gradient(135deg,_#0f1a2b_0%,_#1c2e4a_50%,_#52677d_100%)] text-slate-50">
    <header class="px-5 pt-6 md:px-10">
      <nav class="nav-shell mx-auto flex w-full max-w-7xl flex-col gap-5 rounded-[2rem] px-5 py-4 md:flex-row md:items-center md:justify-between">
        <a class="nav-brand flex h-20 w-20 items-center justify-center rounded-full p-2 transition duration-300 hover:-translate-y-0.5" href="#inicio" aria-label="Inicio AE y NM">
          <img class="w-full max-w-[62px]" src="${mediaUrl("LOGO/LOGO_N&M.png")}" alt="Logo de AE y NM" />
        </a>

        <div class="nav-links-panel flex flex-col gap-3 md:flex-row md:items-center">
          <a class="nav-link rounded-full px-5 py-3 text-center text-sm font-semibold tracking-[0.2em]" href="#nosotros">NOSOTROS</a>
          <a class="nav-link rounded-full px-5 py-3 text-center text-sm font-semibold tracking-[0.2em]" href="#carta-amor">CARTA AMOR</a>
        </div>
      </nav>
    </header>

    <main id="inicio" class="px-5 pb-10 pt-8 md:px-10 md:pt-12">
      <section class="mx-auto w-full max-w-7xl rounded-[2.2rem] border border-white/12 bg-[linear-gradient(145deg,rgba(28,46,74,0.56),rgba(15,26,43,0.72))] p-6 shadow-[0_18px_45px_rgba(9,17,30,0.24)] md:p-10">
        <p class="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#bdc4d4]">Una historia hecha pagina</p>
        <div class="grid gap-10 xl:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] xl:items-start">
          <div class="space-y-5">
            <h1 class="max-w-[10ch] font-['Cormorant_Garamond'] text-6xl leading-[0.92] font-semibold md:text-8xl">
              Nuestro espacio para recordar.
            </h1>
            <p class="max-w-2xl text-base leading-8 text-slate-100/85 md:text-lg">
              Una galeria de recuerdos pequenos que huelen a nosotros.
            </p>
          </div>

          <div class="space-y-4">
            <button
              id="memory-stage"
              type="button"
              aria-expanded="false"
              aria-controls="film-strip"
              class="group relative h-[42rem] w-full overflow-hidden rounded-[2rem] border border-slate-900/10 bg-white p-5 text-slate-900 shadow-[0_24px_48px_rgba(8,14,24,0.16)] transition duration-300 hover:-translate-y-1"
            >
              <span class="pointer-events-none absolute inset-5 rounded-[1.5rem] border border-dashed border-slate-900/15"></span>
              <span class="absolute left-1/2 top-5 -translate-x-1/2 rounded-full border border-slate-900/12 bg-white/95 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0f1a2b] transition duration-300 group-hover:-translate-y-1 group-hover:opacity-0" id="memory-prompt">Toca aqui</span>

              <span id="memory-flower" class="absolute inset-0 grid place-items-center px-6 pb-8 pt-20">
                <img
                  class="max-h-[34rem] max-w-[26rem] object-contain drop-shadow-[0_18px_24px_rgba(0,0,0,0.14)]"
                  src="${mediaUrl("IMAGES/TULIPANES_FONDO_B.webp")}"
                  alt="Tulipanes azules"
                />
              </span>

              <span id="film-strip" class="film-strip-shell relative block h-[34rem] overflow-hidden rounded-[1.65rem] px-3 pb-3 pt-16 opacity-0">
                <span class="film-strip-holes film-strip-holes--left" aria-hidden="true"></span>
                <span class="film-strip-holes film-strip-holes--right" aria-hidden="true"></span>
                <span class="film-strip-glow" aria-hidden="true"></span>
                <span id="film-track" class="film-track flex h-full flex-col will-change-transform">
                  ${memories
                    .map(
                      (memory) => `
                        <span class="film-card flex h-full w-full shrink-0 items-center justify-center px-6 py-4 md:px-10">
                          <span class="film-frame relative inline-flex max-w-full flex-col items-center justify-center rounded-[1.6rem] px-4 pb-8 pt-4 shadow-[0_28px_45px_rgba(0,0,0,0.34)]">
                            <span class="film-frame__strip film-frame__strip--top" aria-hidden="true"></span>
                            <span class="film-frame__strip film-frame__strip--bottom" aria-hidden="true"></span>
                            <span class="film-image-shell relative z-10 inline-flex items-center justify-center overflow-hidden rounded-[1.15rem] border border-white/8 bg-black/85 p-2">
                              <img
                              class="relative z-10 mx-auto h-auto max-h-[28rem] w-auto max-w-full rounded-[0.9rem] object-contain md:max-h-[30rem]"
                              src="${memory.src}"
                              alt="${memory.alt}"
                            />
                            </span>
                          </span>
                        </span>
                      `,
                    )
                    .join("")}
                </span>
              </span>
            </button>

            <div class="spotify-shell spotify-shell--compact w-full rounded-[1.5rem] p-3">
              <div class="mb-2 flex items-center justify-between gap-4">
                <div>
                  <p class="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#bdc4d4]">Reproduciendo</p>
                  <p class="mt-1 text-xs text-slate-100/68">La playlist empieza al tocar la galeria.</p>
                </div>
                <span class="rounded-full border border-white/12 bg-white/8 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#d1cfc9]">
                  Spotify
                </span>
              </div>

              <div id="spotify-embed" class="spotify-player spotify-player--compact"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="nosotros" class="mx-auto mt-10 grid w-full max-w-7xl gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <article class="rounded-[2rem] border border-white/10 bg-white/8 p-7 backdrop-blur-sm">
          <p class="text-xs font-bold uppercase tracking-[0.24em] text-[#bdc4d4]"></p>
          <h2 class="mt-4 font-['Cormorant_Garamond'] text-5xl leading-none text-white">Una historia que merece un diseño bonito para demostra lo vivido.</h2>
          <p class="mt-5 text-base leading-8 text-slate-100/82">
          Una historia que comenzó contigo dándome un bocado mientras manejaba. Quién diría que ese pequeño momento podría ser el detonante de todo lo que hemos vivido. Algo tan hermoso, tan especial, tan intenso.<br/>Una historia que, seguramente, más de uno criticará, pero que pocos tendrían el privilegio de sentir siquiera la mitad de lo que nosotros sentimos.
          <br/>Y fue ahí, después de ese bocado, que supe que no iba a dejar de pensar en ti. Desde entonces vives en mis sueños, en mis días, en mis tardes y en mis noches. Incluso en esos momentos que antes eran solo míos, siempre está tu sonrisa y esos ojazos que, con solo mirarme, me llevan al cielo.
          <br/>Este pequeño rincón de archivos, perdido en el vasto espacio de internet, guarda la mejor historia de mi vida. Una historia que jamás se irá de mi mente y que, con todo mi corazón, espero que nunca se acabe.
          </p>
        </article>

        <article id="carta-amor" class="rounded-[2rem] border border-white/10 bg-[#d1cfc9] p-7 text-[#132033]">
          <p class="text-xs font-bold uppercase tracking-[0.24em] text-[#52677d]">Carta Promesa</p>
          <h2 class="mt-4 font-['Cormorant_Garamond'] text-5xl leading-none">Mi mayor promesa.</h2>
          <p class="mt-5 text-base leading-8 text-slate-800/80">
            Mi vida, en este espacio quiero prometerte una sola cosa: mi amor eterno.<br/> Un amor dedicado, constante y latente. Porque, aun en mis peores momentos, has estado ahí, soportándome, acompañándome y dándome tu apoyo.<br/>Sé que todavía no soy esa persona que te conoce al cien por ciento. Esa persona a la que acudes cuando todo está mal. Pero esa es mi meta. Mi meta en esta relación es cuidarte, atenderte, llenarte de amor y velar por tu paz interior. Porque eso es lo que tú me das a mí: una paz tan grande que solo puedo sonreír y agradecer cada vez que pienso en ti.<br/>Y sí, quizá ahora estamos pasando por momentos difíciles, pero quiero que sepas que, aun si mañana decides que no puedes más, lo aceptaré y mantendré esta promesa. Estar para ti siempre que necesites un hombro, un "te ves hermosa", una mano que te ayude, o incluso el gesto más pequeño.<br/>No dudes que ahí estaré, respetando tus límites, pero amándote sin ninguna duda. Porque me has dado algo que nadie más había podido darme.<br/>Gracias por tanto.<br/>Te amo, mi princesa. 
          </p>
        </article>
      </section>
    </main>
  </div>
`;

const memoryStage = document.querySelector("#memory-stage");
const memoryFlower = document.querySelector("#memory-flower");
const filmStrip = document.querySelector("#film-strip");
const filmTrack = document.querySelector("#film-track");
const slides = Array.from(document.querySelectorAll(".film-card"));

let currentSlide = 0;
let carouselTimer = null;
let memoriesRevealed = false;
let spotifyController = null;

const loadSpotifyEmbed = () => {
  if (window.onSpotifyIframeApiReady) {
    return;
  }

  window.onSpotifyIframeApiReady = (IFrameAPI) => {
    const spotifyEmbedElement = document.querySelector("#spotify-embed");

    if (!spotifyEmbedElement) {
      return;
    }

    const options = {
      uri: spotifyPlaylistUri,
      width: "100%",
      height: "152",
      theme: "black",
    };

    const callback = (EmbedController) => {
      spotifyController = EmbedController;
    };

    IFrameAPI.createController(spotifyEmbedElement, options, callback);
  };

  const script = document.createElement("script");
  script.src = "https://open.spotify.com/embed/iframe-api/v1";
  script.async = true;
  document.body.append(script);
};

const playSpotifyPlaylist = () => {
  if (!spotifyController) {
    return;
  }

  try {
    spotifyController.play();
  } catch (error) {
    console.error("No se pudo iniciar la playlist de Spotify.", error);
  }
};

const updateCarousel = (index, immediate = false) => {
  if (!filmTrack) return;

  gsap.to(filmTrack, {
    yPercent: -100 * index,
    duration: immediate ? 0 : 1.15,
    ease: "power3.inOut",
  });
};

const startCarousel = () => {
  if (carouselTimer || slides.length <= 1) return;

  carouselTimer = window.setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel(currentSlide);
  }, 4800);
};

const revealMemories = () => {
  if (memoriesRevealed || !memoryStage || !memoryFlower || !filmStrip) return;

  memoriesRevealed = true;
  memoryStage.setAttribute("aria-expanded", "true");
  updateCarousel(0, true);

  const timeline = gsap.timeline();

  timeline
    .to(memoryFlower, {
      autoAlpha: 0,
      scale: 0.85,
      duration: 0.7,
      ease: "power2.out",
    })
    .to(
      filmStrip,
      {
        autoAlpha: 1,
        duration: 0.45,
        ease: "power2.out",
      },
      "-=0.15",
    )
    .fromTo(
      ".film-card",
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.05,
      },
      "-=0.1",
    );

  startCarousel();
};

gsap.from(".navbar", {
  y: -28,
  opacity: 0,
  duration: 0.9,
  ease: "power3.out",
});

gsap.from(".hero-panel", {
  y: 36,
  opacity: 0,
  duration: 1,
  delay: 0.15,
  ease: "power3.out",
});

gsap.from("#memory-flower img", {
  y: 20,
  opacity: 0,
  duration: 1.15,
  delay: 0.45,
  ease: "power3.out",
});

loadSpotifyEmbed();

memoryStage?.addEventListener("mouseenter", revealMemories, { once: true });
memoryStage?.addEventListener("focus", revealMemories, { once: true });
memoryStage?.addEventListener("click", () => {
  revealMemories();
  playSpotifyPlaylist();
});
