
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


 function cat1(e) {

    var Catogrey1 = `Catogrey1`;
    let cate = [];
    const name = [];
    let content = '';
   for (  let i = 0; i <= 9; i++) {
  
       cate[i] = document.querySelectorAll(".btncate")[i].text.slice(0);


        if (cate[i].charAt(8) === Catogrey1.charAt(8)) {


            name[i] = document.querySelectorAll(".name")[i].textContent.slice(0);
            console.log(name[i]);


            content += `
                  <div class="card" style="width: 25rem;margin:0 auto;top:6em;">
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><span class="circle">${name[i].charAt(0)}</span> <span class="name">  ${name[i]}   </span><a href="#" class="btn btn-primary btncate">Category1 </a> 
                </li>
            
          </ul>
        </div>
                  `
            document.querySelector("#exmp").innerHTML = content;
        }
    }
}








// cat1();