const contacts = require("./contacts");

const contactsAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contactList = await contacts.listContacts();
      console.log(contactList);
      break;
    case "get":
      const oneContact = await contacts.getContactById(id);
      console.log(oneContact);
      break;
    case "add":
      const contactsAdd = await contacts.addContact(name, email, phone);
      console.log(contactsAdd);
      break;
    case "remove":
      const contactsRemove = await contacts.removeContact(id);
      console.log(contactsRemove);
      break;
    default:
      console.log("Unknown error");
  }
};
// contactsAction({ action: "list" });
// contactsAction({ action: "get", id: "13" });
// contactsAction({
//   action: "add",
//   name: "Avatar",
//   email: "avatar@mail.com",
//   phone: "(096) 120-2022",
// });
contactsAction({
  action: "remove",
  id: "5",
});
