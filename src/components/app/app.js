import React from 'react';
import './app.css';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel/search-panel'
import PostStatusFilter from '../post-status-filter'
import PostList from '../post-list'
import PostAddForm from '../post-add-form'

const App = () => {
  // data - эмуляция того, что пришло с сервера
  let data = [
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
  ];

  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList posts={data} />
      <PostAddForm />
    </div>
  );
}

export default App;