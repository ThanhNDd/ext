// function submit() {
//     function contentScript(fn, ln){
//         document.write(" i am here . . .");
//         var hr = new XMLHttpRequest();
//         var url = "http://192.168.1.222/my_parse_file.php";
//         var vars = "name="+fn+"&details="+ln;
//         hr.open("POST", url, true);
//         hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//         hr.send(vars);
//     }

//     var fn = document.getElementById("name").value;
//     var ln = document.getElementById("details").value;

//     chrome.tabs.executeScript({
//         code: (contentScript.toString() + "\ncontentScript('" + fn + "', '" + ln + "');")
//     }); 
// }
function hello(){
    alert('hello world');
}
document.getElementById('submit_form').addEventListener('click', hello);