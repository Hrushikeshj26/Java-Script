// find aur findIndex

const myTasks = [
  { id: 1, task: "Install Expo CLI", completed: true },
  { id: 2, task: "Setup React Native Navigation", completed: false },
  { id: 3, task: "Clean Asus TUF keyboard", completed: false }
];


function getTaskName(taskId){
    let found = myTasks.find( task => task.id == taskId )


    return found.task;
    
}

let find = myTasks.findIndex( num => num.id == 3 )

myTasks[find].completed = true;

console.log(find);
console.log(myTasks);

console.log(getTaskName(2));
