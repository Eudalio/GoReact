import React, { Component } from 'react';

import Header from './header';
import Post from './post';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 0,
        nome: 'Eudálio Sousa',
        avatar: 'https://avatars3.githubusercontent.com/u/15142247?s=400&u=ee859576e2c31a59ac748a40c81fa9cb01e5caad&v=4',
        time: 'há 3 min',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec lorem ut turpis malesuada ornare id a neque. Nam pretium sem ut neque fermentum condimentum. Aenean sed mattis nulla, at fringilla turpis. Donec maximus ac risus eu dignissim. Etiam in lacus tempus, gravida odio et, molestie tortor. Morbi condimentum eros nec lorem ornare, in posuere tellus scelerisque. Proin auctor tempus lobortis. Mauris malesuada malesuada ipsum a aliquam.',
      },
      {
        id: 1,
        nome: 'Rocketseat',
        avatar: 'https://avatars3.githubusercontent.com/u/15142247?s=400&u=ee859576e2c31a59ac748a40c81fa9cb01e5caad&v=4',
        time: 'há 30 min',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec lorem ut turpis malesuada ornare id a neque. Nam pretium sem ut neque fermentum condimentum. Aenean sed mattis nulla, at fringilla turpis. Donec maximus ac risus eu dignissim. Etiam in lacus tempus, gravida odio et, molestie tortor. Morbi condimentum eros nec lorem ornare, in posuere tellus scelerisque. Proin auctor tempus lobortis. Mauris malesuada malesuada ipsum a aliquam.',
      },
      {
        id: 2,
        nome: 'Desafio 01',
        avatar: 'https://avatars3.githubusercontent.com/u/15142247?s=400&u=ee859576e2c31a59ac748a40c81fa9cb01e5caad&v=4',
        time: 'há 15 min',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec lorem ut turpis malesuada ornare id a neque. Nam pretium sem ut neque fermentum condimentum. Aenean sed mattis nulla, at fringilla turpis. Donec maximus ac risus eu dignissim. Etiam in lacus tempus, gravida odio et, molestie tortor. Morbi condimentum eros nec lorem ornare, in posuere tellus scelerisque. Proin auctor tempus lobortis. Mauris malesuada malesuada ipsum a aliquam.',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <div>
        <Header />
        <div className="posts-container">
          { posts.map(post => (
            <Post key={post.id} data={post} />
          )) }
        </div>
      </div>
    );
  }
}
