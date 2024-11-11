// content.js

// Beispiel: Den Wert des Elements mit der Klasse .price auslesen
const priceElement = document.querySelector('.price');
if (priceElement) {
  const price = priceElement.innerText;
  console.log('Der Preis ist: ', price);

  // Hier kannst du den Wert an das Popup oder an den Hintergrund-Skripten weitergeben
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'getPrice') {
      sendResponse({ price: price });
    }
  });
}
