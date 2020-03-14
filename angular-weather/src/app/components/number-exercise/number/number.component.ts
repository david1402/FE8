import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss']
})
<<<<<<< Updated upstream
export class NumberComponent implements OnInit {
=======
export class NumberComponent implements OnInit{
>>>>>>> Stashed changes

  @Input()
  number: number;

  constructor() { }

  ngOnInit(): void {
  }

<<<<<<< Updated upstream


=======
>>>>>>> Stashed changes
}
