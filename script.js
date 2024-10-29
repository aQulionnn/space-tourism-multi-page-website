const route = (event) => {
  event = event || window.event
  event.preventDefault()
  window.history.pushState({}, "", event.target.href)
  handleLocation()
}

// const routes = {
//   "/": "/pages/home.html",
//   "/destination-moon": "/pages/destination/destination-moon.html",
//   "/destination-mars": "/pages/destination/destination-mars.html",
//   "/destination-europa": "/pages/destination/destination-europa.html",
//   "/destination-titan": "/pages/destination/destination-titan.html",
//   "/crew-commander": "/pages/crew/crew-commander.html",
//   "/crew-specialist": "/pages/crew/crew-specialist.html",
//   "/crew-pilot": "/pages/crew/crew-pilot.html",
//   "/crew-engineer": "/pages/crew/crew-engineer.html",
//   "/technology-vehicle": "/pages/technology/technology-vehicle.html",
//   "/technology-spaceport": "/pages/technology/technology-spaceport.html",
//   "/technology-capsule": "/pages/technology/technology-capsule.html"
// }

const routes = {
  "/": "/pages/technology/technology-vehicle.html"
}

const handleLocation = async () => {
  const path = window.location.pathname
  const route = routes[path]
  const html = await fetch(route).then((data) => data.text())
  document.getElementById("main").innerHTML = html
  if (path == '/')
  {
    if (window.innerWidth > 1024) {
      document.body.style.backgroundImage =
        "url('/assets/technology/background-technology-desktop.jpg')"
    } else if (window.innerWidth > 480 && window.innerWidth < 1024) {
      document.body.style.backgroundImage =
        "url('/assets/technology/background-technology-tablet.jpg')"
    } else if (window.innerWidth < 481) {
      document.body.style.backgroundImage =
        "url('/assets/technology/background-technology-mobile.jpg')"
    }
  }
  // if (path == "/") {
  //   if (window.innerWidth > 1024) {
  //     document.body.style.backgroundImage =
  //       "url(assets/home/background-home-desktop.jpg)"
  //   } else if (window.innerWidth > 480 && window.innerWidth < 1024) {
  //     document.body.style.backgroundImage =
  //       "url(assets/home/background-home-tablet.jpg)"
  //   } else if (window.innerWidth < 481) {
  //     document.body.style.backgroundImage =
  //       "url(assets/home/background-home-mobile.jpg)"
  //   }
  // }
  // else if 
  // (
  //   path == "/destination-moon" ||
  //   path == "/destination-mars" ||
  //   path == "/destination-europa" ||
  //   path == "/destination-titan"
  // ) 
  // {
  //   if (window.innerWidth > 1024) {
  //     document.body.style.backgroundImage =
  //       "url('/assets/destination/background-destination-desktop.jpg')"
  //   } else if (window.innerWidth > 480 && window.innerWidth < 1024) {
  //     document.body.style.backgroundImage =
  //       "url('/assets/destination/background-destination-tablet.jpg')"
  //   } else if (window.innerWidth < 481) {
  //     document.body.style.backgroundImage =
  //       "url('/assets/destination/background-destination-mobile.jpg')"
  //   }
  // }
  // else if 
  // (
  //   path == "/crew-commander" ||
  //   path == "/crew-specialist" ||
  //   path == "/crew-pilot" ||
  //   path == "/crew-engineer"
  // ) 
  // {
  //   if (window.innerWidth > 1024) {
  //     document.body.style.backgroundImage =
  //       "url('/assets/crew/background-crew-desktop.jpg')"
  //   } else if (window.innerWidth > 480 && window.innerWidth < 1024) {
  //     document.body.style.backgroundImage =
  //       "url('/assets/crew/background-crew-tablet.jpg')"
  //   } else if (window.innerWidth < 481) {
  //     document.body.style.backgroundImage =
  //       "url('/assets/crew/background-crew-mobile.jpg')"
  //   }
  // }
  // else if 
  // (
  //   path == "/technology-vehicle" || 
  //   path == "/technology-spaceport" ||
  //   path == "/technology-capsule"
  // )
  // {
  //   if (window.innerWidth > 1024) {
  //     document.body.style.backgroundImage =
  //       "url('/assets/technology/background-technology-desktop.jpg')"
  //   } else if (window.innerWidth > 480 && window.innerWidth < 1024) {
  //     document.body.style.backgroundImage =
  //       "url('/assets/technology/background-technology-tablet.jpg')"
  //   } else if (window.innerWidth < 481) {
  //     document.body.style.backgroundImage =
  //       "url('/assets/technology/background-technology-mobile.jpg')"
  //   }
  // }
}

window.onpopstate = handleLocation
window.route = route

handleLocation()

var isNavbarOpened = false

const navbar = document.getElementById("navbar")
const openNavberIcon = document.getElementById("open-navbar")

const openNavbar = () => {
  console.log(isNavbarOpened)
  if (isNavbarOpened == false) {
    navbar.style.display = "grid"
    openNavberIcon.style.backgroundImage = "url(assets/shared/icon-close.svg)"
    isNavbarOpened = true
  } else {
    navbar.style.display = "none"
    openNavberIcon.style.backgroundImage =
      "url(assets/shared/icon-hamburger.svg)"
    isNavbarOpened = false
  }
}
