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
          important: false, like: false,
          id: 1
        },
        {
          label: "Маша - дура",
          important: true, like: false,
          id: 2
        },
        {
          label: "Тестируем <b>Реакт</b>",
          important: false, like: false,
          id: 3
        }
      ]
    };
    this.removeItem = this.deletePost.bind(this);
    this.addPost = this.addPost.bind(this);
    this.toggleImportant = this.toggleImportant.bind(this);
    this.toggleLiked = this.toggleLiked.bind(this);
  }

  deletePost(id) {
    this.setState(({ data }) => ({ data: data.filter(item => item.id !== id) }));
  }

  addPost(label) {
    this.setState(({ data }) => ({
      data: [...data,
      {
        label, id: Math.max.apply(Math, this.state.data.map((post) => post.id)) + 1,
        important: false
      }]
    }));
  }

  // вариант от Ивана
  toggleImportant(id) {
    this.setState(({ data }) => {
      const index = data.findIndex(item => item.id===id);
      const oldPost = data[index], // старый объект
            newPost = {...oldPost, important: !oldPost.important};
      const newData = [...data.slice(0,index), newPost, ...data.slice(index+1)];
      return {data: newData};
    });
  }

  // Мой вариант - покороче
  toggleLiked(id) {
    this.setState(({ data }) => {
      return {data: data.map(item => {
        if(item.id === id) {
          return {...item, like: !item.like}
        }
        return item;
      })}
    
    });
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
          onDelete={id => this.deletePost(id)}
          onToggleImportant={id => this.toggleImportant(id)}
          onToggleLiked={id => this.toggleLiked(id)}
        />
        <PostAddForm
          onAddPost={this.addPost} />
      </StylizedAppBlock>
    );
  }
}

export default App;