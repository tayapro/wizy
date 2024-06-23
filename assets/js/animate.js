export function newAnimation() {
  const trigger = document.getElementById("button-animation");
  trigger.addEventListener("click", () => {
    animate("test-animation", "swirle", (element) => {
      element.innerHTML = "";
      element.style.width = "100px";
      element.style.height = "100px";
      element.style.backgroundColor = "pink";
    });
  });
  //   animate.addEventListener("click", () => {
  //     flip("test-animation", () => {
  //       console.log("callback hell");
  //       const animateImg = document.getElementById("img-animate");
  //       animateImg.src = "assets/images/dog.png";
  //       animateImg.style.backgroundColor = "grey";
  //     });
  //   });
}

// elementId must have CSS transition property, overwise the transitionend
// event will never happen
export function animate(elementId, animationName, cb) {
  console.log("Flipping....");
  const animateDiv = document.getElementById(elementId);
  animateDiv.classList.add(animationName);
  animateDiv.addEventListener("transitionend", function transitionEnd() {
    console.log("flipBack...");
    animateDiv.removeEventListener("transitionend", transitionEnd);

    // Callback function in the middle of animation
    if (cb) cb(animateDiv);

    animateDiv.classList.remove(animationName);
  });
}
