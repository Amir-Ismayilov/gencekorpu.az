export default async ({store}) => {
  // Management
  await store.dispatch('module/managements/getManagementArray')

  // Galleries (slider)
  await store.dispatch('module/galleries/getGalleriesArray')

  // Sliders
  await store.dispatch('module/sliders/getSlidersArray')

  // News
  await store.dispatch('module/news/getNewsArray')

  // Completed Projects
  await store.dispatch('module/projects/completed-projects/getCompletedProjectsArray')

  // Contacts
  await store.dispatch('module/contacts/getContactsArray')
}
