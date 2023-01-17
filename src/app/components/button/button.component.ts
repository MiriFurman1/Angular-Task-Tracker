import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
@Input() text:string ="add";
@Input() color:string="black";



onClick(){
  console.log("add");
}

}
