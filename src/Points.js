export const Points = () => {
  let x3 = 0.01;
  let rez = [];
  let l = 0.01;
  for (let j = 0; j < 200; j++) {
    let x0 = x3;
    for (let i = 0; i < 200; i++) {
      x0 = 1 - l * x0 * x0;
      rez.push([l, x0]);
    }
    x3 = x0;
    l += 0.01;
  }
  return rez;
};

export const Line = input => {
  let t = [];

  for (let i = -1; i < 1.5; i += 0.01) {
    t.push([input, i]);
  }
  return t;
};
