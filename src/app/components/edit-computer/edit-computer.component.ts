import { Component, OnInit } from '@angular/core';
import { Computer } from 'src/app/models/computer';
import { ComputerService } from 'src/app/computer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-computer',
  templateUrl: './edit-computer.component.html',
  styleUrls: ['./edit-computer.component.css']
})
export class EditComputerComponent implements OnInit {
  computerToUpdate: Computer;
  loader: boolean;
  marques: string[] = ['Dell', 'HP', 'Apple', 'Asus'];
  types: string[] = ['Portable', 'Fixe', 'Tablette Hybride'];
  categories: string[] = ['Gaming', 'Bureautique', '1er prix'];

  constructor(
    private activatedRoute: ActivatedRoute,
    private computerService:ComputerService,
    private router: Router,) { }

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.loader = true;
    this.computerService.getComputerById(id).subscribe((data:Computer) => {
      this.computerToUpdate = data;
      this.loader = false;
    });
  }
  updateComputer() {
    this.loader = true;
    this.computerService.updateComputer(this.computerToUpdate).subscribe((data: Computer) => {
      this.router.navigate(['home']);
      this.loader = false;
    });
  }

}
