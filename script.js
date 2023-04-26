const page = document.body.getElementsByTagName("*");

const getRandomNumber = () => {
  let randomNumber = Math.floor(Math.random() * 100);

  if (randomNumber % 2 === 0) randomNumber *= -1;
  return randomNumber;
};

for (const el of page) {
  if (!el.hasAttribute("data-straight")) {
    el.style.translateX = `${getRandomNumber()}px`;

    el.style.translateY = `${getRandomNumber()}px`;

    el.style.rotate = `${getRandomNumber() / (Math.random() * 20)}deg`;
  }
}

const flashyElems = document.querySelectorAll(".flashy");

const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "pink",
  "purple",
  "orange",
  "black",
];

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const flash = () => {
  for (const flashElem of flashyElems) {
    flashElem.style.color = getRandomColor();
    flashElem.style.backgroundColor = getRandomColor();
    flashElem.style.border = `2px solid ${getRandomColor()}`;
    flashElem.style.boxShadow = `0 0 10rem ${getRandomColor()}`;
    flashElem.style.rotate = `${getRandomNumber() / (Math.random() * 20)}deg`;
    flashElem.style.borderRadius = `${getRandomNumber()}px`;
  }
};

setInterval(flash, 250);

const popper = document.querySelector(".funny-popper");
const popperCloser = document.querySelector("#closer");

const showPopper = () => {
  popper.style.display = "block";

  let left = popper.style.left === "" ? 110 : popper.style.left;
  const slideIn = setInterval(() => {
    left -= 0.5;
    popper.style.left = `${left}%`;
    if (left <= 50) clearInterval(slideIn);
  }, 10);
};

const hidePopper = () => {
  let left = 50;
  const slideIn = setInterval(() => {
    left += 0.5;
    popper.style.left = `${left}%`;
    if (left >= 120) clearInterval(slideIn);
  }, 10);
};

const airStrike = () => {
  document.body.style.backgroundImage =
    'url("https://thumbs.gfycat.com/ArcticWelllitKentrosaurus-max-1mb.gif")';
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";

  // Start over the screen and move down
  let top = -200;
  let resetting = false;
  const slideIn = setInterval(() => {
    if (resetting) {
      top -= 1;
      document.body.style.backgroundImage =
        'url("https://www.freeiconspng.com/uploads/nuclear-explosion-png-24.png")';
    } else {
      top += 1;
    }

    if (top >= 200) resetting = true;

    if (top <= -200) clearInterval(slideIn);

    document.body.style.backgroundPosition = `0 ${top}vh`;
  }, 10);
};

setInterval(showPopper, 10000);

setTimeout(airStrike, 15000);

setInterval(airStrike, 60000);

popperCloser.addEventListener("click", hidePopper);
