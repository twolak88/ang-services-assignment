import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];
  counter: number;


  constructor(private usersService:UsersService, private counterService: CounterService) { }

  ngOnInit(): void {
    this.users = this.usersService.inactiveUsers;
    this.counter = 0;
    this.counterService.toActiveFired.subscribe(
      () => this.counter++
    );
  }

  onSetToActive(id: number) {
    this.usersService.setToActive(id);
  }
}
