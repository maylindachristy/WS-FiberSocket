var myHeaders = new Headers();
myHeaders.append("Cookie", "connect.sid=s%3AMsnp_KW3uPWTf6gN4GDNl7XAoOShdRL2.VK05aaDbN1FeG%2BScGHtOuxENv5s2ABoZZzLpqN%2FUbZs");

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};
 
hasil=""
txt=""
txt1=""

fetch("https://api.tvmaze.com/search/people?q=lauren", requestOptions)
.then(response => response.text())
  .then(result => tampilkan(result))
  .catch(error => console.log('error', error));

function tampilkan(result){
    console.log(result);
    hasil=JSON.parse(result);
    txt=hasil.forEach(isitabel);
}

function isitabel(value){
    txt= txt+trnyatabel.replace("#TEXT#","Nama: "+value.name + "");
    txt= txt+trnyatabel.replace("#TEXT#","TTL: "+value.birthday + "");
    txt= txt+trnyatabel.replace("#TEXT#","Gender: "+value.gender + "");

  document.getElementById("konten").innerHTML=txt;
}
trnyatabel=`
    <div class="font-medium text-gray-700" id="name">#TEXT#</div>
  `