import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import * as fromPages from './pages';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [...fromPages.pages],
  imports: [AuthRoutingModule, SharedModule],
})
export class AuthModule {}
