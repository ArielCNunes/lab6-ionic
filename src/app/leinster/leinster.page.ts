import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-leinster',
  templateUrl: './leinster.page.html',
  styleUrls: ['./leinster.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLinkWithHref]
})
export class LeinsterPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  // Open the page containing Leinster counties
  openLeinsterCounties() {
    this.router.navigate(['/leinster-counties']);
  }
}
