function submitForm (event) {
event.preventDefault();
let countBy = document.getElementById("user-count-by").value;
let countTo = document.getElementById("user-count-to").value;
let inputArray = [countTo];
//let outputArray = [];
for (let index = 0; index <= countTo; index +=countBy) {
  //countBy+=
  //outputArray.push(inputArray[index]);
  //console.log(submitForm())
};
}

window.addEventListener("load", function () {
  const form = document.getElementById("numberForm");
  form.addEventListener("submit", submitForm);
}
)

//> const array = [0,1,2,3,4,5];
//> let doubledArray = [];
//> for (let index = 0; index < array.length; index +=1) {
  ///doubledArray.push(array[index] * 2);
//}
///> doubledArray;
//(6) [0, 2, 4, 6, 8, 10]

//index < userCount/countBy
/*
Array = [CountBy, CountBy+=, CountBy+=,....CountTo]
for (let index=0; index <= CountTo; index +)
*/