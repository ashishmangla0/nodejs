import http  from 'http';
import fs from 'fs';
import path from 'path';



const fileExtensions = {
    
    'css':'text/css',
    'js':'text/javascript',
    'json':'application/json',
    'png':'image/png',
    'jpg':'image/jpg',
    'wav':'audio/wav'
}
// for(var i in fileExtensions) {
//     if(path.extname === i) {    
//        type = fileExtensions[i]
//        console.log(type)
//     }
//  }
var __dirname = path.resolve();
console.log(__dirname);
const server = http.createServer((req,res) =>{
    
   if(req.url==='/'){
    fs.readFile('./index.html',(err,data)=>{
        res.writeHead(200,{'Content-Type':'text/html'});
        //res.write(data);
        res.end(data);
    })
   }

   else if(req.url.match("\.css$")){
       let cssPath = path.join(__dirname, req.url);
       let fileStream = fs.createReadStream(cssPath,'UTF-8')
       res.writeHead(200,{'Content-Type':'text/css'});
       fileStream.pipe(res);
   }
   else if(req.url.match("\.js$")){
    let jsPath = path.join(__dirname, req.url);
    let fileStreamJS = fs.createReadStream(jsPath,'UTF-8')
    res.writeHead(200,{'Content-Type':'text/js'});
    fileStreamJS.pipe(res);
       }
       else if(req.url.match("\.png$")){
        var imagePath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, {"Content-Type": "image/png"});
        fileStream.pipe(res);
    }
       
       
    
//     let csspath =path.join(__dirname,'public',req.url);
//     console.log(csspath);
    // fs.readFile('./index.html',(err,data)=>{
    //     res.writeHead(200,{'Content-Type':'text/html'});
    //     //res.write(data);
    //     res.end(data);
    // })
//    }
  
   
    // fs.readFile('./index.html',(err,data)=>{
    //     res.writeHead(200,{'Content-Type':'text/html'});
       
       
    //     res.write(data);
    //     res.end();
    // })
   
    
  
})
server.listen(5000);

// const server = http.createServer((req, res) => {
//     res.writeHead(200,{'Content-Type':'text/html'});
//               res.write('<h1>this is demo</h1>');
//     res.end();
//   });

//   server.listen(8000);