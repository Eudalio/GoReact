import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import PostHeader from './postHeader';

const Post = props => (
  <Fragment>
    <div className="post">
      <PostHeader avatar={props.data.avatar} nome={props.data.nome} time={props.data.time} />
      <p className="conteudo">{props.data.body}</p>
    </div>
  </Fragment>
);

Post.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nome: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
