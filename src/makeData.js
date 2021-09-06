import namor from "namor";

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

function newTask() {
  const statusChance = Math.random();
  return {
    title: namor.generate({ words: 1, numbers: 0 }),
    progress: Math.floor(Math.random() * 10),
    status:
      statusChance === 1 ? "close" : statusChance > 0 ? "in progress" : "open",
  };
}

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map((d) => {
      return {
        ...newTask(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}
