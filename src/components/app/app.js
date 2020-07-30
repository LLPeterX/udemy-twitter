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
    this.addPost = this.addPost.bind(this);
  }

  deletePost(id) {
    //this.setState(({data}) => {data: data.filter(item => item.id!==id)});
    this.setState(({ data }) => ({ data: data.filter(item => item.id !== id) }));
  }

  addPost(label,important=false) {
    //const id = Math.max.apply(Math, this.state.data.map((post) => post.id)) + 1;
    //const newPost = { label,  id, important: false };
    //this.setState(({data}) => ({data: data.concat([newPost])})); можно так
    this.setState(({ data }) => ({
      data: [...data,
      {
        label, id: Math.max.apply(Math, this.state.data.map((post) => post.id)) + 1,
        important
      }]
    }));
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
        <PostAddForm
          onAddPost={this.addPost} />
      </StylizedAppBlock>
    );
  }
}

export default App;