function createElement () {
  const element = document.createElement('div')
  element.innerHTML = 'hello webpack！!';

  return element
}
document.body.appendChild(createElement())