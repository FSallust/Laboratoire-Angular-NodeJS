import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { countries } from 'src/app/_data/country-data';
import { AuthService } from 'src/app/_services/auth.service';
import { ValidationService } from 'src/app/_services/validation.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  inscriptionForm: FormGroup;
  public countriesList = countries

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.inscriptionForm = this.formBuilder.group({
      Prenom: ['', [Validators.required]],
      Nom: ['', [Validators.required]],
      Pays: ['', [Validators.required]],
      Email: ['', [Validators.required, ValidationService.emailValidator]],
      Telephone: ['', [Validators.required]],
      Password: ['', [Validators.required, Validators.minLength(6), ValidationService.passwordValidator]]
    });
  }

  ngOnInit(): void {
  }

  //
  async register(form) {
    let res = false;
    form.value.isAdmin = false;
    form.value.Password = await sha256(form.value.Password);
    this.authService.getAll().toPromise().then(resp => {
      resp.forEach(element => {
        if (element.Email === form.value.Email) {
          res = true;
        }
      });
    }).finally(() => {
      if (res === false) {
        this.authService.register(form.value).toPromise().then().finally(() => {
          this.router.navigateByUrl("");
        });
      }
      else {
        this.router.navigateByUrl("inscriptionError");
      }
    });
    return res;
  }

}
async function sha256(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}
