const MAX_WORDS = 80; // Maximum number of words to show

// Your API key from NewsAPI
const apiKey = '4ec45d58d6f04f82b59be673e5baf490';

// URL to fetch top headlines
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

// Fetch the news articles from the API
fetch(url)
    .then(response => response.json())
    .then(data => {
        const articles = data.articles;

        // Iterate over the articles and create Bootstrap cards for each one
        articles.forEach(article => {
            let truncatedText = '';
            if (article.description) {
                const words = article.description.split('');
                const truncatedWords = words.slice(0, MAX_WORDS);
                truncatedText = truncatedWords.join('') + '...';
            }
            const card = `
        <div class="col-md-4 mb-3">
          <div class="card">
            <img src="${article.urlToImage}" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">${article.title}</h5>
              <p class="card-text">${truncatedText}</p>
              <a href="${article.url}" target="_blank" class="btn btn-primary">Read more</a>
            </div>
          </div>
        </div>
      `;
            $('#news-cards').append(card);
        });
    })
    .catch(error => console.error(error));
