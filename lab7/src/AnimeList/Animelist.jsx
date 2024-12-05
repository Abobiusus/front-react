export const fetchAnimeList = async () => {
  const url = "https://graphql.anilist.co";

  const query = `
    query {
      Page(page: 1, perPage: 10) {
        media(sort: POPULARITY_DESC, type: ANIME) {
          title {
            english
          }
        }
      }
    }
  `;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });
    const data = await response.json();
    const animeList = data.data.Page.media;

    var animereturn = ["Список популярних аніме:"]
    animeList.forEach((anime, index) => {
      const title = anime.title.english ;
      animereturn.push(`\n${index + 1}. ${title}`);
    });
    
    return animereturn
};

