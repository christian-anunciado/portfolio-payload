import type { CollectionAfterChangeHook } from 'payload'

export const triggerBuild: CollectionAfterChangeHook = async ({ context, doc }) => {
  // only trigger in vercel production
  if (process.env.VERCEL_ENV !== 'production') {
    return
  }

  if (context.triggerBuildAfterChange === false) {
    return
  }

  // only trigger if the page is published
  if (doc._status !== 'published') {
    return
  }

  await fetch(process.env.VERCEL_DEPLOY_HOOK, {
    method: 'POST',
  })

  context.triggerBuildAfterChange = false
}
