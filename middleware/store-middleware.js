export default async ({store, route, redirect}) => {
  // Clubs
  // await store.dispatch('module/clubs/getClubsArray')

  // Pages
  await store.dispatch('module/pages/getPagesArray')
  // Completed Projects
  await store.dispatch('module/projects/completed-projects/getCompletedProjectsArray')
  // Current Projects
  await store.dispatch('module/projects/current-projects/getCurrentProjectsArray')
  // Management
  await store.dispatch('module/managements/getManagementArray')
  // Contacts
  await store.dispatch('module/contacts/getContactsArray')
  // Settings
  await store.dispatch('module/settings/getSettingsArray')
  // Galleries (slider)
  await store.dispatch('module/galleries/getGalleriesArray')
  // News
  await store.dispatch('module/news/getNewsArray')
  // Sliders
  await store.dispatch('module/sliders/getSlidersArray')
  // Technical Base
  await store.dispatch('module/technical-base/getTechnicalBaseArray')
}
