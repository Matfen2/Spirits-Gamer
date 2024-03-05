import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {
  connectForm!: FormGroup;
  successConnect: boolean = false;
  errorConnect: boolean = false;
  registerForm!: FormGroup;
  successRegister: boolean = false;
  errorRegister: boolean = false;

  constructor(private authService: AuthService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.connectForm = this.fb.group({
      adress: ['', [Validators.required, Validators.email, Validators.pattern('[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$')]],
      pass: ['', [Validators.required]]
    });

    this.registerForm = this.fb.group({
      pseudo: ['', [Validators.required]],
      adress: ['', [Validators.required, Validators.email, Validators.pattern('[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$')]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      pass: ['', [Validators.required]]
    });
  }

  connect() {
    if (this.connectForm.valid) {
      const { adress, pass } = this.connectForm.value;
      this.authService.connectMember(adress, pass).subscribe(
        () => {
          this.successConnect = true;
          this.errorConnect = false;
          this.connectForm.reset();
        },
        (error) => {
          this.successConnect = false;
          this.errorConnect = true;
          if (error.status === 400) {
            alert("Adresse email et/ou mot de passe incorrect.");
          }
        }
      );
    } else {
      this.successConnect = false;
      this.errorConnect = true;
    }
  }

  register() {
    if (this.registerForm.valid) {
      const { pseudo, adress, phone, pass } = this.registerForm.value;
      this.authService.registerMember(pseudo, adress, phone, pass).subscribe(
        () => {
          this.successRegister = true;
          this.errorRegister = false;
          this.registerForm.reset();
        },
        (error) => {
          this.successRegister = false;
          this.errorRegister = true;
          if (error.status === 400) {
            alert("Compte déjà créé.");
          }
        }
      );
    } else {
      this.successRegister = false;
      this.errorRegister = true;
    }
  }
}
