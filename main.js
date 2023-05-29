import './style.css'
import './reset.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
import { taskLists } from './tasks'

const generateSlug = (str) => {
  return str.toLowerCase().replace(/ /g, '-')
}

const renderTasks = (taskLists) => {
  return taskLists
    .map((task) => {
      return `
      <li class="task">
        <input class="task-check" data-val=${generateSlug(task)} type="checkbox" />
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
/* HTML is ready at this point */

let lastChecked = null

const checkBoxes = document.querySelectorAll('.task-check')

const handleCheckboxClick = function (evt) {
  if (evt.shiftKey && this.checked && this !== lastChecked && lastChecked) {
    let inBetween = false

    checkBoxes.forEach((checkbox) => {
      if (checkbox === lastChecked || checkbox === this) {
        inBetween = !inBetween
      }
      if (inBetween) {
        checkbox.checked = true
      }
    })
  }

  lastChecked = this
}

checkBoxes.forEach((checkbox) => checkbox.addEventListener('click', handleCheckboxClick))
