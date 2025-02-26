// so the idea is simple , if our function can move n discks from source to destination then we can move n-1 discks to the helper and then move that single disck to the destination from the source and use the function to move that n-1 discks to the destination as well .

// hypothesis -> if it can move n then it can also move n-1
// induction -> move that one disck from source to destination
// base codition -> if no dicks to move return 0 and if only one to move then move it directlly to destination

// function to move n discks from source to destination
function towerOfHanoi(
  numberOfDiscksToMove: number,
  source: number,
  destination: number,
  helper: number
): number {
  // if there are no discks to move then nothing to do , so return 0
  if (!numberOfDiscksToMove) {
    return 0;
  }

  // if we are here then that means we have atleast one disck to move and hence at least one move need to be made
  let moves = 1;

  // if there is only one disck to move then directlly move it to the destination
  if (numberOfDiscksToMove === 1) {
    source--;
    destination++;
    return moves;
  }

  // if this function can move n discks from source to destination then this function can also move n-1 discks to the helper as well (hypothesis)
  moves += towerOfHanoi(numberOfDiscksToMove - 1, source, helper, destination);

  // now moe that one remainig disck from source to destination manually (induction)
  source--;
  destination++;

  // now that we have move the biggest disck from source to destination , use the same function to move those n-1 discks from helper to destination as well
  moves += towerOfHanoi(numberOfDiscksToMove - 1, helper, destination, source);
  return moves;
}

let numberOfDiscksToMove = 3;

console.log(
  `${numberOfDiscksToMove} are moved from source to destination in ${towerOfHanoi(
    numberOfDiscksToMove,
    0,
    0,
    0
  )} moves`
);
