const drawContainer = (containerSize, childSize, numberOfChildren) => {
  const mainSquare = document.getElementById("mainSquare");
  mainSquare.style.width = `${containerSize}px`;
  mainSquare.style.height = `${containerSize}px`;
  mainSquare.style.display = "grid";
  mainSquare.style.gridTemplateColumns = `repeat(auto-fill, ${childSize}px)`;
  mainSquare.style.gridTemplateRows = `repeat(auto-fill, ${childSize}px)`;
  mainSquare.style.gap = "0";

  // Calculate how many children can fit in the container
  const maxChildren = Math.min(
    numberOfChildren,
    Math.floor(containerSize / childSize) ** 2
  );

  // Show a message if not all children can be rendered
  if (maxChildren < numberOfChildren) {
    alert(`Only ${maxChildren} ${maxChildren > 1 ? 'children' : 'child'} can be displayed`);
  }

  // Create and add the children to the container
  for (let i = 0; i < maxChildren; i++) {
    const child = document.createElement("div");
    child.classList.add("child");
    child.style.width = `${childSize}px`;
    child.style.height = `${childSize}px`;
    child.style.backgroundColor = getRandomColor();

    child.addEventListener("mouseover", () => {
      child.style.backgroundColor = getRandomColor();
    });

    let hoverTimeout;
    child.addEventListener("mouseenter", () => {
      hoverTimeout = setTimeout(() => {
        child.style.display = "none";
      }, 2000);
    });

    child.addEventListener("mouseleave", () => {
      clearTimeout(hoverTimeout);
    });

    mainSquare.appendChild(child);
  }
};

// Function to generate a random color in hexadecimal format
const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

drawContainer(200, 50, 17);
//drawContainer(310, 200, 4);
//drawContainer(413, 42, 30);
//drawContainer(200, 300, 2);
