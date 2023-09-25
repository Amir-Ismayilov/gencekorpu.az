export default async ({store}) => {
  // Pages
  await store.dispatch('module/pages/getPagesArray')

  // Settings
  await store.dispatch('module/settings/getSettingsArray')
}
