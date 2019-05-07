import React, { Component } from 'react'
import { List, Image } from 'semantic-ui-react'

// const randomUserImg = () => {
//   const num = Math.round(Math.random() * 98);
//   const MaleUser = `https://randomuser.me/api/portraits/men/${num}.jpg`;
//   const femaleUser = `https://randomuser.me/api/portraits/women/${num}.jpg`;
//   return Math.round(Math.random()) ? MaleUser : femaleUser;
// };

class EventListAttendee extends Component {
  render() {
    const {attendee} = this.props;
    return (
      <List.Item>
        <Image as='a' size='mini' circular src={attendee.photoURL}/>
      </List.Item>
    )
  }
}

export default EventListAttendee