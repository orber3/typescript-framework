import {User} from './models/User'

const user =  new User({name: 'new' , age: 33})

user.events.on('change' , () => {console.log('das') })
// user.on('trr' , () => {} )


user.events.trigger('change')
// console.log(user)
// user.trigger('sdfsdf')

user.save()