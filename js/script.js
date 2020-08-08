// dung thu vien waypoint quan ly su kien scroll
const makeWaypoint = () => {
  const main = document.querySelector('main')

  Array.from(main.children).forEach((child) => {
    new Waypoint({
      element: child,
      handler: function (direction) {
        if (direction === 'down') {
          scrollSpy(this.element.className)
          //
          if (this.element.className === 'tech') {
            progressBarRun()
          }
        }
      },
      offset: 20,
    })
    new Waypoint({
      element: child,
      handler: function (direction) {
        if (direction === 'up') scrollSpy(this.element.className)
      },
      offset: -20,
    })
  })
}

const scrollSpy = (className) => {
  // the <a>
  let navLink = document.querySelector(`a[href="#${className}"]`)

  // the <li>
  let navItem = navLink.parentElement

  // them class cho the <li> tuong ung voi section da scroll toi
  navItem.classList.add('active')
  siblingsElements(navItem).forEach((item) => {
    item.classList.remove('active')
  })
}

const siblingsElements = (elm) => {
  let siblings = []
  let firstChild = elm.parentElement.firstElementChild

  while (firstChild) {
    if (firstChild !== elm) {
      siblings.push(firstChild)
    }
    firstChild = firstChild.nextElementSibling
  }

  return siblings
}

const showNav = () => {
  const nav = document.querySelector('.navigation')
  const btn = document.querySelector('.navigation__btn')

  btn.addEventListener('click', (e) => {
    nav.classList.toggle('active')
    btn.classList.toggle('close')
  })
}

const progressBarRun = () => {
  const pgbar = document.querySelectorAll('.pgbar')

  for (let i = 0; i < 6; ++i) {
    setTimeout(() => {
      pgbar[i].classList.add('active')
    }, i * 200)
  }
}

const run = () => {
  showNav()
  makeWaypoint()
}

run()
