/** Animation consists of two transitions:
 * first - initial state to middle, which is triggered by assigning animationName CSS class
 * second - middle stage to initial state, which is triggered by removing animationName CSS class
 *
 * In the middle of animation i.e. when the first transit finishes, it calls middleCallBack,
 * where DOM element's properties can be changed, as background and etc
 *
 * In the end of animation i.e. when the second transit finishes, it calls endCallBack
 *
 * Assumptions:
 * (1) element must have CSS "transition" property, overwise the transitionend
 * event will never happen
 * (2) animationName CSS class must have "transform" property
 *
 * @param {*} element - element for animation
 * @param {String} animationName - CSS animation class name
 * @param {Function} middleCallBack - callback function in the middle of animation
 * @param {Function} endCallBack - callback function in the end of animation
 */
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

    // Remove animation CSS class
    element.classList.remove(animationName);
  });
}
