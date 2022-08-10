export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const { session_id } = useCookies(event)
  return await $fetch(`${config.apiBase}/discord/me`, {
    headers: {
      'Cookie': 'session_id=' + session_id,
    }
  })
})
