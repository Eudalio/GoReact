import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = props => (
  <div className="postHeader">
    <img className="avatar" src={props.avatar} alt="avatar" />
    <div className="dataHeader">
      <p className="nome">{props.nome}</p>
      <span className="hora">{props.time}</span>
    </div>
  </div>
);

PostHeader.propTypes = {
  nome: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default PostHeader;
