const apiKey = '4ec45d58d6f04f82b59be673e5baf490';
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        const articles = data.articles;

        // Iterate over the articles and create Bootstrap cards for each one
        articles.forEach(article => {
            const card = `
                <div class="section-wrapper">
                    <div div class="section-card" >
                        <div class="card-img">
                            <img src="${article.urlToImage}"
                                alt="">
                        </div>
                        <div class="card-body">
                            <h5>${article.title}</h5>
                            <p>${article.description}</p>
                        </div>
                        <div class="buttons">
                            <a href="${article.url}" target="_blank">
                                <button type="button" class="btn btn-primary">Read more</button>
                            </a>
                            <img src="img/heart.svg" alt="" onclick="likePost()">
                        </div>
                    </div >
                </div>    
            `;
            $('#news-cards').append(card);
        });
    })
    .catch(error => console.error(error));


