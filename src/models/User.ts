import { AxiosPromise, AxiosResponse } from 'axios'
import { Attributes } from './Attributes'
import { Eventing } from './Eventing'
import { Sync} from './Sync'

export interface UserProps {
  id?: number;
  name?: string;
   age?: number


}

const rootUrl = "http://localhost:3000/users"

export class User { 

  public events: Eventing = new Eventing()
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl) 
  public attribues: Attributes<UserProps> 

  constructor(attrs: UserProps){ 
    this.attribues = new Attributes<UserProps>(attrs)
  }

    get on() { 
      return this.events.on
    }

    get trigger() { 
      return this.events.trigger
    }


    get get() { 
      return this.attribues.get
    }
    
  set(update: UserProps): void { 

  this.attribues.set(update)  
    this.events.trigger('change')
  }


    fetch(): void { 
      const id = this.attribues.get('id')
      if(typeof id  !== 'number') 
      { throw new Error('cannot fetch without an id') }
       
      this.sync.fetch(id).then((response: AxiosResponse): void => { 
        console.log(response.data)
        this.set(response.data)

      })

      }

      save(): void { 
      this.sync.save(this.attribues.getAll())
        .then((response: AxiosResponse): void => { 
          this.trigger('save')


        }).catch(() => { 
          this.trigger('error')

        })
      }

    
    

}
