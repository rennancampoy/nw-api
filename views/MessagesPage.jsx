import React from 'react'

function MessagesPage({ messages }) {
  return (
    <ul style={{ 'list-style-type' : 'none' }}>
      {messages.map(({ id, from, target_id, message } = message.dataValues) => {
        return <div>
          <li>Id: {id}</li>
          <li>From: {from}</li>
          <li>To: {target_id}</li>
          <li>Message: {message}</li>
          <br/>
        </div>
      })}
    </ul>
  )
}

module.exports = MessagesPage;
