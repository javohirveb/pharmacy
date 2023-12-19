document.querySelector('#search-input').addEventListener('input', filterList)

function filterList() {
   const searchInput = document.querySelector('#search-input')
   const filter = searchInput.value.toLocaleLowerCase()
   const listItems = document.querySelectorAll('.card__item')
   listItems.forEach((item) => {
      let text = item.textContent
      if (text.toLocaleLowerCase().includes(filter.toLocaleLowerCase())) {
         item.style.display = ''
      } else {
         item.style.display = 'none'
      }
   })
}