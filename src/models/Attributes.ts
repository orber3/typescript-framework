import {UserProps} from './User'

export class Attributes { 


  constructor(private data: UserProps) {}

  get(propName: string): (string | number) { 
    
    return this.data[propName]
  }

  set(update: UserProps): void { 

    Object.assign(this.data , update)

  }

}