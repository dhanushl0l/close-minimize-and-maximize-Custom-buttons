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
  