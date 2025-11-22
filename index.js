import express from 'express' 
const app = express()
const port = process.env.port || 3000

app.get('/', (req, res) => {
  res.send('Server is running')
})
app.get('/twitter', (req,res)=>{
    res.send('jalpan_dot_com')
})
app.get('/api/jokes',(req,res)=>{
    const jokes = [{id:1,title:"first",content : "awsome"},
      {id:2,title:"second",content : "excellent"},
      {id:3,title:"third",content : "great"},
      {id:4,title:"fourth",content : "average"},
      {id:5,title:"fifth",content : "bad"}]
      res.send(jokes)
})
app.get('/login',(req,res)=>{
    res.send("Naukri chahiye")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})