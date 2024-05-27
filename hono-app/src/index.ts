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
app.post("/api" , async (c) => {

  const body = await c.req.json()
  console.log(body)

  console.log(c.req.header("Authorization"))
  console.log(c.req.query("params"));
      

  return c.text("this is post request")
})

export default app
