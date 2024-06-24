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

// (1) element must have CSS "transition" property, overwise the transitionend
// event will never happen
// (2) animationName CSS class must have "transform" property
export function animate(element, animationName, middleCallBack, endCallBack) {
  element.classList.add(animationName);

  element.addEventListener("transitionend", function transitionEnd(e) {
    // Make sure we only call this only once per transition
    // And use transform property for it
    // We need this because transitionend event is called for every transiting preperty
    if (e.propertyName !== "transform") return;

    // This flag is true when the first transition ends
    // And false when the second transition ends
    // We consider the moment when the first transition ends
    // as the middle of the animation
    const isInTheMiddle = element.classList.contains(animationName);
    if (!isInTheMiddle) {
      element.removeEventListener("transitionend", transitionEnd);
    }

    // Callback function in the middle of animation
    if (middleCallBack && isInTheMiddle) middleCallBack(element);

    // Callback function in the end of animation
    if (endCallBack && !isInTheMiddle) endCallBack(element);

    element.classList.remove(animationName);
  });
}
