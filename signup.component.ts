import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup} from'@angular/forms';
import { User } from '../user';
import { PlexService } from '../plex.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm !: FormGroup;

  user= new User();

  constructor(private router: Router, private formbuilder: FormBuilder,private service:PlexService) { }

  ngOnInit(): void {
    
  }
  signup(): void {
    this.service.setUser(this.user);
    this.router.navigate(['/login']);
  }


}
