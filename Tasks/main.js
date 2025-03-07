
// Array Operations Visualizer JS
let array = [];
const arrayContainer = document.getElementById("arrayContainer");
const codeDisplay = document.getElementById("codeDisplay");
const logContainer = document.getElementById("logContainer");

function updateDisplay() {
  arrayContainer.innerHTML = "";
  array.forEach((item) => {
    let element = document.createElement("div");
    element.classList.add("array-element");
    element.textContent = item;
    arrayContainer.appendChild(element);
  });
  updateCode();
}

function logAction(action) {
  let logEntry = document.createElement("div");
  logEntry.textContent = action;
  logContainer.prepend(logEntry);
}

function updateCode() {
  codeDisplay.textContent = `let array = [${array.join(
    ", "
  )}];\nconsole.log(array);`;
}

function addElement() {
  let value = document.getElementById("arrayInput").value;
  if (value.trim() !== "") {
    array.push(value);
    logAction(`array.push('${value}');`);
    updateDisplay();
    document.getElementById("arrayInput").value = "";
  }
}

function removeElement() {
  if (array.length > 0) {
    let removed = array.pop();
    logAction(`array.pop(); // Removed: ${removed}`);
    updateDisplay();
  }
}

function shiftElement() {
  if (array.length > 0) {
    let removed = array.shift();
    logAction(`array.shift(); // Removed: ${removed}`);
    updateDisplay();
  }
}

function unshiftElement() {
  let value = document.getElementById("arrayInput").value;
  if (value.trim() !== "") {
    array.unshift(value);
    logAction(`array.unshift('${value}');`);
    updateDisplay();
    document.getElementById("arrayInput").value = "";
  }
}

function sliceArray() {
  let start = parseInt(document.getElementById("sliceStart").value);
  let end = parseInt(document.getElementById("sliceEnd").value);
  if (!isNaN(start) && !isNaN(end)) {
    let slicedArray = array.slice(start, end);
    logAction(
      `let slicedArray = array.slice(${start}, ${end}); // Result: [${slicedArray}]`
    );
  } else {
    alert("Please enter valid indexes.");
  }
}

function spliceArray() {
  let start = parseInt(document.getElementById("spliceStart").value);
  let deleteCount = parseInt(document.getElementById("spliceDelete").value);
  if (!isNaN(start) && !isNaN(deleteCount)) {
    let removed = array.splice(start, deleteCount);
    logAction(
      `array.splice(${start}, ${deleteCount}); // Removed: [${removed}]`
    );
    updateDisplay();
  } else {
    alert("Please enter valid indexes.");
  }
}

function showLength() {
  logAction(`array.length; // Length: ${array.length}`);
}

function clearArray() {
  array = [];
  logAction("array = []; // Cleared");
  updateDisplay();
  logContainer.innerHTML = "";
}

