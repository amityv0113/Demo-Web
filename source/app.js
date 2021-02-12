const express = require('express')
const path =require('path')
const hbs = require('hbs')



const app = express();



//define path for express config

const public_Dir=path.join(__dirname,'../public')
const view_dir =path.join(__dirname,'../template/views')
const partial_dir = path.join(__dirname,'../template/partials')


//setup static dir to serve
app.use(express.static(public_Dir))

const port = process.env.PORT ||3000



// setup handlbar and views location 
app.set('view engine','hbs')
app.set('views',view_dir)
hbs.registerPartials(partial_dir)

app.get('/introduction' , (request ,response) =>{
    response.render('introduction',{})
})

app.get('',(request,response)=>{
    response.render('login',{})
})

app.get('/about' , (request ,response) =>{
    response.render('about',{})
})

app.get('/weather' , (request,response)=>{
    response.render('weather',{})
})
app.get('/login',(request,response)=>{
    response.render('login',{})

})

app.get('/project' , (request ,response) =>{
    response.render('project',{
                
    })
})

app.get('/contact' , (request ,response) =>{
    response.render('contact',{
                
    })
})

app.get('*', (request ,response) =>{
    response.send('404 Page')
})


app.listen(port, () => {
    console.log('server is up running on port ' + port)
})
