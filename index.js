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
 var lis = document.querySelectorAll('.ranked-list li')
 for (let i = 0; i < lis.length; i++ ) {
    parseInt(lis[i].innerHTML)
    lis[i].innerHTML = ( n + i) + 1 + 12
    
    
    
    
 }
}