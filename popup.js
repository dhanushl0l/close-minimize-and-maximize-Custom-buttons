document.getElementById("minimizeButton").addEventListener("click", function () {
  browser.windows.getCurrent().then((windowInfo) => {
    browser.windows.update(windowInfo.id, { state: "minimized" });
  });
});

document.getElementById("closeButton").addEventListener("click", function () {
  browser.windows.getCurrent().then((windowInfo) => {
    browser.windows.remove(windowInfo.id);
  });
});

document.getElementById("WindowButton").addEventListener("click", function () {
  browser.windows.getCurrent().then((windowInfo) => {
    const newState = windowInfo.state === "normal" ? "maximized" : "normal";
    browser.windows.update(windowInfo.id, { state: newState });
  });
});

const settingsButton = document.getElementById('SettingsButton');
settingsButton.addEventListener('click', () => {
  window.location.href = 'settings.html'; 
});