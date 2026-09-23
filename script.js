const app = document.getElementById("app");
const download = document.getElementById("download");
const again = document.getElementById("again");
const status = document.getElementById("status");
const label = download.querySelector(".label");

let state = "idle";
let timer = null;
let pointerStarted = false;

function reset() {
  clearTimeout(timer);
  app.className = "app";
  download.className = "download";
  download.disabled = false;
  download.removeAttribute("aria-busy");
  label.textContent = "Download";
  status.textContent = "DOWNLOAD THE FILE";
  state = "idle";
  pointerStarted = false;
}

function beginPress() {
  if (state !== "idle" || pointerStarted) return;
  pointerStarted = true;
  download.classList.add("pressed");
  label.textContent = "Release";
  status.textContent = "PRESS TO DOWNLOAD";
}

function endPress() {
  if (!pointerStarted || state !== "idle") return;
  pointerStarted = false;
  download.classList.remove("pressed");
  start();
}

function start() {
  if (state !== "idle") return;
  state = "loading";
  download.disabled = true;
  download.setAttribute("aria-busy", "true");
  app.classList.add("loading");
  label.textContent = "Downloading";
  status.textContent = "PREPARING DOWNLOAD";

  timer = setTimeout(() => {
    state = "complete";
    app.classList.remove("loading");
    app.classList.add("complete");
    status.textContent = "DOWNLOAD COMPLETE";
  }, 1450);
}

download.addEventListener("pointerdown", e => {
  if (e.pointerType === "mouse" && e.button !== 0) return;
  beginPress();
});
download.addEventListener("pointerup", endPress);
download.addEventListener("pointercancel", () => {
  pointerStarted = false;
  download.classList.remove("pressed");
  if (state === "idle") {
    label.textContent = "Download";
    status.textContent = "DOWNLOAD THE FILE";
  }
});
download.addEventListener("pointerleave", () => {
  if (!pointerStarted) return;
  pointerStarted = false;
  download.classList.remove("pressed");
  if (state === "idle") {
    label.textContent = "Download";
    status.textContent = "DOWNLOAD THE FILE";
  }
});

download.addEventListener("keydown", e => {
  if ((e.key === " " || e.key === "Enter") && !e.repeat) {
    e.preventDefault();
    beginPress();
  }
});
download.addEventListener("keyup", e => {
  if (e.key === " " || e.key === "Enter") {
    e.preventDefault();
    endPress();
  }
});

again.addEventListener("click", reset);

document.addEventListener("keydown", e => {
  if (e.key === "Escape" && state !== "idle") reset();
});
