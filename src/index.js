module.exports = function towelSort (matrix) {
  if (matrix && matrix.length > 0) {
    matrix.map((value, index) =>  {
      if (index % 2 != 0) {
        value.reverse();
      }
    });
    return [].concat(...matrix);
  }else {
    return []
  }
}