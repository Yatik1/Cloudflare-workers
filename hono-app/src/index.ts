import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})
app.get('/user', (c) => {
  return c.json({
    message : 'Hello User , this is get request !'
  })
})

export default app
