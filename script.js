function trackUserActivity() {
  function getElementType(el) {
    const tag = el.tagName.toLowerCase();
    if (tag === "img") return "image";
    if (tag === "select") return "drop_down";
    if (tag === "input" || tag === "textarea") return "text";
    if (tag === "button") return "button";
    if (el.isContentEditable) return "text";
    return tag;
  }

  // Log events in desired format
  function logEvent(type, el) {
    const timestamp = new Date().toISOString();
    const eventObject = getElementType(el);
    console.log(`${timestamp}, ${type}, ${eventObject}`);
  }

  window.addEventListener("load", () => {
    logEvent("view", document.body);
  });

  document.addEventListener("click", (e) => {
    logEvent("click", e.target);
  });

}

trackUserActivity();
