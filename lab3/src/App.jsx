import './App.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header>Header</Header>
      <div className='body_structure'>
        <Sidebar>Sidebar</Sidebar>
        <Content>Content</Content>
      </div>
      <Footer>Footer</Footer>
    </div>
  );
}

export default App;
