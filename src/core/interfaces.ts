export interface ILogger {
  log(message: string): void;
}

export interface INotificationChannel {
  send(user: { email: string; phone: string; deviceToken: string }, message: string): void;
}
