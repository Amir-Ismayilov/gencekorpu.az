export default async ({store}) => {
  // Technical Base
  await store.dispatch('module/technical-base/getTechnicalBaseArray')
}
