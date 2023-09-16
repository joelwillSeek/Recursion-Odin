let fibonacci_iteration = (number) => {
  let first = 0;
  let second = 1;
  let iteration = 2;
  let solution;
  let solution_array = [];
  solution_array.push(first, second);

  do {
    let first = solution_array[iteration - 2];
    let second = solution_array[iteration - 1];
    solution = first + second;
    solution_array.push(solution);

    ++iteration;
  } while (iteration < number);

  return solution_array;
};

let fibonacci_recursion = (number) => {
  if (number < 2) {
    return number;
  }

  return fibonacci_recursion(number - 1) + fibonacci_recursion(number - 2);
};

let get_array_recursion = (number) => {
  let reco = [];
  for (let i = 0; i < number; i++) {
    reco.push(fibonacci_recursion(i));
  }
};

console.log("iterated", fibonacci_iteration(8));
console.log("recursion", get_array_recursion(8));
