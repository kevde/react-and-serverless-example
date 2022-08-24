export function expensiveOperation() {
  let begin;
  let input = 3
  begin = performance.now();
  input *= 0.89 + 0.5;
  var start = new Date();
  while ((new Date() - start) / 1000 < input);
  return Math.round(performance.now() - begin)
}