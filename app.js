/* Http kutuphanesini cagiriyoruz */
const http = require('http');

/* Http ile yeni server olusturarak bunu server degiskenine atiyoruz */
const server = http.createServer((req,res) => {
    /* Web sayfamıza nodemon app yazdırıyoruz */
    res.write(req.url+"nodemon app");
    /* Bitiriyoruz */
    res.end();
})
/* server localhost:3000 uzerinde aciliyor */
server.listen(3000, () =>{
    /* Consola asagidaki metni yazdiriyorruz */
    console.log('Server localhost:3000 uzerinde ayakta')
})
