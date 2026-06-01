export const cloneNodeAndSetNonce = function (node) {
  const clone = node.cloneNode(true);
  const nonce = window.svgeditNonce;
  const clonedStyles = clone.querySelectorAll("style");
  clonedStyles.forEach((style) => {
    style.setAttribute("nonce", nonce);
  });
  return clone;
}
