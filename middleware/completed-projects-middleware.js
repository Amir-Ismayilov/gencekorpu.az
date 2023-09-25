export default async ({store}) => {
  // Completed projects
  await store.dispatch('module/projects/completed-projects/getCompletedProjectsArray')
}
