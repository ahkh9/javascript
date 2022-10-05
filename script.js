
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

    var Catogrey1 = 'Catogrey1';
    var name1 = [];
    for (let i = 0; i <= 9; i++) {
        console.log(i);
        console.log(document.querySelectorAll(".btncate")[i].textContent);
        name1[i] = document.querySelectorAll(".btncate")[i].text;
        console.log(name1[i].toString());
        //    e. preventDefault();
       for(let o =0;o< name1.length;o++){
        if (name1[o].toString() == Catogrey1) {
            const name = [];

            name[o] = document.querySelectorAll(".name")[o].textContent;
            console.log(name[o]);

        }}
    }
    let content = '';
    for (let index = 0; index < name1.length; index++) {
        content += `
          <div class="card" style="width: 25rem;margin:0 auto;top:6em;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><span class="circle">${name1[index].charAt(0)}</span> <span class="name">  ${name1[index]}   </span><a href="#" class="btn btn-primary btncate">Category1 </a> 
        </li>
    
  </ul>
</div>
          `
    }


    document.querySelector("#exmp").innerHTML = content;
    let p = 1;
    p++;
    console.log(p);


}

// cat1();