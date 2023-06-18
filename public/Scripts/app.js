/* 
Student Name: Andre Henrique Moyses de Assis
Student number: 301282773
File: app.js
Date: 2023-06-17
*/

// IIFE


(function(){
    function Start()
    {
        console.log("App Started...")

        let deleteButtons = document.querySelectorAll('.btn-danger')

        for(button of deleteButtons){
            button.addEventListener('click', (event) =>{
                if(!confirm('Are you sure?')){
                event.preventDefault();
                window.location.assign('/contact-list');
                }
            });
        }
    }

    window.addEventListener("load", Start);
})();