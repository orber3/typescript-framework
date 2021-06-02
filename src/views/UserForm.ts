import { User } from "../models/User";


export class UserForm { 
  constructor(
    public parent: Element , 
    public model: User,
     ) 
     {  
      this.bindlmodel()
  }

    bindlmodel() : void { 

      this.model.on('change', () => {
        this.render()
      })
    }

  eventsMap(): {[key: string]: () => void} { 

    return {
      'click:.set-age': this.onSetAge,
      'click:.set-name': this.onSetName,

      
    }
          }
          onSetAge = (): void => { 
            
        this.model.setRandomAge()
        }


      onSetName = (): void => { 
          const input = this.parent.querySelector('input')
          if(input) { 
          const name = input.value

        this.model.set({name})
          }
        }

  
template(): string { 

        return `
        <div> 
        <h1> user form </h1>
        <div> 
          user name: ${this.model.get('name')}
          <br>
          user age: ${this.model.get('age')}

        </div>
        <input />
        <button class="set-name"> change name </button>
        <button class="set-age"> set random age  </button>

        </div>
        `;
      }


      bindEvents(fragment: DocumentFragment): void { 
        const eventsMap = this.eventsMap()
        for(let eventKey in eventsMap) { 

         const [eventName , selector] = eventKey.split(':');

         fragment.querySelectorAll(selector).forEach(element => {
          element.addEventListener(eventName, eventsMap[eventKey])

         })
        }

      }



render(): void { 

  this.parent.innerHTML=''
  const templateElement = document.createElement('template')

  templateElement.innerHTML = this.template() ; 

  this.bindEvents(templateElement.content)

  this.parent.append(templateElement.content)
}


}