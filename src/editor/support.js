export const svgeditPolicy = window?.trustedTypes?.createPolicy(
  'svgedit',
  {
    // For use with safe HTML strings only.
    // Data read from external SVG sources gets sanitized in svgcanvas already.
    // HTML used to create template instances shlould be safe already.
    createHTML: (value) => value
  }
)

export function createTrustedHTML(html) {
  return svgeditPolicy?.createHTML(html) ?? html
}

export const cloneNodeAndSetNonce = function (node) {
  const clone = node.cloneNode(true);
  const nonce = window.svgeditNonce;
  const clonedStyles = clone.querySelectorAll("style");
  clonedStyles.forEach((style) => {
    style.setAttribute("nonce", nonce);
  });
  return clone;
}
