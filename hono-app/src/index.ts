import { Hono } from 'hono'

const app = new Hono()

// middleware 
// async function authMiddleware(c:any,next:any) {
//   if(c.req.header("Authorization")) {
//     // do validation logic
//     await next()
//   }
//   else {
//    return c.text("You dont have access")
//   }
// }

// app.use(authMiddleware)

// app.get("/auth" , authMiddleware , async (c) => {
//   // do something ...
// })



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
