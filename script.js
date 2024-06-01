function information(contentid){
    document.getElementById('home').style.display = 'none';
    document.getElementById(contentid).style.display = 'block';
}

//technical skill script
function addSkillfield(contentid,buttonid){
    let newnode = document.createElement('textarea');
    newnode.classList.add('form-control');
    newnode.classList.add('skillField');
    newnode.classList.add('my-1');
    newnode.setAttribute('rows',2);
    newnode.setAttribute('placeholder','Enter here');

    let sOb = document.getElementById(contentid);
    let skillAddbuttonOb = document.getElementById(buttonid);

    sOb.insertBefore(newnode, skillAddbuttonOb);
}

//work experience script

function addWEfield(contentid, buttonid){
    
    let newnode = document.createElement('textarea');
    newnode.classList.add('form-control');
    newnode.classList.add('weField');
    newnode.classList.add('my-1');
    newnode.setAttribute('rows',3);
    newnode.setAttribute('placeholder','Enter here');

    let weOb = document.getElementById(contentid);
    let weAddbuttonOb = document.getElementById(buttonid);

    weOb.insertBefore(newnode, weAddbuttonOb);

}

//academic qualification script

function addAQfield(contentid, buttonid){
    
    let newnode = document.createElement('textarea');
    newnode.classList.add('form-control');
    newnode.classList.add('aqField');
    newnode.classList.add('my-1');
    newnode.setAttribute('rows',3);
    newnode.setAttribute('placeholder','Enter here');

    let aqOb = document.getElementById(contentid);
    let aqAddbuttonOb = document.getElementById(buttonid);

    aqOb.insertBefore(newnode, aqAddbuttonOb);

}

//project script
function addPfield(contentid, buttonid){
    
    let newnode = document.createElement('textarea');
    newnode.classList.add('form-control');
    newnode.classList.add('pField');
    newnode.classList.add('my-1');
    newnode.setAttribute('rows',3);
    newnode.setAttribute('placeholder','Enter here');

    let pOb = document.getElementById(contentid);
    let pAddbuttonOb = document.getElementById(buttonid);

    pOb.insertBefore(newnode, pAddbuttonOb);

}

//awards & achievements script
function addAwfield(contentid, buttonid){
    
    let newnode = document.createElement('textarea');
    newnode.classList.add('form-control');
    newnode.classList.add('awField');
    newnode.classList.add('my-1');
    newnode.setAttribute('rows',3);
    newnode.setAttribute('placeholder','Enter here');

    let awOb = document.getElementById(contentid);
    let awAddbuttonOb = document.getElementById(buttonid);

    awOb.insertBefore(newnode, awAddbuttonOb);

}

//generate cv script
function generateCV(formid,tempid){

    let details = document.getElementById(formid);
    let result = document.getElementById(tempid);

    //name
    result.querySelector('.nameT').innerHTML = details.querySelector('.name').value;
    

    //mailid
    result.querySelector('.emailidT').innerHTML = details.querySelector('.emailid').value;
    
    //address
    result.querySelector('.addressT').innerHTML = details.querySelector('.address').value;
    
    //linkedin id
    result.querySelector('.linkedinT').innerHTML = details.querySelector('.linkedin').value;

    //jobrole
    result.querySelector('.jobroleT').innerHTML = details.querySelector('.jobrole').value;

    //objective
    if(details.querySelector('.objF')){
        result.querySelector('.objT').innerHTML = details.querySelector('.objF');
    }
    //skills

    if (details.querySelectorAll('.skillField')) {
        let skills = details.querySelectorAll('.skillField');
        let str = " ";
        for(let e of skills){
            str += `<li> ${ e.value} </li>`;
        }
        result.querySelector('.skillT').innerHTML = str;
    }
    
    //we
    if(details.querySelectorAll('.weField')){
    let wes = details.querySelectorAll('.weField');
    let str1 =" ";
    for(let e of wes){
        str1 +=  `<li> ${ e.value } </li>`;
        
    }
    result.querySelector('.weT').innerHTML = str1;

    }

    //aq
    if(details.querySelectorAll('.aqField')){
        let aqs = details.querySelectorAll('.aqField');
        let str2 = "";
        for(let e of aqs ){
        str2+= `<li> ${e.value} </li>`
        }
        result.querySelector('.aqT').innerHTML = str2;
    }

    //project
    if(details.querySelectorAll('.pField')){
        let ps = details.querySelectorAll('.pField');
        let str4 = "";
        for(let e of ps ){
        str4+= `<li> ${e.value} </li>`
        }
        result.querySelector('.projectT').innerHTML = str4;
    }


    //awards
    if(details.querySelectorAll('.awField')){
        let aws = details.querySelectorAll('.awField');
        let str3 = "";
        for(let e of aws ){
            str3+= `<li> ${e.value} </li>`
        }
        result.querySelector('.awT').innerHTML = str3;

    }

    details.style.display = 'none';
    result.style.display = 'block';
}

//print cv script
function printCV(tempid){

    document.getElementById('print').style.display = 'none';
    const element = document.getElementById(tempid);
    html2pdf()
    .from(element)
    .save('resume.pdf');
}