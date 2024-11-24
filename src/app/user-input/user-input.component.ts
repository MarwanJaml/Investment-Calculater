import { Component,EventEmitter,Output,output,signal} from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../investment-input.model'


@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  calculate = output<InvestmentInput>();
  //@Output() calculate = new EventEmitter<InvestmentInput>();

  enterdInitialInvestment =signal('0');
  enterdAnnualInvestment =signal('0');
  enterdExpectedReturn =signal('0');
  enterdDuration =signal('0');

  onSubmit(){
    this.calculate.emit({

      initialInvestment: +this.enterdInitialInvestment() ,
      annualInvestment: +this.enterdAnnualInvestment() ,
      expectedReturn: +this.enterdExpectedReturn() ,
      duration: +this.enterdDuration() , 

    });
    //resting
    this.enterdInitialInvestment.set('0');
    this.enterdAnnualInvestment.set('0');
    this.enterdExpectedReturn.set('0');
    this.enterdDuration.set('0');


  }

  
}

