import { NgModule } from "@angular/core";
import { ListEventsComponent } from "./list-events/list-events.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        ListEventsComponent
    ],
    imports: [
        HttpClientModule
    ]
})
export class AppModule { }