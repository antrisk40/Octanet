const dynamicName = document.getElementById('dynamic-name');

const name = 'ANIME Website'; // Your name
const colors = ['#4285F4', '#DB4437', '#F4B400', '#0F9D58', '#0f34db']; // Different colors for each letter
let index = 0;
let isTyping = true;

function typeNextLetter() {
  if (isTyping) {
    if (index < name.length) {
      const letter = document.createElement('span');
      letter.textContent = name.charAt(index);
      letter.style.color = colors[index % colors.length]; // Apply different colors
      dynamicName.appendChild(letter);
      index++;
      setTimeout(typeNextLetter, 150); // Typing speed
    } else {
      isTyping = false;
      setTimeout(typeNextLetter, 1000); // Wait before starting to delete
    }
  } else {
    if (index > 0) {
      dynamicName.removeChild(dynamicName.lastChild);
      index--;
      setTimeout(typeNextLetter, 200); // Typing speed while deleting
    } else {
      isTyping = true;
      setTimeout(typeNextLetter, 350); // Wait before typing again
    }
  }
}

typeNextLetter();
