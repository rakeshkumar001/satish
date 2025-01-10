const http= require('http');



const server=http.createServer((req,res)=>{

    const url=req.url;

    const method=req.method;



    if(url==="/")

    {

    res.write("<html>")

    res.write("<head><title>my first page</title></head>")

    res.write("<body><form action='/create-user' method='POST'><label>User Name</label><input type='text' name='username'><button type='submit'>send</button></form></body>")

    res.write("</html>")

    return res.end();

    }

if(url==="/user")

    {

    res.write("<html>")

    res.write("<head><title>Users</title></head>")

    res.write("<body><ul><li>User 1</li><li><User 2</li></ul></body>")

    res.write("</html>")

    return res.end();

    }

    if(url==='/create-user' && method==='POST')

    {

        const body=[];

        req.on("data",(chunks)=>{

            body.push(chunks);

        });

        req.on('end',()=>{

            const bodyParser= Buffer.concat(body).toString();

            const userName=bodyParser.split('=')[1];

           console.log(userName);

        })

       

        res.statusCode=302;

        res.setHeader('location','/');

        return res.end();

    }



});

server.listen(3000);