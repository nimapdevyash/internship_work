function reverseStack(st: number[]): void {
  if (st.length === 0) {
    return;
  }

  let topElement = st.pop()!;

  reverseStack(st);

  insertAtBottom(st, topElement);
}

function insertAtBottom(st: number[], topElement: number): void {
  if (st.length === 0) {
    st.push(topElement);
    return;
  }

  let num = st.pop()!;

  insertAtBottom(st, topElement);

  st.push(num);
}

let stak = [1, 2, 3, 4, 5, 6];

reverseStack(stak);

console.log(stak);
