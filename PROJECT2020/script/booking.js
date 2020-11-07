function BookNow(guestName,guestEmail,guestPax,guestRemarks){ 
    let url = 'https://api.sheety.co/2454db3dc62818de8c41a972391b8bfe/bookingApp/booking';
    let body = {
      booking: {
        name:guestName, 
        email:guestEmail, 
        pass:guestPax, 
        remark:guestRemarks
      }
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 
       "Content-Type":"application/json"
      }
    })
    .then((response) => response.json())
    .then(json => {
      // Do something with object
      console.log(json.booking); 
     alert(json.booking.name + "successfully added"); 
    });
  }  
window.addEventListener("load", function(){ 
    document.getElementById("bookNow").addEventListener("click", function(){ 
        let guestName = document.getElementById("guestName").value; 
        let guestEmail = document.getElementById("guestEmail").value; 
        let guestPax = document.getElementById("guestPax").value;   
        let guestRemarks = document.getElementById("guestRemarks").value;  
     
     
        BookNow(guestName,guestEmail,guestPax,guestRemarks);

    }); 
 
   
   


});