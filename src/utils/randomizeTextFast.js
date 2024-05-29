const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const randomizeTextFast = (element) => {
  let interval = null;
  let iteration = 0;
  const originalText = element.dataset.fast;

  if (!originalText) return;

  clearInterval(interval);

  interval = setInterval(() => {
    element.innerText = originalText
      .split("")
      .map((letter, index) => {
        if (index < iteration || letter === '[' || letter === ']' 
            || letter === ' ') {    
          return originalText[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= originalText.length) {
      clearInterval(interval);
    }

    iteration += 1 / 1;
  }, 30);
};

export default randomizeTextFast;