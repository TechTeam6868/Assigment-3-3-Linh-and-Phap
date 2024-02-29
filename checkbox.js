var check = document.getElementById('check');
var notification = document.querySelector('p');

check.addEventListener('change',() => {
    if(check.checked){
        notification.innerHTML = 'Đã chọn';
    }
    else{
        notification.innerHTML = 'Bạn cần chọn vào đây' 
    }
    notification.classList.toggle('blue');
});