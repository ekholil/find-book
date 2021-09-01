const loadBooks = () => {
    // html selectiin
    const searchField = document.getElementById('search')
    const searchBtn = document.getElementById('search-btn')
    const result = document.getElementById('result')
    const container = document.getElementById('container')
    //add event listener
    searchBtn.addEventListener('click', function(){
        const searchText = searchField.value;
               //console.log(searchText)
        const url = `https://openlibrary.org/search.json?q=${searchText}`
        
        fetch(url)
        .then(res => res.json())
        .then(data => showData(data))
    })

    // function for show book data 
    const showData = data => {
        if(data.numFound === 0){
            result.innerText = `No result found for ${searchField.value}`
            
        } else {
            result.innerText = `${data.numFound} Result Found for ${searchField.value}`
            
        }
        const books = data.docs.slice(0,20)
        container.innerHTML = ''
        books.forEach(book => {
            
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            <div class="card shadow h-100">
                <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="..." height="350px">
                <div class="card-body">
                  <h5 class="card-title">Title : ${book.title}</h5>
                  <p class="card-text">Author : ${book.author_name}</p>
                  <p class="card-text">First Publish Year : ${book.first_publish_year}  </p>
                </div>
              </div>
            `
            container.appendChild(div)
            console.log(book)
        })
    }   
}

loadBooks()