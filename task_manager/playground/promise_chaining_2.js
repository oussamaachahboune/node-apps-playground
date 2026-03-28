require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("69c6928a435504c8677e5a8e")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id) => {
  await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });

  return count;
};

deleteTaskAndCount("69c526ec4c165ace4ecfd82b")
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
