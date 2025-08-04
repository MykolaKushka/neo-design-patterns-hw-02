import { INotificationChannel } from '../core/interfaces';

export class NotificationService {
  constructor(private channels: INotificationChannel[]) {}

  sendNotification(
    user: { email: string; phone: string; deviceToken: string },
    message: string
  ): void {
    this.channels.forEach(channel => {
      channel.send(user, message);
    });
  }
}