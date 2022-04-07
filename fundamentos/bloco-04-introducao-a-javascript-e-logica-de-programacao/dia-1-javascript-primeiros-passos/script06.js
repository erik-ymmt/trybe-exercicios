//input
let piece = 'QuEen';
//upper case the whole word to compare without case sensitivity
piece = piece.toUpperCase();

switch (piece) {
    case 'KING':
        console.log('movement: one square in all directions');
        break;
    case 'QUEEN':
        console.log('movement: all directions, no square limits');
        break;
    case 'BISHOP':
        console.log('movement: diagonals, no square limits');
        break;
    case 'KNIGHT':
        console.log('movement: "L" movement - e.g.: two forward, one to the side');
        break;
    case 'ROOK':
        console.log('movement: straight lines, no square limits');
        break;
    case 'PAWN':
        console.log('movement: one square forward, but it captures to its imediat diagonals');
        break;
    default:
        console.log('invalid piece, please choose one of the following: King, Queen, Bishop, Knight, Rook or Pawn.');
        break;
}