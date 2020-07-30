import React from 'react';
//import './app.css';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel/search-panel'
import PostStatusFilter from '../post-status-filter'
import PostList from '../post-list'
import PostAddForm from '../post-add-form'
import styled from 'styled-components'

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;
const StylizedAppBlock = styled(AppBlock)`border: 1px solid gray; border-radius: 2px; padding: 10px;`;

class App extends React.Component {
  // data - эмуляция того, что пришло с сервера
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          label: "Однажды в студёную зимнюю пору я из лесу вышел. Был сильный мороз. Гляжу - поднимается медленно в гору лощадка, везущая хворосту воз. А волк был голодный и злобный ужасно, Всю жизнь он мечтал о козле..",
          important: false,
          id: 1
        },
        {
          label: "Маша - дура",
          important: true,
          id: 2
        },
        {
          label: "Тестируем <b>Реакт</b>",
          important: false,
          id: 3
        }
      ]
    };
    this.removeItem = this.deletePost.bind(this);
  }

  deletePost(id) {
    //this.setState(({data}) => {data: data.filter(item => item.id!=id)});
    this.setState(({ data }) => ({ data: data.filter(item => item.id !== id ) }));
  }

  render() {
    return (
      <StylizedAppBlock>
        <AppHeader />
        <div className="search-panel d-flex">
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList
          posts={this.state.data}
          onDelete={id => this.deletePost(id)} />
        <PostAddForm />
      </StylizedAppBlock>
    );
  }
}

export default App;