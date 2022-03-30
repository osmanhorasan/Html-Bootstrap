
function on_click(element)
{
    var a = element.style.backgroundColor;
    if(a!="red"){
    element.style.backgroundColor = "red";
    element.style.color = "#fff";        
    }
    else{
        element.style.backgroundColor = "#f2f2f2"; 
        element.style.color = "#212529";    
    }
}

function on_click_del(element)
{
    document.getElementById(element).remove();
    document.getElementById("toast-body").innerHTML = "Listeden  Kaldırıldı"
}

function task(element){
    return  document.getElementById(element).value;
}


function newElement(element){

    if(task("task") != "" && task("task") != " "){
    var element = document.getElementById(element);
    element.innerHTML ='<li onclick="on_click(this)" id="'+element.children.length+'"><p>'+task("task")+'</p><button id="liveToastBtn1" onclick="on_click_del('+element.children.length+')" class="btn">X</button></li>' + element.innerHTML;
    document.getElementById("toast-body").innerHTML = "Listeye Eklendi";

    }

    else{
        document.getElementById("toast-body").innerHTML = "Lütfen boş ekleme yapmayınız"
    }
}

var toastTrigger = document.getElementById('liveToastBtn1')
var toastLiveExample = document.getElementById('liveToast1')
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
  })
}

var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
  })
}