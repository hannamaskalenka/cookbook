import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, BadRequestException } from '@nestjs/common';

import { User } from '../../modules/users/schemas/user.schema';

@Injectable()
export class SMTPService {
  constructor(private mailService: MailerService) {}

  async sendForgotPasswordEmail(user: Partial<User>) {
    try {
      return await this.mailService.sendMail({
        to: user.email,
        from: process.env.SMTP_EMAIL,
        subject: 'Change password',
        template: 'reset-password',
        context: {
          username: user?.username,
        },
      });
    } catch (e) {
      throw new BadRequestException('Something went wrong');
    }
  }
}
