import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
import Footer from './Footer';

function App() {
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
      <Header>Header</Header>
      <div className='body_structure'>
        <Sidebar menu={menu}>Sidebar</Sidebar>
        <Content>Content</Content>
      </div>
      <Footer menu={menu}>Footer</Footer>
    </div>
  );
}

export default App;
