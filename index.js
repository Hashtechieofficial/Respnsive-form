const signinbtn=document.querySelector('.signinbtn')
const signupbtn=document.querySelector('.signupbtn')
const formbox=document.querySelector('.form-box')
const body=document.querySelector('body')
signupbtn.onclick=function(){
    formbox.classList.add('active')
    body.classList.add('active')
}
signinbtn.onclick=function(){
    formbox.classList.remove('active')
    body.classList.remove('active')
}