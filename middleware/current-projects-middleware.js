export default async ({store}) => {
  // Current projects
  await store.dispatch('module/projects/current-projects/getCurrentProjectsArray')
}
