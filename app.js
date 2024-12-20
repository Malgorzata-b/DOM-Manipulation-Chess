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

    field.innerHTML = pieces;
    // Setting an attribute
    field.setAttribute("field-id", i);

    const row = Math.floor((0 + i) / 8);

    if (row % 2 === 1) {
      field.classList.add(i % 2 === 1 ? "white" : "black");
    } else {
      field.classList.add(i % 2 === 1 ? "black" : "white");
    }

    Chessboard.append(field);
  });
}

ChessBoard();
// console.log(Chessboard);
