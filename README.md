Describe: for()

Test: "It should return 1 and 2 if we input 1 and 2."

Code:
const inputArray = [1,2]
let outputArray = [];
for (let index = 0; index < inputArray.length; index +=1) {
  outputArray.push(inputArray[index]);
};

Expected Output: [1,2]

--

Test: "Loop should count up by 10 to a max of 60

Code:
const inputArray = [1,2,3,4,5,6]
let outputArray = [];
for (let index = 0; index < inputArray.length; index +=1) {
  outputArray.push(inputArray[index] * 10);
};

Expected Output: [10,20,30,40,50,60]

--

Test: "Loop should count up by userInput up to a max of userCountTo"

Code:

Expected Output: Count to: userCountTo"40"
                 Count by: userCountBy"8"
                 Output: 8, 16, 24, 32, 40