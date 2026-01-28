import { ApiService } from './../../service/api.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private ApiService:ApiService){}
onSubmit(form:any){
  console.log('submit click');
  console.log(form.value);
 if(form.valid){
  this.ApiService.sendMessage(form.value).subscribe({
    next:(res:any)=>{
      alert(res.message);
      form.resetForm();
    },
    error:(err)=>{
      console.log(err);
      alert("something went wrong");
    }
  });
  }else{
    console.log('form invalid');
    alert("please fill all required fields!")
  }
 }
}
