function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list li');

  for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n).toString();
}
}

function deepestChild() {
    let current = document.getElementById('grand-node');
    return current;
    let result = null;
    while (current) {
      result = current
      current = current.firstChild;

    }

    return result.innerHTML;
}
