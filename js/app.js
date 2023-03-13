const apiKey = '4ec45d58d6f04f82b59be673e5baf490';
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        const articles = data.articles;

        // Iterate over the articles and create Bootstrap cards for each one
        articles.forEach(article => {
            const card = `
            <div class="col-md-4 mb-3 noteCard">
                <div class="card">
                <img src="${article.urlToImage}" alt="" style="width: 100%; height: 200px; object-fit: cover;">
                    <div class="card-body">
                        <h5 class="card-title">${article.title}</h5>
                        <p class="card-text" style="display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">${article.description}</p>
                        <a href="${article.url}" target="_blank" class="btn btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        `;

            $('#news-cards').append(card);
        });
    })
    .catch(error => console.error(error));


let search = document.getElementById('search');
search.addEventListener('input', function (e) {
    let inputVal = search.value;
    let noteCards = document.getElementsByClassName('card');
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = 'block';
        }
        else {
            element.style.display = 'none';
        }
        // console.log(cardTxt);
    })
})    