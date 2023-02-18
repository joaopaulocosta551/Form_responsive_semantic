

function togglePasswordVisibility(elementVisible) {
    const elementNotVisible = Array.from(document.querySelectorAll('.img-icon-eye')).filter(e => e !== elementVisible)[0];

    elementVisible.style.display = 'none';
    elementNotVisible.style.display = 'flex';

    const type = elementVisible.getAttribute("id") === "iconHideClose" ? "password" : "text";
    document.querySelector('#tipoSenha').setAttribute("type", type);
    
  }


// function showHide(){
//     if(password.type === 'password'){
//         password.setAttribute('type', 'text');
//         iconHideClose.style.display='none';
//         iconEyeOpen.style.display = 'flex';
//     } else {
//         password.setAttribute('type', 'password');
//         iconHideClose.style.display='flex';
//         iconEyeOpen.style.display ='none';
 
//     }
// }
