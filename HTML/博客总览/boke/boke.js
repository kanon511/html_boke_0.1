function listadd(i){
    let lis=document.createElement('a');
    lis.setAttribute('href','../list/p_001/p_001.html');
    lis.setAttribute('class','lis');
    lis.setAttribute('id','lis'+i);
    let alla=document.getElementById('zheng');
    alla.appendChild(lis);
    let lis0=document.createElement('div');
    lis0.setAttribute('class','l');
    lis0.setAttribute('id','lis0'+i);
    let alla0=document.getElementById('lis'+i);
    alla0.appendChild(lis0);
    let lis1=document.createElement('div');
    let lis2=document.createElement('div');
    let lis3=document.createElement('div');
    lis1.setAttribute('class','t');
    lis1.setAttribute('id','t'+i);
    lis2.setAttribute('class','d');
    lis2.setAttribute('id','d'+i);
    lis3.setAttribute('class','r');
    let alla1=document.getElementById('lis0'+i);
    alla1.appendChild(lis1);
    alla1.appendChild(lis2);
    alla0.appendChild(lis3);
    //--------------------
    let h2=document.createElement('h2');
    let pp=document.createElement('p');
    h2.innerText='P1044[NOIP2003普及组]栈';
    pp.innerText='栈是计算机中经典的数据结构，简单的说，栈就是限制在一端进行插入删除操作的线性表。栈有两种最重要的操作，即 pop（从栈顶弹出一个元素）和 push（将一个元素进栈）。栈的重要性不言自明，任何一门数据结构的课程都会介绍栈。宁宁同学在复习栈的基本概念时，想到了一个书上没有讲过的问题，而他自己无法给......';
    let tt=document.getElementById('t'+i);
    let dd=document.getElementById('d'+i);
    tt.appendChild(h2);
    dd.appendChild(pp);
}
for (let x=0;x<1;x++)
listadd(x);