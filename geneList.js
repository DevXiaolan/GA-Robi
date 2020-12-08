
function randomGeneList() {
  const geneList = Array.from(new Array(243), () => Math.floor(Math.random() * (6 - 0 + 1) + 0));
  return geneList;
}

function randomMoveGeneList() {
  return Array.from(new Array(243), () => 5);
}

function simpleOptimizeGeneList() {
  const geneList = randomMoveGeneList();
  return geneList.map((statu, index) => {
    const strIndex = ('00000' + index.toString(3)).slice(-5);
    if (strIndex[4] === '2') {
      return 6;
    }
    else if (strIndex[0] === '0') {
      return 2;
    }
    else if (strIndex[1] === '0') {
      return 1;
    }
    else if (strIndex[2] === '0') {
      return 4;
    }
    else if (strIndex[3] === '0') {
      return 3;
    }
    else if (strIndex[4] !== '2' && statu === 6) {
      return 5;
    }
    else {
      return statu;
    }
  });
}

module.exports = {
  randomGeneList,
  randomMoveGeneList,
  simpleOptimizeGeneList
}