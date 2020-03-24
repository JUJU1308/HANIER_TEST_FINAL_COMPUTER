import { Component, OnInit } from '@angular/core';
import { Computer } from 'src/app/models/computer';
import { ComputerService } from 'src/app/computer.service';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent implements OnInit {
  computers : Computer[]=[];
  constructor(private computerService : ComputerService ) { }
 

  deleteComputer(computer: Computer) {
    this.isLoading = true;
    this.computerService.removeComputer(computer).subscribe(then => {
      this.computerService.getComputer()
        .subscribe(computers => {
          this.computers = computers;
          this.isLoading = false;
        });
    });

  }
  
  isLoading: boolean; 
  ngOnInit():void {   
    this.isLoading = true;   
     this.computerService.getComputer().subscribe((data: Computer[]) => 
    {
      this.computers = data;     
      this.isLoading = false; 
    }); 
  }

}
