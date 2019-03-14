let list = new TaskList();
let tasks = new CompoTaskList({
    element: document.getElementById('tasks'),
    taskList: list
});
let choix1 = new Task('Choix_1', null);
let choix2 = new Task('Choix_2', null);
let choix3 = new Task('Choix_3', null);
list.add(choix1);
list.add(choix2);
list.add(choix3);

tasks.render();
