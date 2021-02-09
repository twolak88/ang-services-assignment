import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];
  counter: number;

  constructor(private usersService:UsersService, private counterService: CounterService) { }

  ngOnInit(): void {
    this.users = this.usersService.activeUsers;
    this.counter = 0;
    this.counterService.toInactiveFired.subscribe(
      () => this.counter++
    );
  }

  onSetToInactive(id: number) {
    this.usersService.setToInactive(id);
  }
}
