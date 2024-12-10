import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
import Footer from './Footer';
import { Provider } from 'react-redux';
import store from './Store';

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Header>Header</Header>
        <div className='body_structure'>
          <Sidebar>Sidebar</Sidebar>
          <Content>Content</Content>
        </div>
        <Footer>Footer</Footer>
      </Provider>
    </div>
  );
}

export default App;
