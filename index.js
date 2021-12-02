const evenOccurrence = (list) => {
  const counts = {};
  list.forEach((currentNum) => {
    const currentCount = counts[currentNum];
    counts[currentNum] = (currentCount === undefined) ? 1 : -currentCount;
  });
  for (let i = 0; i < list.length; i += 1) {
    if (counts[list[i]] === -1) {
      return list[i];
    }
  }
  return null;
};

module.exports = evenOccurrence;
