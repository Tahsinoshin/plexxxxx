import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlexService } from '../plex.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user= new User();

  constructor(private router: Router, private service:PlexService) { 
    
  }

  ngOnInit(): void {
  }

  login(): void {
    this.service.setUser(this.user);
    this.router.navigate(['/home']);



  }
    
  

}
