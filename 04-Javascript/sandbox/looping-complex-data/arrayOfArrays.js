// Known as a MAtrix - Multi Dimensional Array

// Mimics a table or a grid - co ordination - graphs

// rows x
// columns y

// const table = [
//     [1, 2, 3], 
//     [4, 5, 6],
//     [7, 8, 9],
// ];

// for (let row = 0; row < table.length; row++) {
//     // console.log(table[row]);

//     for (let column = 0; column < table.length; column++) {
//         // console.log(table[row][column]);
//         console.log(table[column][row]);
//     }
// };

const grid = [
    ["X", "X", "O"],
    ["O", "O", "O"],
    ["X", "O", "X"]
];

for (let row = 0; row <grid.length; row++){
    const rowString = grid[row].join("");
    let columnString = "";

    for (let column = 0; column < grid.length; column ++) {
        columnString += grid[column][row];
    }

    // console.log(row, rowString, columnString);

    if ( rowString === "XXX" || columnString === "XXX"){
        console.log("X wins");
        break;
    } ;
    
    if ( rowString === "OOO" || columnString === "OOO"){
        console.log("O wins");
        break;
    };
}