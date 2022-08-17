Describe: for()

Test: "It should return 1 and 2 if we input 1 and 2."

Code:
const inputArray = [1,2]
let outputArray = [];
for (let index = 0; index < inputArray.length; index +=1) {
  outputArray.push(inputArray[index]);
};

Expected Output: 
1
2