import UserModel from './modeluser'; //'../models/users';


const User = {
  //Server response to POST verb for user creation
  create(req, res) {
    if (!req.body.firstName && !req.body.lastName && !req.body.prefEmail) {
      return res.status(400).send({'message': 'All fields are required'})
    }
    const currentUser = UserModel.create(req.body);
    return res.status(201).send(currentUser);
  },
  
  // Server response to GET verb for listing users
  view(req, res) {
    const users = UserModel.getAll();
    return res.status(200).send(users);
  },
  
  // Server response to GET verb that retrieves a user account
  viewOne(req, res) {
    const currentUser = UserModel.getOne(req.params.id);
    if (!currentUser) {
      return res.status(404).send({'message': 'user not found'});
    }
    return res.status(200).send(currentUser);
  },
  
  // 
  update(req, res) {
    const currentUser = UserModel.getOne(req.params.id);
    if (!currentUser) {
      return res.status(404).send({'message': 'user not found'});
    }
    const updatedUser = UserModel.update(req.params.id, req.body)
    return res.status(200).send(updatedUser);
  },

  //
  delete(req, res) {
    const currentUser = UserModel.getOne(req.params.id);
    if (!currentUser) {
      return res.status(404).send({'message': 'user not found'});
    }
    const ref = UserModel.delete(req.params.id);
    return res.status(204).send({'message': 'user deleted'});
  }
}

export default User;