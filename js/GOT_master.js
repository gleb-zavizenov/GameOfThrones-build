(() => {
  console.log("fired");

  // Variable stack => get the shields / sigils
  const sigils = document.querySelectorAll(".sigilContainer");
  const lightbox = document.querySelector(".lightbox");
  const closeLightboxBtn = document.querySelector(".close-lightbox");
  const banners = document.querySelectorAll(".banner");
  const houseVideo = document.querySelector(".house-video");

  // Function that fires every time sigil is pressed
  function popLightBox(e){
    // debug this so far and make sure the event handeling works
    //debugger;
    if(e.target.classList.contains("stark")){
      console.log("starks");
      //show starks img
      for(let i = 0; i < banners.length; i++){
        banners[i].classList.remove("active");
      }
      banners[0].classList.add("active");
    }
    if(e.target.classList.contains("baratheon")){
      console.log("baratheon");
      //show baratheon img
      for(let i = 0; i < banners.length; i++){
        banners[i].classList.remove("active");
      }
      banners[1].classList.add("active");
    }
    if(e.target.classList.contains("lannister")){
      console.log("lannister");
      //show lannister img
      for(let i = 0; i < banners.length; i++){
        banners[i].classList.remove("active");
      }
      banners[2].classList.add("active");
    }
    if(e.target.classList.contains("tully")){
      console.log("tully");
      //show tully img
      for(let i = 0; i < banners.length; i++){
        banners[i].classList.remove("active");
      }
      banners[3].classList.add("active");
    }
    if(e.target.classList.contains("greyjoy")){
      console.log("greyjoy");
      //show greyjoy img
      for(let i = 0; i < banners.length; i++){
        banners[i].classList.remove("active");
      }
      banners[4].classList.add("active");
    }
    if(e.target.classList.contains("arryn")){
      console.log("arryn");
      //show arryn img
      for(let i = 0; i < banners.length; i++){
        banners[i].classList.remove("active");
      }
      banners[5].classList.add("active");
    }
    lightbox.classList.add("show-lightbox");
    houseVideo.play();
  }

  // Adding event listener for each sigil
  sigils.forEach(sigil => {
    sigil.addEventListener("click", popLightBox);
  })

  closeLightboxBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    lightbox.classList.remove("show-lightbox");
    houseVideo.currentTime = 0;
    houseVideo.pause();
  })

  houseVideo.addEventListener("ended", () => {
    lightbox.classList.remove("show-lightbox");
    houseVideo.currentTime = 0;
    houseVideo.pause();
  })
})();
