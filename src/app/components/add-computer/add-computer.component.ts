import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComputerService } from 'src/app/computer.service';
import { Computer } from 'src/app/models/computer';

@Component({
  selector: 'app-add-computer',
  templateUrl: './add-computer.component.html',
  styleUrls: ['./add-computer.component.css']
})
export class AddComputerComponent implements OnInit {
  computerToAdd = new Computer;
  marques: string[] = ['Dell', 'HP', 'Apple', 'Asus'];
  types: string[] = ['Portable', 'Fixe', 'Tablette Hybride'];
  categories: string[] = ['Gaming', 'Bureautique', '1er prix'];

  constructor(private router: Router, private computerService : ComputerService) { }

  ngOnInit(): void {
  }
  onSubmit() {   this.computerService.addComputer(this.computerToAdd).subscribe
    (then => {       this.router.navigate(['/home']);   
  }); 
} 
  
  addPlanet():void{
    this.computerService.addComputer(this.computerToAdd);
    this.router.navigate(['/home']);   
  }
}