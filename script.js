function countBy(x, n) {
    let z = [];
    for (let i = 1; i <=n; i++) {
      let multiple = x * i;
      z.push(multiple);
    }
    return z;
  }