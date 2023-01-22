const btnEl=document.getElementById('btn');
const apiURL = "https://api.quotable.io/random";
const quoteEl=document.getElementById('quote');
const authorEl=document.getElementById('author');

async function getQuote(){
 try {
  btnEl.innerText='Loading...';
  btnEl.disabled=true;

  quoteEl.innerText='Updating';

  // const response= await fetch(apiURL).then((res)=>res.json())
  const response=await fetch(apiURL);
  const data=await response.json();
  console.log(data.author);
  quoteEl.innerText=data.content;
  authorEl.innerText='~'+ data.author;
  btnEl.innerText='Get a quote';
  btnEl.disabled=false;
 } catch (error) {
  quoteEl.innerText = `Following error happened: ${error}. Try again later!`;
  authorEl.innerText = `Following error happened: ${error}. Try again later!`;
  btnEl.disabled=false;
 }

}
getQuote()

btnEl.addEventListener('click', getQuote)