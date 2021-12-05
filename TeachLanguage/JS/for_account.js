// Inside Account
document.getElementById('task_resultsbtn').addEventListener("click" , ()=>{
    document.getElementById('task_results').style.display = "block";
    document.getElementById('person').style.display = "none"
    document.getElementById('rating').style.display = "none";

});
document.getElementById('account_settings').addEventListener("click" , () =>{
    document.getElementById('task_results').style.display = "none";
    document.getElementById('person').style.display = "block";
    document.getElementById('rating').style.display = "none";

})
document.getElementById('rating_btn').addEventListener("click" , () =>{
    document.getElementById('rating').style.display = "block";
    document.getElementById('person').style.display = "none";
    document.getElementById('task_results').style.display = "none";
})