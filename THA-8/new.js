const canva = document.querySelector('.canva');



for (let id=0; id < 400; id++){ /* dont use var */
  let grid=document.createElement('div');
  grid.setAttribute('class','grid');
  grid.setAttribute('class','clicked');
  grid.setAttribute('id',id);
  grid.addEventListener('click',() => {
    grid.classList.toggle('clicked');
  });
  /*grid.innerText(id);
  canva.appendChild(grid).className="grid-item";*/
  canva.appendChild(grid);
  
}
const unchecked = ["3","15","22","24","34","36","41","45","53","57","60","66","72","78","81","87","91","99","102","108","110","118",
                   "123","129","137","144","156","165","175","186","194","205","213","224","234","243","255","262","270","276","281",
                   "289","291","297","300","308","312","318","321","327","333","339","342","346","354","358","363","365","375","377",
                   "384","396"];

for(let i in unchecked){
  document.getElementById(unchecked[i]).classList.toggle('clicked');
}