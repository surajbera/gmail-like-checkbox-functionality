import './style.css'
import './reset.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
import { taskLists } from './tasks'

const renderTasks = (taskLists) => {
  return taskLists
    .map((task) => {
      return `
      <li class="task">
        <input class="task-check" type="checkbox" />
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