// ASSIGNMENTS 40 TASKS JS 
const tasks = [
    ["Create an array with five fruit names and print the second element.", "let fruits = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango'];", "fruits[1]"],
    ["Replace the third element of an array with 'Mango' and print the updated array.", "let fruits = ['Apple', 'Banana', 'Orange', 'Grapes'];", "fruits[2] = 'Mango'; fruits"],
    ["Create an empty array and add three colors to it using push(). Print the array.", "let colors = [];", "colors.push('Red', 'Blue', 'Green'); colors"],
    ["Remove the last element of an array using pop() and print the removed element.", "let nums = [10, 20, 30, 40];", "nums.pop()"],
    ["Add two numbers at the beginning of an array using unshift() and print the array.", "let numbers = [3, 4, 5];", "numbers.unshift(1, 2); numbers"],
    ["Remove the first element of an array using shift() and print the updated array.", "let items = ['Pen', 'Pencil', 'Eraser'];", "items.shift(); items"],
    ["Print the length of an array containing four elements.", "let arr = [5, 10, 15, 20];", "arr.length"],
    ["Extract the last two elements from an array using slice() and print them.", "let animals = ['Cat', 'Dog', 'Elephant', 'Tiger', 'Lion'];", "animals.slice(-2)"],
    ["Extract the middle element(s) of an array with an even number of elements using slice().", "let data = [10, 20, 30, 40, 50, 60];", "data.slice(data.length / 2 - 1, data.length / 2 + 1)"],
    ["Replace two middle elements in an array using splice() and print the updated array.", "let nums = [1, 2, 3, 4, 5, 6];", "nums.splice(2, 2, 99, 100); nums"],
    ["Create an array of three cities and add a new city at the end using push().", "let cities = ['New York', 'Los Angeles', 'Chicago'];", "cities.push('San Francisco'); cities"],
    ["Remove the last city from an array using pop() and print the updated array.", "let cities = ['New York', 'Los Angeles', 'Chicago'];", "cities.pop(); cities"],
    ["Add two new colors to the beginning of an array using unshift() and print the array.", "let colors = ['Red', 'Blue', 'Green'];", "colors.unshift('Yellow', 'Purple'); colors"],
    ["Remove the first color from an array using shift() and print the removed color.", "let colors = ['Red', 'Blue', 'Green'];", "let removedColor = colors.shift(); removedColor"],
    ["Use push() twice to add two new names to an array and print the array.", "let names = ['John', 'Jane'];", "names.push('Alice', 'Bob'); names"],
    ["Use pop() on an array of five elements and check if the length is now four.", "let numbers = [1, 2, 3, 4, 5];", "numbers.pop(); numbers.length"],
    ["Use shift() on an array with three elements and print the updated array.", "let items = ['Pen', 'Pencil', 'Eraser'];", "items.shift(); items"],
    ["Use unshift() to add a new number at the beginning of an array and print it.", "let numbers = [1, 2, 3];", "numbers.unshift(0); numbers"],
    ["Create an array of three numbers, remove the last one using pop(), and print the remaining array.", "let numbers = [10, 20, 30];", "numbers.pop(); numbers"],
    ["Create an array with three elements, remove the first using shift(), and print the updated array.", "let numbers = [10, 20, 30];", "numbers.shift(); numbers"],
    ["Extract the first three elements from an array using slice() and print them.", "let arr = [10, 20, 30, 40, 50];", "arr.slice(0, 3)"],
    ["Extract elements from index 2 to 4 using slice() and print them.", "let arr = [10, 20, 30, 40, 50, 60];", "arr.slice(2, 5)"],
    ["Remove two elements from an array starting from index 1 using splice().", "let arr = [5, 10, 15, 20, 25];", "arr.splice(1, 2); arr"],
    ["Insert 'Lemon' and 'Orange' at index 2 in an array using splice() and print the updated array.", "let fruits = ['Apple', 'Banana', 'Grapes', 'Mango'];", "fruits.splice(2, 0, 'Lemon', 'Orange'); fruits"],
    ["Remove the last two elements using splice() and print the modified array.", "let colors = ['Red', 'Blue', 'Green', 'Yellow', 'Black'];", "colors.splice(-2, 2); colors"],
    ["Use splice() to add three new numbers at the beginning of an array and print the array.", "let numbers = [10, 20, 30, 40];", "numbers.splice(0, 0, 1, 2, 3); numbers"],
    ["Create an array with six elements, extract the last four using slice(), and print them.", "let data = [5, 10, 15, 20, 25, 30];", "data.slice(-4)"],
    ["Use slice() on an array and check if the original array remains unchanged.", "let original = ['A', 'B', 'C', 'D', 'E'];", "let copy = original.slice(1, 4); [original, copy]"],
    ["Use splice() to remove one element from the middle of an array and print the updated array.", "let nums = [1, 2, 3, 4, 5, 6];", "nums.splice(3, 1); nums"],
    ["Use splice() to replace two elements in an array and print the modified array.", "let nums = [1, 2, 3, 4, 5, 6];", "nums.splice(2, 2, 99, 100); nums"],
    ["Assign an array to another variable and modify the original array. Print both variables.", "let arr1 = [1, 2, 3]; let arr2 = arr1; arr1.push(4);", "[arr1, arr2]"],
    ["Create a function that adds an element to an array and check if the original array changes.", "let arr = [5, 6, 7]; function addElement(array) { array.push(8); }", "addElement(arr); arr"],
    ["Pass an array to a function, modify its first element, and print the modified array.", "let nums = [10, 20, 30]; function modifyFirstElement(array) { array[0] = 99; }", "modifyFirstElement(nums); nums"],
    ["Create an array, pass it to another variable, modify the second variable, and print both.", "let original = ['a', 'b', 'c']; let copy = original; copy[1] = 'z';", "[original, copy]"],
    ["Check if two variables referencing the same array are equal after modifying one.", "let arrA = [1, 2, 3]; let arrB = arrA; arrA.push(4);", "arrA === arrB"],
    ["Create an array, pass it to a function that removes an element, and print the result.", "let items = ['apple', 'banana', 'cherry']; function removeLast(array) { array.pop(); }", "removeLast(items); items"],
    ["Store an array in two different variables, modify one using push(), and print both.", "let x = [7, 8, 9]; let y = x; y.push(10);", "[x, y]"],
    ["Use pop() on an array inside a function and see if the original array changes.", "let elements = ['one', 'two', 'three']; function removeElement(arr) { arr.pop(); }", "removeElement(elements); elements"],
    ["Pass an array to a function that changes its length and check the effect.", "let numbers = [1, 2, 3, 4, 5]; function shortenArray(arr) { arr.length = 3; }", "shortenArray(numbers); numbers"],
    ["Create two separate arrays with identical elements and check if they are strictly equal.", "let firstArray = [1, 2, 3]; let secondArray = [1, 2, 3];", "firstArray === secondArray"]
];




// Populate tasks dynamically
const tasksContainer = document.getElementById("tasksContainer");
tasks.forEach((task, index) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add('task');
    taskDiv.innerHTML = `
        <h2>Task ${index + 1}</h2>
        <p>${task[0]}</p>
        <button class="btn btn-info" onclick="toggleSolution(${index})">Show Solution</button>
        <div class="code-display" id="codeDisplay${index}">
            <strong>Code:</strong><br><pre>${task[1]} <br>${task[2]}</pre>
            <strong>Execution Result:</strong><br><pre id="result${index}"></pre>
        </div>
    `;
    tasksContainer.appendChild(taskDiv);
});

// Function to toggle the solution display
function toggleSolution(index) {
    const solutionDiv = document.getElementById(`codeDisplay${index}`);
    const resultDiv = document.getElementById(`result${index}`);

    if (solutionDiv.style.display === "none" || solutionDiv.style.display === "") {
        solutionDiv.style.display = "block";
        try {
            let taskCode = `${tasks[index][1]} \n ${tasks[index][2]}`;
            let result = eval(taskCode);
            resultDiv.innerHTML = result !== undefined ? JSON.stringify(result, null, 2) : "Executed Successfully";
        } catch (error) {
            resultDiv.innerHTML = `<strong>Error:</strong> ${error.message}`;
        }
    } else {
        solutionDiv.style.display = "none";
    }
}