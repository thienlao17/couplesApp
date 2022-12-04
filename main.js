(()=>{
  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  function createAppTitle(title) {
    let appTitle = document.createElement("h2");
    appTitle.classList.add('appTitle')
    appTitle.innerHTML = title;
    return appTitle;
  }

  function createCard(value) {
    const card = document.createElement('li')
    card.classList.add('cards__item')
    return {card,value}
  }
  function createCardsList() {
    const list = document.createElement('ul')
    list.classList.add('cards__list')
    return list
  }

  document.addEventListener('DOMContentLoaded',()=>{
    let count = 0 
    const currentList = []
    const numArr = shuffle([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8])
    const items = []
    const container = document.getElementById('couples-app')
    const appTitle = createAppTitle('Couples')
    const list = createCardsList()
    for(let i = 0; i < 16;i++) {
      items.push(createCard(numArr.shift()))
    }
    items.forEach((el)=> {
      el.card.addEventListener('click',()=>{
        el.card.textContent = el.value
        count++
        let some
        currentList.push(el)
        if (currentList.length>1) {
          some = currentList[count-2]
          console.log(some);
          if (count % 2 === 1) {
            el.card.style.pointerEvents = none
          }
          if (count % 2 === 0 && !(some.value === el.value)) {
            console.log(12);
            setTimeout(() => {
              el.card.textContent = ''
              some.card.textContent = ''

            }, 1000);
            count -=2
            currentList.pop()
            currentList.pop()
          }
        }
        if(count === 16) {
          setTimeout(() => {
            alert('Вы победили!')
          }, 1100);
        }
      })
      list.append(el.card)
    })
    container.append(appTitle)
    container.append(list)
  })
})()