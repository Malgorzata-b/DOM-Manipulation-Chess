const figures = [
  {
    name: "King",
    description:
      "Moves one square in any direction (vertically, horizontally, or diagonally). Can perform a special move called castling.",
    picture: "King.jpg",
  },
  {
    name: "Queen",
    description:
      "Moves in any direction (vertically, horizontally, or diagonally) for any number of squares.",
    picture: "Queen.png",
  },
  {
    name: "Rook",
    description:
      "Moves in a straight line horizontally or vertically for any number of squares.",
    picture: "Rook.png",
  },
  {
    name: "Bishop",
    description:
      "Moves diagonally for any number of squares, always staying on the same color.",
    picture: "bishop.png",
  },
  {
    name: "Knight",
    description:
      'Moves in an "L" shape: two squares in one direction (vertically or horizontally), then one square perpendicular. Jumps over other pieces.',
    picture: "knight.png",
  },
  {
    name: "Pawn",
    description:
      "Moves forward one square (two squares on its first move). Captures diagonally, one square.",
    picture: "pawn.png",
  },
];

const descriptionCon = document.querySelector("#description");
for (let figure of figures) {
  const container = document.createElement("div");
  container.classList.add("container-figures");
  const image = document.createElement("img");
  image.src = `./images/${figure.picture}`;
  image.style.width = "40px";
  image.style.height = "40px";
  image.style.borderRadius = "10px";
  image.style.boxShadow = "0 5px 10px black";
  image.style.margin = "20px 0";
  image.classList.add("card-image");
  const title = document.createElement("h3");
  title.textContent = figure.name;
  title.classList.add("title");
  const descriptionContainer = document.createElement("p");
  descriptionContainer.textContent = figure.description;
  descriptionContainer.classList.add("description");

  container.append(title, image, descriptionContainer);
  descriptionCon.append(container);
}

descriptionCon();
