import React from 'react';
import { Card } from '../../../components/Card';
import { Textfield } from '../../../components/Textfield';
import { Section } from '../../../components/Section';

export const ContactMe = ({ heading }) => {
  return (
    <Section heading={heading} className="my-0">
      <Card className="p-4">
        <form className="contact-me-form flex flex-col gap-5">
          <Textfield placeholder="Name" name="name" />
          <Textfield placeholder="Subject" name="Subject" />
          <Textfield placeholder="Message" name="message" />
          <input type="submit" value="Messgae Me!" className="rounded-full bg-blue-200 mt-2" />
        </form>
      </Card>
    </Section>
  );
};
