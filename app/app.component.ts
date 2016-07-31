var Horizon = require("@horizon/client/dist/horizon");
import {Component, OnInit} from "@angular/core";
import {horizonService} from "./services/horizon.ts"

@Component({
    selector: "my-app",
    providers: [horizonService],
    template: `
<StackLayout>
    <Label text="Tap the button" class="title"></Label>
    
    <Button text="TAP" (tap)="onTap()"></Button>
    <Label [text]="message" class="message" textWrap="true"></Label>
</StackLayout>
`,
})
export class AppComponent implements OnInit {
    public counter: number = 16;

    constructor(private horizonService :horizonService) {        
        
    }
    
    public get message(): string {

       let messages = this.horizonService.horizon("Nativescript");

        messages.store({
            sender: "Native script",
            time: new Date(),
            text: "Hello, World!"
        })        
        
      
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
        
    }

    public onTap() {
        this.counter--;
    }
    ngOnInit() {
        
    }
}