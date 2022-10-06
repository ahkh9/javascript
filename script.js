
async function load() {
  let url = 'http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&pretty=true';
  const obj = await (await fetch(url)).json();
  console.log(obj);

  const cat = ["Catogrey1", "Catogrey2", "Catogrey3"];


  let content = '';

  obj.forEach(p => {
    content += `
          <div class="card" style="width: 25rem;margin:0 auto;top:6em;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><span class="circle">${p.fname.charAt(0)}${p.lname.charAt(0)}</span> <span class="name">  ${p.fname}  ${p.lname} </span><a href="#" class="btn btn-primary btncate">${cat[Math.floor(Math.random() * 3)]} </a> 
        </li>
    
  </ul>
</div>
          `
  });

  document.querySelector("#exmp").innerHTML = content;


  // alert(obj[0].fname);
}

load();


function cat1() {

  let Catogrey1 = `Catogrey1`;
  let c=0;
  let cate = [];
  const name = [];
  let content = '';
  for (var i = 0; i <= 9; i++) {

    cate[i] = document.querySelectorAll(".btncate")[i].text.slice(0);


    if (cate[i].charAt(8) === Catogrey1.charAt(8)) {

      
      name[c] = document.querySelectorAll(".name")[i].textContent.slice(0);
      // console.log(name[i]);
      // console.log(cate[i]);
      c++;

    }
  }
  
console.log(name.length);
  for (let i = 0; i <= name.length-1; i++) {
    content += `
    <div class="card" style="width: 25rem;margin:0 auto;top:6em;">
<ul class="list-group list-group-flush">
<li class="list-group-item"><span class="circle">${name[i]}</span> <span class="name">  ${name[i]}   </span><a href="#" class="btn btn-primary btncate">${cate[i]} </a> 
  </li>

</ul>
</div>
    `
  
  }
  document.querySelector("#exmp").innerHTML = content;
}








// cat1();