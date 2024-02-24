import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map((contact) => {
        return (
          <li className={css.list} key={contact.id}>
            <Contact data={contact}></Contact>
          </li>
        );
      })}
    </ul>
  );
}
