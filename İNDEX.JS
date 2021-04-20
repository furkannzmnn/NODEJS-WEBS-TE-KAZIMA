const express = require('express');
const app = express()
const port = 3000

app.listen(port , () => {
  console.log(`${port} dinleniyor`)
})
const axios = require('axios'),
jsdom = require('jsdom'),
 {JSDOM} = jsdom,
 url = 'https://www.hurriyet.com.tr';


 axios.get(url)
 .then (response => {
   getNodes(response.data);
 })

 .catch(error => {
   console.error(error);
 })

 const getNodes = html => {
  const data = [], 
  dom = new JSDOM(html), 
  news = dom.window.document.querySelectorAll('.flash-four-widget-css a'); 
  news.forEach(item => { 
    data.push({ 
      title: item.getAttribute('title'),
      link: item.getAttribute('href')
    })
  });
app.get('/' , (req, res) => {
  res.send(data);

})
}
