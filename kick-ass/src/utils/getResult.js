export function getResult(items, limit) {
  items = items.reduce(
    (acc, curr) => [...acc, { ...curr, weight: curr.distance * 2 }],
    []
  );

  items = items.sort((a, b) => {
    return b.urgency - a.urgency;
  });

  var m = Array(items.length);

  for (var i = 0; i < m.length; i++) {
    m[i] = Array(limit + 1);
    m[i][0] = 0;
  }

  for (var j = 0; j <= limit; j++) {
    m[0][j] = 0;
  }

  for (var item = 1; item < m.length; item++) {
    for (var weight = 1; weight <= limit; weight++) {
      if (items[item].weight > weight) {
        m[item][weight] = m[item - 1][weight];
      } else {
        m[item][weight] = Math.max(
          items[item].urgency + m[item - 1][weight - items[item].weight],
          m[item - 1][weight]
        );
      }
    }
  }

  var solution = getSolution(items, limit, m);
  console.log(solution)

  return items.reduce(
    (acc, curr, index) =>
      solution?.some((item) => item === index) ? [...acc, curr] : acc,
    []
  );
}

function getSolution(items, limit, m) {
  var weight = limit;
  var solution = [];

  for (var item = m.length - 1; item > 0; item--) {
    if (m[item][weight] !== m[item - 1][weight]) {
      solution.push(item);
      weight = weight - items[item].weight;
    }
  }

  return solution;
}