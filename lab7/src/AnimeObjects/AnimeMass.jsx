import { AnimeObj } from './AnimeObject';

export function AnimeMass({ animeList }) { 
    if (Array.isArray(animeList)) {
      const animeTag = animeList.map((title, index) => (
        <AnimeObj key={index} title={title} index={index} />
      ));
      return <div className='animelist'>{animeTag}</div>;
    } else {
      return <div className='animelist'>No data available</div>;
    }
  }
