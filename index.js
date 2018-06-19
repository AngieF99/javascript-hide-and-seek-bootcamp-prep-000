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
 var lis = document.querySelectorAll('ul.ranked-list li')
 for (let i = 0; i < lis.length; i++ ) {
    lis[i].innerHTML = (lis[0] + n + i).toString()
 }
}