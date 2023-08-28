document.getElementById("minimizeButton").addEventListener("click", function () {
    browser.windows.getCurrent().then((windowInfo) => {
      browser.windows.update(windowInfo.id, { state: "minimized" });
    });
  });
  
  document.getElementById("maximizeButton").addEventListener("click", function () {
    browser.windows.getCurrent().then((windowInfo) => {
      browser.windows.update(windowInfo.id, { state: "maximized" });
    });
  });
  
  document.getElementById("closeButton").addEventListener("click", function () {
    browser.windows.getCurrent().then((windowInfo) => {
      browser.windows.remove(windowInfo.id);
    });
  });
  
  document.getElementById("WindowButton").addEventListener("click", function () {
    browser.windows.getCurrent().then((windowInfo) => {
      const newState = windowInfo.state === "fullscreen" ? "normal" : "fullscreen";
      browser.windows.update(windowInfo.id, { state: newState });
    });
  });
  