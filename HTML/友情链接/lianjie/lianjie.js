function listadd(i,list0,list1){
    let lis=document.createElement('a');
    lis.setAttribute('href',list1[i])
    lis.setAttribute('class','box');
    lis.setAttribute('id','box'+i);
    let alla=document.getElementById('web0');
    alla.appendChild(lis);
    let lis0=document.createElement('div');
    lis0.setAttribute('class','img');
    lis0.setAttribute('id','img'+i);
    let alla0=document.getElementById('box'+i);
    alla0.appendChild(lis0);
    let lis1=document.createElement('img');
    lis1.setAttribute('src','lianjie/tb'+i+'.png');
    let alla1=document.getElementById('img'+i);
    alla1.appendChild(lis1);
    let pp=document.createElement('p');
    pp.innerText=list0[i];
    alla0.appendChild(pp);
}
liss1=['hackerxiao']
liss2=['https://www.hackerxiao.online']
for (let x=0;x<liss1.length;x++)
listadd(x,liss1,liss2);