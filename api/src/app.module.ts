import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { HabitsModule } from './habits/habits.module';
import { RecordsModule } from './records/records.module';
import { AnalyticsModule } from './analytics/analytics.module';

@Module({
  imports: [AuthModule, UsersModule, HabitsModule, RecordsModule, AnalyticsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
