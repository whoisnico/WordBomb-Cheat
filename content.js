// content.js

// Finde das erste Element mit der Klasse 'syllable'
const syllableElement = document.querySelector('.syllable');

// Überprüfe, ob das Element existiert und lies den Text aus
if (syllableElement) {
  const syllableText = syllableElement.innerText;
  console.log('Gefundener Text:', syllableText);
} else {
  console.log('Kein Element mit der Klasse "syllable" gefunden.');
}
