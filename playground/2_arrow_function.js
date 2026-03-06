// const square = function (x) {
//   return x * x;
// };

// const square = (x) => {
//   return x * x;
// };

// const square = (x) => x * x;

// console.log(square(3));

// const event = {
//   name: "Birthday Party",
//   guestList: ["Guest1", "Guest2", "Guest3"],
//   printGuestList() {
//     console.log("Guest List for " + this.name);
//     this.guestList.forEach((guest) => {
//       console.log(guest + " is attending " + this.name);
//     });
//   },
// };

// console.log(event.printGuestList());

const tasks = {
  tasks: [
    {
      text: "Grocery shopping",
      completed: true,
    },
    {
      text: "Clean yard",
      completed: false,
    },
    {
      text: "Film course",
      completed: false,
    },
  ],
  getTasksToDo() {
    return this.tasks.filter((task) => task.completed === false);
  },
};

console.log(tasks.getTasksToDo());
