// Functionality of the logic
const sum = (data) => {
    const separated = data.split(" ");
    let arr = separated[0].split(",").map(e => Number(e));
    let target = Number(separated[1]);
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == target) {
                console.log(arr[i] + ", " + arr[j]);
            }
        }
    }
}

module.exports = {
    sum
}