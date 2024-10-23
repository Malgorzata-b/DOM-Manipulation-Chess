const Chessboard = document.querySelector("#chessboard");

// For different chess pieces using icons from Font Awesome
const king = '<div><i class="fas fa-chess-king chess-icon"></i></div>';
const queen = '<div><i class="fas fa-chess-queen chess-icon"></i></div>';
const rook = '<div><i class="fas fa-chess-rook chess-icon"></i></div>';
const bishop = '<div><i class="fas fa-chess-bishop chess-icon"></i></div>';
const pawn = '<div><i class="fas fa-chess-pawn chess-icon"></i></div>';
const knight = '<div><i class="fas fa-chess-knight chess-icon"></i></div>';

// It contains/array for the pieces at each position on the chessboard (64 squares: 8x8)
const pieces = [
  rook,
  knight,
  bishop,
  queen,
  king,
  bishop,
  knight,
  rook,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  rook,
  knight,
  bishop,
  queen,
  king,
  bishop,
  knight,
  rook,
];
// Function to create the chessboard
function ChessBoard() {
  pieces.forEach((pieces, i) => {
    const field = document.createElement("div");
    field.classList.add("field");
    // Inserting the HTML for the chess piece into the square (or empty if no piece)
    field.innerHTML = pieces;
    // Setting an attribute 'square-id' to identify each square (0-63)
    field.setAttribute("square-id", i);
    // Calculating the row number on the chessboard (from 0 to 7)
    const row = Math.floor((0 + i) / 8);
    // Alternating square colors - if the row number is odd
    if (row % 2 === 1) {
      // Check if the square index is odd or even and set the appropriate color
      field.classList.add(i % 2 === 1 ? "white" : "black");
    } else {
      // If the row number is even, set the colors in reverse
      field.classList.add(i % 2 === 1 ? "black" : "white");
    }

    Chessboard.append(field);
  });
}

ChessBoard();
// console.log(Chessboard);
