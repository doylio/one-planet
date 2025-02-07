export const shuffle = <T>(arr: T[]) => {
  const result = [] as T[];
  while (arr.length > 0) {
    let index = Math.floor(Math.random() * arr.length);
    if (index === arr.length) index = arr.length - 1;
    const [removed] = arr.splice(index, 1);
    result.push(removed);
  }
  return result;
};

export const pickWeighted = <T>(arr: { weight: number; value: T }[]) => {
  const totalWeight = arr.reduce((acc, curr) => acc + curr.weight, 0);
  const random = Math.random() * totalWeight;
  let cumulativeWeight = 0;
  for (const item of arr) {
    cumulativeWeight += item.weight;
    if (random < cumulativeWeight) {
      return item.value;
    }
  }
};
