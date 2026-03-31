const STORAGE_KEY = "mello-muted";

class DogSound {
  private audio: HTMLAudioElement | null = null;
  private loaded = false;
  private _muted: boolean;

  constructor(src: string) {
    this._muted =
      typeof window !== "undefined" &&
      localStorage.getItem(STORAGE_KEY) === "true";

    if (typeof window !== "undefined") {
      const a = new Audio(src);
      a.preload = "auto";
      a.addEventListener(
        "canplaythrough",
        () => {
          this.loaded = true;
        },
        { once: true }
      );
      a.addEventListener(
        "error",
        () => {
          // Sound file doesn't exist yet — silent fallback
          this.loaded = false;
        },
        { once: true }
      );
      this.audio = a;
    }
  }

  playBark() {
    if (!this.loaded || !this.audio || this._muted) return;
    this.audio.currentTime = 0;
    this.audio.play().catch(() => {
      // Blocked by browser autoplay policy — ignore
    });
  }

  toggleMute(): boolean {
    this._muted = !this._muted;
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, String(this._muted));
    }
    return this._muted;
  }

  get isMuted() {
    return this._muted;
  }
}

export const dogSound = new DogSound("/sounds/bark.mp3");
