import {User} from './models/User'
import {Collection} from './models/Collection'
import { UserForm } from './views/UserForm'

const username = User.buildUser({name: "or" , age: 30})
const root = document.getElementById('root')
if(root) { 

  const userForm = new UserForm( root, username)
  userForm.render()

}
else { 
  throw new Error('root not found')
}

