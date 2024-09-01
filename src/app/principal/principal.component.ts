import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent implements OnInit{
constructor(private router:Router){}

  ngOnInit(): void {}

  onLogin(){
    this.router.navigate(['/user']);
  }



}






