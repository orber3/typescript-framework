import {User} from './models/User'

const user =  new User({  name: 'melmel' , age: 2 })

// const on  = user.on
// on('change' , () => { console.log('3232')})

// const trigger = user.trigger
// trigger('change')


user.on('save', () => { 
  console.log(user)

})

user.save()