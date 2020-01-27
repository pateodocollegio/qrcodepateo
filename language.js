// console.log(window.navigator.languages[0].substr(0, 2))
// console.log(getPageName())
// console.log(getContentLanguage())
// console.log(getContentLanguage().pages.find(item => item.pagename === 'index'))
console.log(getPageContent())

function getPageContent() {
  return getContentLanguage().pages.find(item => item.pagename === getPageName())
}

function getNavigatorLanguage() {
  let idiom = window.navigator.languages[0].substr(0, 2)
  if ((idiom != 'pt') && (idiom != 'es')) {
    return 'en'
  }
  return idiom
}

function getPageName() {
  let path = window.location.pathname
  let page = path.split("/").pop()
  page = page.replace(".html", "")
  if (page.length > 1) {
    return page
  }
  return "index"

}

function getContentLanguage() {
  return contents.languages.find(item => item.idiom === getNavigatorLanguage())
}