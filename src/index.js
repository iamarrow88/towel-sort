module.exports = function towelSort (matrix) {
    if(!matrix || matrix.length === 0) return [];
    let fixedArrays = matrix.slice(0, 1).flat();
    console.log(fixedArrays)

    for (let i = 1; i < matrix.length; i++) {
        if(i % 2 !== 0) {
            fixedArrays = fixedArrays.concat(matrix[i].flat().reverse());
        } else {
            fixedArrays = fixedArrays.concat(matrix[i].flat());
        }
    }
    return fixedArrays;
}
