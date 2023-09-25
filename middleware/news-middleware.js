export default async ({store}) => {
  // News
  await store.dispatch('module/news/getNewsArray')
}
