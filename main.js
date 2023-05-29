import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
import { taskLists } from './tasks'

const renderTasks = (taskLists) => {
  return taskLists
    .map((task) => {
      return `
      <li class="task">
        <span class="task-check"><input type="checkbox" /></span>
        <span class="task-text">${task}</span>
      </li>
    `
    })
    .join('')
}

document.querySelector('#app').innerHTML = `
  <ul class="tasks-wrapper">
    ${renderTasks(taskLists)}
  </ul>
`
