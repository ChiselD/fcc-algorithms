function chunkArrayInGroups(arr, size) {
  let newArr = [];
  let numOfChunks = Math.ceil(arr.length/size);
  for (let i = 0; i < numOfChunks; i++) {
    newArr[i] = [];
    let chunk = arr.splice(0, size);
    for (let j = 0; j < chunk.length; j++) {
      newArr[i][j] = chunk[j];
    }
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
