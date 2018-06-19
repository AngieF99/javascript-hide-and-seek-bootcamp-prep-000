function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
   return document.querySelector('#nested .target')
}

function deepestChild(){
  return document.querySelector('#grand-node div div div div')
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('.ranked-list')
  const firstList= lis[0]
  const secondList=lis[1]
  
  var children = firstList.children 
  for (let i = 0, l = children.length; i < l; i++) {
    parseInt(children[i].innerHTML)
    children[i].innerHTML= n + i + 1
  }
      children = secondList.children
      for (let i = 0, l = children.length; i < l; i++) {
        parseInt(children[i].innerHTML)
        children[i].innerHTML= 12 - i + n
 }
}