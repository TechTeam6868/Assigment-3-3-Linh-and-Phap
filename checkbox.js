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

function submitClick(){
    var checkbox=document.getElementById('checkbox-id');
    var message=document.getElementById('message');
    if(checkbox.checked){
      message.style='color: blue'
      message.innerHTML='Đã chọn✅';
    }
    else{
      message.style='color: red'
      message.innerHTML='Bạn cần chọn vào đây👍';
    }
  }