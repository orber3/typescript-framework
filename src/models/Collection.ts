import { Eventing } from "./Eventing";
import { User, UserProps } from "./User";
import axios, { AxiosResponse } from 'axios'


export class Collection<T , classProps> {

  models: T[] = []
  events: Eventing = new Eventing()
constructor(
  
  public rootUrl: string,
  public deSerilaize: (json: classProps) => T 
    
  ) { }
  get on() { 
    return this.events.on
  }

  
  get trigger() { 
    return this.events.trigger
  }


fetch(): void{ 
  axios.get(this.rootUrl) .then((response: AxiosResponse) => { 
    response.data.forEach((value: classProps) => { 
      this.models.push(this.deSerilaize(value))

    })
    this.trigger('change')

  })

}



}