// elements
const input = document.getElementById('email');
const vaildEmail = document.getElementById('vaild-email');
const submit = document.getElementsByTagName('button');
const main = document.getElementsByTagName('main')[0];  
const section = document.getElementsByTagName('section')[0];

// succses sign on
submit[0].addEventListener('click',(e) => {
    let symbolArr = ['@','gmail.com'];
    let inputValue = input.value; 

    e.preventDefault();
    
    if(!inputValue.includes(symbolArr[0] && symbolArr[1])){
        vaildEmail.style.opacity = '1';
        input.style.backgroundColor = 'rgb(251 196 192)';
        input.style.border = '1px solid hsl(4, 100%, 67%)';
        input.style.color = 'hsl(4, 100%, 67%)';
    }else{
        vaildEmail.style.opacity = '0';
        // input.style.backgroundColor = 'white';   
        input.style.border = '1px solid hsl(4, 100%, 67%)';
        input.style.color = 'hsl(4, 100%, 67%)';
        input.style.border = '1px solid hsl(0, 0%, 100%)';
        input.style.color = 'black';
        section.style.display = 'grid';
        main.style.display = 'none';
    };
});
submit[1].addEventListener('click',(e) => {

    if(true){
        section.style.display = 'none';
        main.style.display = 'flex';
        location.reload();
    };
});

