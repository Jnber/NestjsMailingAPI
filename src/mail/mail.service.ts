import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ContactFormatEntity } from './contactFormat.entity';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}
  async SendContact(contactFormat: ContactFormatEntity) {
    await this.mailerService.sendMail({
      to: contactFormat.mail,
      from: 'ur email', // override default from
      subject: contactFormat.subject,
      template: './contact', // `.hbs` extension is appended automatically
      context: {
        // ✏️ filling curly brackets with content
        name: contactFormat.name,
        message: contactFormat.message,
      },
    });
  }
}
