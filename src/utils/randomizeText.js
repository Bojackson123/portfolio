const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const randomizeText = (element) => {
  let interval = null;
  let iteration = 0;
  const originalText = element.dataset.value;

  if (!originalText) return;

  clearInterval(interval);

  interval = setInterval(() => {
    element.innerText = originalText
      .split("")
      .map((letter, index) => {
        if (index < iteration || letter === '[' || letter === ']') {
          return originalText[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= originalText.length) {
      clearInterval(interval);
    }

    iteration += 1 / 6;
  }, 30);
};

export default randomizeText;