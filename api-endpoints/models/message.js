import moment from 'moment';
import uuid from 'uuid';


//This class contains the array that will hold the messages messages in objects
class Message{
  
  constructor() {
    this.messages = [];
  }

  //Making use of the construction to assign values to message properties
  create(data) {
    const newMessage = {
      id: uuid.v4(),
      parentId: uuid.v4(),
      to: data.to || '',
      from: data.from || '',
      subject: data.subject || '',
      messageBody: data.messageBody || '',
      status: data.status || '',
      createdOn: moment.now()
    };
    this.messages.push(newMessage); //Adds newly created object into the array
    return newMessage;
  }
  // To list a recieved messages
  inbox(to) {
  	return this.messages.find(messageId => messageId.to === to);
 }
  
  // To list sent messages
  sent(from) {
    return this.messages.find(messageId => messageId.from === from);
  }
  
  getOne(id) {
    return this.messages.find(account => account.id === id);
  }

  // To delete or remove a message: find the message and replace/remove
  delete(id) {
    const currentMessage = this.getOne(id);
    const index = this.messages.indexOf(currentMessage);
    this.messages.splice(index, 1);
    return {};
  }
}
export default new Message();