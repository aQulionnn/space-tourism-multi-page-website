const route = (event) => {
  event  = event || window.event
  event.preventDefault()
  window.history.pushState({}, '', event.target.href)
  handleLocation()
}

const routes = {
  '/': '/pages/home.html',
  '/destination': '/pages/destination/destination-moon.html'
}

const handleLocation = async () => {
  const path = window.location.pathname
  const route = routes[path]
  const html = await fetch(route).then((data) => data.text())
  document.getElementById('main').innerHTML = html
  if (path == '/'){
    if (window.innerWidth > 1024) {
      document.body.style.backgroundImage = "url(assets/home/background-home-desktop.jpg)"
    }
    else if (window.innerWidth > 480 && window.innerWidth < 1024) {
      document.body.style.backgroundImage = "url(assets/home/background-home-tablet.jpg)"
    }
    else if (window.innerWidth < 481) {
      document.body.style.backgroundImage = "url(assets/home/background-home-mobile.jpg)"
    }
  }
  else if (path == '/destination') {
    if (window.innerWidth > 1024) {
      document.body.style.backgroundImage = "url('/assets/destination/background-destination-desktop.jpg')"
    }
    else if (window.innerWidth > 480 && window.innerWidth < 1024) {
      document.body.style.backgroundImage = "url('/assets/destination/background-destination-tablet.jpg')"
    }
    else if (window.innerWidth < 481) {
      document.body.style.backgroundImage = "url('/assets/destination/background-destination-mobile.jpg')"
    }
  }
}

window.onpopstate = handleLocation
window.route = route

handleLocation()



var isNavbarOpened = false 

const navbar = document.getElementById('navbar')
const openNavberIcon = document.getElementById('open-navbar')

const openNavbar = () => {
  console.log(isNavbarOpened)
  if (isNavbarOpened == false){
    navbar.style.display = 'grid'
    openNavberIcon.style.backgroundImage = "url(assets/shared/icon-close.svg)"
    isNavbarOpened = true
  }
  else {
    navbar.style.display = 'none'
    openNavberIcon.style.backgroundImage = "url(assets/shared/icon-hamburger.svg)"
    isNavbarOpened = false
  }
}