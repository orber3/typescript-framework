import {User} from './models/User'


const user =  new User({age: 12 , name: 'or'})

user.on('change' , () => {user.set({name: 'goool'}) })
user.on('trr' , () => {} )


user.trigger('trr')
console.log(user)
user.trigger('sdfsdf')