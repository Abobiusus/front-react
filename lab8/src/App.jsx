import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
import Footer from './Footer';
import { Provider } from 'react-redux';
import {fetchAnimeList} from "./AnimeList/Animelist"
import {AnimeMass} from './AnimeObjects/AnimeMass';
import store from './Store';
import { useState, useEffect } from 'react';

function App() {

  const [animeList, setAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAnimeList()
      .then((data) => {
        setAnimeList(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  let menu = [
    {"text":"youtube",
     "url":"https://www.youtube.com/"
  },
    {"text":"main",
     "url":"http://localhost:3000/"
  },
    {"text":"aboba"},
    {"text":""},
  ]
  return (
    <div className="App">
      <Provider store={store}>
      <Header>Header</Header>
      <div className='body_structure'>
        <Sidebar>Sidebar</Sidebar>
        <Content>Content
            {isLoading ? (
              <div>Loading...</div>
                ) : (
            <AnimeMass animeList={animeList} />)}
        </Content>


      </div>
      <Footer>Footer</Footer>
      </Provider>
    </div>
  );
}

export default App;
