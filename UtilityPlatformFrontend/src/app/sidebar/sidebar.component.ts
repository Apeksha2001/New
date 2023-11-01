import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  currentModule: string = '';

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  toggleModule(module: string): void {
    this.currentModule = this.currentModule === module ? '' : module;}
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

}
