const video = document.getElementById("imesVideo");
const btn = document.getElementById("videoBtn");

btn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    btn.innerHTML = '<span class="pulse"></span><i class="lni lni-pause"></i>';
  } else {
    video.pause();
    btn.innerHTML = '<span class="pulse"></span><i class="lni lni-play"></i>';
  }
});
