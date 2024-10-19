// const route = (event) => {
//   event  = event || window.event
//   event.preventDefault()
//   window.history.pushState({}, '', event.target.href)
//   handleLocation()
// }

// const routes = {
//   '/': '/home.html',
//   '/destination': '/pages/destination/destination-moon.html'
// }

// const handleLocation = async () => {
//   const path = window.location.pathname
//   const route = routes[path]
//   const html = await fetch(route).then((data) => data.text())
//   document.getElementById('main').innerHTML = html
//   if (path !== '/'){
//     document.body.style.backgroundImage = "url('/assets/destination/background-destination-desktop.jpg')"
//   }
//   else {
//     document.body.style.backgroundImage = "url(assets/home/background-home-desktop.jpg)"
//   }
// }

// window.onpopstate = handleLocation
// window.route = route

// handleLocation()