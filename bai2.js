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