// popup.js

// Nachricht an das Content-Skript senden, um den Preis zu bekommen
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  chrome.scripting.executeScript({
    target: { tabId: tabs[0].id },
    function: getPriceFromPage
  });
});

function getPriceFromPage() {
  // Der Code, der den Wert ausliest, könnte hier auch direkt eingebaut werden
  const priceElement = document.querySelector('.price');
  if (priceElement) {
    alert('Der Preis ist: ' + priceElement.innerText);
  }
}
