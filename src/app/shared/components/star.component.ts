import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
@Component({
    
    selector: 'ai-star',
    templateUrl: './star.component.html',
    styleUrls:['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating:number;
    @Output() ratingClicked:EventEmitter<string> = new EventEmitter<string>();
     starWidth:number;
     ngOnChanges():void{
        console.log(`Into OnChanges rating value:${this.rating}`)  
        this.starWidth=this.rating * 86/5; 
      
      }

    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }
    
}