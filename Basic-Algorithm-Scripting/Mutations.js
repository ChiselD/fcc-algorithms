function mutation(arr) {
  let container = arr[0].toLowerCase();
  let contained = arr[1].toLowerCase();
  for (let i = 0; i < contained.length; i++) {
    if (container.indexOf(contained[i]) === -1) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);
mutation(["hello", "Hello"])
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])
