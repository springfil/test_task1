export default defineEventHandler(async (event) => {

    const { path } : any = event.context.params

    const uri = `https://devtwit8.ru/api/v1/page/?path=/${path === 'home' ? '' : path}`

    const  data = await $fetch(uri)

    return data
})