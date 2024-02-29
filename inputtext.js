var name1 = document.querySelector('#inputname');
var age1 = document.querySelector('#inputage');
var address1 = document.querySelector('#inputaddress');
var submit = document.querySelector('#subm');


submit.onclick = () => {
    var namevalue = name1.value;
    var agevalue = age1.value;
    var addressvalue = address1.value;

    alert(`Tên: ${namevalue}
Tuổi: ${agevalue}
Địa chỉ: ${addressvalue}`)
};
