import React from 'react';
import PropTypes from 'prop-types';
import MsgItem from './MsgItem';

const MsgList = ({ messages, username }) =>
  messages.map(msg => (
    <MsgItem key={msg.messageId} username={username} {...msg} />
  ));

MsgList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  username: PropTypes.string.isRequired,
};

export default MsgList;
