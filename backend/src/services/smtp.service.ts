import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class SMTPService {
  constructor(private mailService: MailerService) {}

  async sendForgotPasswordEmail(toEmail: string) {
    try {
      return await this.mailService.sendMail({
        to: toEmail,
        from: process.env.SMTP_EMAIL,
        subject: 'Change password',
        text: "You've asked to change password? Here the link to do it.",
      });
    } catch (e) {
      throw new BadRequestException('Something went wrong');
    }
  }
}
