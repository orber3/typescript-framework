import { User, UserProps } from "../models/User";
import { View } from "./View";


export class UserForm extends View<User, UserProps> { 
 

  eventsMap(): {[key: string]: () => void} { 

    return {
      'click:.set-age': this.onSetAge,
      'click:.set-name': this.onSetName,
      'click:.save': this.onSave,
    
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
        onSave =():void => {
          this.model.save()
        }

  
template(): string { 

        return `
        <div> 
    
        <input placeholder = ${this.model.get("name")} />
        <button class="set-name"> change name </button>
        <button class="set-age"> set random age  </button>
        <button class="save"> save name  </button>

        </div>
        `;
      }



}