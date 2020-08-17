// scrollSpy with Waypoint library
// make waypoints for every section in main
const makeWaypoint = () => {
  // header
  new Waypoint({
    element: document.querySelector('.header'),
    handler: function (direction) {
      if (direction === 'down') {
        scrollSpy(this.element.className)
      }
    },
    offset: 100,
  })

  new Waypoint({
    element: document.querySelector('.header'),
    handler: function (direction) {
      if (direction === 'up') {
        scrollSpy(this.element.className)
      }
    },
    offset: -100,
  })

  // main sections
  const main = document.querySelector('main')

  Array.from(main.children).forEach((child) => {
    if (child.className !== 'about') {
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
        offset: 100,
      })
      new Waypoint({
        element: child,
        handler: function (direction) {
          if (direction === 'up') scrollSpy(this.element.className)
        },
        offset: -100,
      })
    }
  })
}

const fade = () => {
  let elms = document.querySelectorAll('[class*=fade-]')
  console.log(elms)

  elms.forEach((elm) => {
    new Waypoint({
      element: elm,
      handler: function () {
        this.element.classList.add('active')
      },
      offset: 500,
    })
  })
}

// make scrollspy for every section in main
const scrollSpy = (className) => {
  let navLink = document.querySelectorAll(`a[href="#${className}"]`)
  let smallNavBtn = document.querySelector('.navigation--small__btn')
  let smallNavList = document.querySelector('.navigation--small > ul')

  navLink.forEach((link) => {
    let navItem = link.parentElement
    navItem.classList.add('active')
    smallNavList.classList.remove('active')
    smallNavBtn.classList.remove('opened')

    siblingsElements(navItem).forEach((item) => {
      item.classList.remove('active')
    })
  })
}

// find siblings of given element
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

// const showNav = () => {
//   const nav = document.querySelector('.navigation')
//   const btn = document.querySelector('.navigation__btn')

//   btn.addEventListener('click', (e) => {
//     nav.classList.toggle('active')
//     btn.classList.toggle('close')
//   })
// }

// animate progessbar
const progressBarRun = () => {
  const pgbar = document.querySelectorAll('.pgbar')

  for (let i = 0; i < 6; ++i) {
    setTimeout(() => {
      pgbar[i].classList.add('active')
    }, i * 200)
  }
}

// animate navgation bar in small device
const toggleSmallNav = () => {
  let btn = document.querySelector('.navigation--small__btn')
  let list = document.querySelector('.navigation--small > ul')

  btn.addEventListener('click', () => {
    list.classList.toggle('active')
    btn.classList.toggle('opened')
  })
}

// main fucntion
const run = () => {
  makeWaypoint()
  toggleSmallNav()
  fade()
  // showNav()
}

run()
