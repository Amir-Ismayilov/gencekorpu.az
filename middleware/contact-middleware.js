export default async ({store}) => {
  // Contacts
  await store.dispatch('module/contacts/getContactsArray')
}
