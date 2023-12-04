let maze = [[1,1,1,1,1,1,1],
        [1,0,0,0,0,0,3],
        [1,0,1,0,1,0,1],
        [0,0,1,0,0,0,1],
        [1,0,1,0,1,0,1],
        [1,0,0,0,0,0,1],
        [1,2,1,0,1,0,1]]

const mazeRunner = (maze, directions) => {
  let y = maze.findIndex(el => el.includes(2)); // индекс массива в maze где находится 2
  let x = maze[y].indexOf(2)// индекс элемента 2 в массиве где находится 2
  directions = directions.map((el) => {
    if(el == "N") y-- // вверх
    else if(el == "S") y++ // вниз
    else if(el == "E") x++ // направо
    else if(el == "W") x-- // налево
  })
  if(maze[y][x] == 3) return 'Finish'
  else if (maze[y][x] == 0) return 'Lost'
  else return 'Dead'
}
console.log(mazeRunner(maze, ["N","N","N","N","N","E","E","E","E","E"])) //=> 'Finish'
console.log(mazeRunner(maze, ["N","N","N","N","N","E","E","S","S","E","E","N","N","E"])) //=> 'Finish'
console.log(mazeRunner(maze, ["N","N","N","W","W"])) //=> 'Dead'
console.log(mazeRunner(maze, ["N","E","E","E","E"])) //=> 'Lost'