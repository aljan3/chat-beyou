import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-ad-directive',
  templateUrl: './ad-directive.component.html',
  styleUrls: ['./ad-directive.component.css']
})
export class AdDirectiveComponent implements OnInit {

  constructor( public viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
  }

}
