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
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          label: "Однажды в студёную зимнюю пору я из лесу вышел. Был сильный мороз.",
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
      ],
      searchTerm: '',
      filter: ''
    };
    this.removeItem = this.deletePost.bind(this);
    this.addPost = this.addPost.bind(this);
    this.toggleImportant = this.toggleImportant.bind(this);
    this.toggleLiked = this.toggleLiked.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }

  deletePost(id) {
    this.setState(({ data }) => ({ data: data.filter(item => item.id !== id) }));
  }

  addPost(label) {
    //const nextId = this.state.data.length+1;
    if(label.length===0) return;
    const nextId = Math.max.apply(Math, this.state.data.map((post) => post.id)) + 1;  // без apply() будет NaN
    this.setState(({ data }) => ({
      data: [...data,
      {
        label, id: nextId,
        important: false,
        like: false
      }]
    }));
  }

    // вариант от Ивана
  toggleImportant(id) {
    this.setState(({ data }) => {
      const index = data.findIndex(item => item.id===id);
      const oldPost = data[index], // старый объект
            newPost = {...oldPost, important: !oldPost.important};
      // Создаем новый массив: кусок до объекта + новый объект + кусок после объекта
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

  findPostsBySearchString(items, term) {
    if(term.length === 0) {
      return items;
    }
    //return items.filter(item => item.label.toUpperCase().indexOf(term.toUpperCase())>=0);
    return items.filter(item => item.label.indexOf(term)>=0);
  }

  updateSearch(searchTerm) {
    this.setState({searchTerm});
  }


  render() {
    const likesCount = this.state.data.filter(item => item.like).length;
    const totalCount = this.state.data.length;
    const visiblePosts = this.findPostsBySearchString(this.state.data, this.state.searchTerm);
    console.log('render state:',this.state);
    return (
      <StylizedAppBlock>
        <AppHeader total={totalCount} likes={likesCount}/>
        <div className="search-panel d-flex">
          <SearchPanel onSearch={this.updateSearch}/>
          <PostStatusFilter />
        </div>
        <PostList
          posts={visiblePosts}
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