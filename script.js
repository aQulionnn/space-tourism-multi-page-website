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
    document.body.style.backgroundImage = "url(assets/home/background-home-desktop.jpg)"
  }
  else {
    document.body.style.backgroundImage = "url('/assets/destination/background-destination-desktop.jpg')"
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