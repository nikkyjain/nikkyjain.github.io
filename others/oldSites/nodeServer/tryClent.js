function sendJSON(){ 
               
            let result = document.querySelector('.result'); 
            let name = document.querySelector('#name'); 
            let email = document.querySelector('#email'); 
               
            // Creating a XHR object 
            let xhr = new XMLHttpRequest(); 
            let url = "noi-vishalj:3000"; 
        
            // open a connection 
            xhr.open("POST", url, true); 
  
            // Set the request header i.e. which type of content you are sending 
            xhr.setRequestHeader("Content-Type", "application/json"); 
  
            // Create a state change callback 
            xhr.onreadystatechange = function () { 
                if (xhr.readyState === 4 && xhr.status === 200) { 
  
                    // Print received data from server 
                    result.innerHTML = this.responseText; 
  
                } 
            }; 
  
            // Converting JSON data to string 
            var data = JSON.stringify({ "name": name.value, "email": email.value }); 
  
            // Sending data with the request 
            xhr.send(data); 
        } 
