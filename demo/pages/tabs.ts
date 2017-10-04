import { Component } from "@angular/core";
import {HomePage} from './home.ts';
import {AboutPage} from './about.ts';

@Component({
    templateUrl: 'pages/tabs.html'
})
export class TabsPage {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    tab1Root: any = HomePage;
    tab2Root: any = AboutPage;
}
