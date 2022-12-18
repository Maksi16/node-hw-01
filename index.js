const contacts = require("./contacts");
const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contactList = await contacts.listContacts();
      console.table(contactList);
      break;
    case "get":
      const oneContact = await contacts.getContactById(id);
      console.table(oneContact);
      break;
    case "add":
      const contactsAdd = await contacts.addContact(name, email, phone);
      console.table(contactsAdd);
      break;
    case "remove":
      const contactsRemove = await contacts.removeContact(id);
      console.table(contactsRemove);
      break;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}
// contactsAction({ action: "list" });
// contactsAction({ action: "get", id: "13" });
// contactsAction({
//   action: "add",
//   name: "Avatar",
//   email: "avatar@mail.com",
//   phone: "(096) 120-2022",
// });
// contactsAction({
//   action: "remove",
//   id: "5",
// });

invokeAction(argv);
