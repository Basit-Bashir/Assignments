const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort((a, b) => a - b);
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

const medianAge =
  ages.length % 2 === 0
    ? (ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2
    : ages[Math.floor(ages.length / 2)];

const averageAge = ages.reduce((acc, age) => acc + age, 0) / ages.length;

const ageRange = maxAge - minAge;

const minAvgDiff = Math.abs(minAge - averageAge);
const maxAvgDiff = Math.abs(maxAge - averageAge);

console.log({
  minAge,
  maxAge,
  medianAge,
  averageAge,
  ageRange,
  minAvgDiff,
  maxAvgDiff,
});
