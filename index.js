//import json-server
const jsonserver=require('json-server')

//server creation
 const server=jsonserver.create()

 //json type data ayirikum varunath so convert to js
 //therefore parse json to js using inbuilt middleware
 const middleware=jsonserver.defaults()

 //create router
 const router=jsonserver.router("db.json")

//run cheyanam so define port
const PORT=process.env.PORT || 4000


 //middleware create cheythit use cheyan parayanam
 server.use(middleware)

 //router create cheythit use cheyan parayanam
 server.use(router)

 //listen
 server.listen(PORT,()=>{
    console.log(`JSON Server satrted at Port Number ${PORT}`);
 })
