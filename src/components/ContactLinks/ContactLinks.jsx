import { ContactList, ContactItem } from './ContactLinks.styled';
import { MdEmail, MdOutlinePhoneIphone } from 'react-icons/md';
import { ContactButtonTo } from 'components/hooks/ContactButtonTo';

export const ContactLinks = () => {
  return (
    <>
      {' '}
      <ContactList>
        <ContactItem>
          <MdEmail size="16px" />
          <ContactButtonTo
            label="shan.abdullaev@gmail.com"
            mailto="mailto:shan.abdullaev@gmail.com"
          />
        </ContactItem>
        <ContactItem>
          <MdOutlinePhoneIphone size="16px" />
          <ContactButtonTo
            label="0709459774"
            mailto="tel:shan.abdullaev@gmail.com"
          />
        </ContactItem>
      </ContactList>
    </>
  );
};

export default ContactLinks;
