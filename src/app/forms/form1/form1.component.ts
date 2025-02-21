import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component {
  @ViewChild('f') singupForm!: NgForm;
// for gender selection
genders = ['male', 'female'];

// for 2way binding for answer
answer = '';

// for access child Component

// for default question
defaultQuestion = 'pet';

user = {
  username: '',
  email: '',
  secret: '',
  questionAnswer: '',
  gender: ''
};
submitted = false;
  suggestUserName() {
  const suggestedName = 'Superuser';
  this.singupForm.setValue({
    userData: {
      user: 'pavan',
      email: 'pavannagadiya@yahoo.component',
      secret: 'pet',
      questionAnswer: 'ABC',
      gender: 'male'
    }
  });

  // this  method only for overwrire suggested value
  // this.singupForm.form.patchValue({
  //   userData: {
  //     user: 'pavan'
  //   }
  // });
}

// onSubmit(from: NgForm) {
//   console.log(from);
// }
onSubmit() {
console.log(this.singupForm);
}
}
