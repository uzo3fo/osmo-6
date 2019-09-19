
$(document).ready(function(){
    let path = $(location).attr('pathname');
    console.log(path);
    
     if(path === "/view.html"){
        const url = window.location.href;
        const urlArray = url.split("id=");
        let id = urlArray[1];
        id = parseInt(id);
        
        
        

       $.get(`http://localhost:3000/freelancer/${id}`, function(data){
           console.log(data);

           $("#name").html(data.name);
           $("#email").html(data.email);
           $("#country").html(data.country);
           $("#skill").html(data.skill);
           $("#education").html(data.education);
           $("#description").html(data.description);
          
           
          
   
   
    })



    }

    //get request
  $.get("http://localhost:3000/freelancer", function(data){
      for(var i = 0; i < data.length; i++){
          var list =  '<tr><td>'+data[i].id+'</td>';
          list += '<td>'+data[i].name+'</td>';
          list += '<td>'+data[i].email+'</td>';
          list += '<td>'+data[i].country+'</td>';
          list += '<td>'+data[i].skill+'</td>';
          list += '<td>'+data[i].education+'</td>';
          list += '<td>'+data[i].description+'</td>';
          list += '<td>'+'<a href="view.html?id='+data[i].id+'" class="btn btn-primary" id="view-button">view</a>'+'</td>';
          //list += '<td>'+'<buttton class="btn btn-danger" id="delete-button">Delete</button>'+'</td></tr>';
         
          

          $('table tbody').append(list);
      }
  })

  //post request
  $('#postForm').submit(function(e){
      e.preventDefault();
      var name =$('#name').val()
      var email =$('#email').val()
      var skill =$('#skill').val()
      var country =$('#country').val()
      var education =$('#education').val()
      var description =$('#description').val()
      var url =$(this).attr('action');
      if(name === ''|| email === ''||skill === ''|| country === ''|| education === ''||description === ''){
          alert('Please fill in all fields')
      }
      else{
        $.post(url,
            {name:name, email:email, country:country, skill:skill, education:education,description:description}).done(
                function(data){
                    console.log('post saved')
                    $('table tbody').append(data);
                    
                }
            )
       
      }




     //
     
     
     

  //put request (update profile)
//  * $('#update-form').submit(function(e){
//       e.preventDefault();
//       var rowEl = $(this).closest('tr');
//       var id = rowEl.find('.id').text();
//       var newName = rowEl.find('.name').val();
//       var newEmail = rowEl.find('.email').val();
//       var newCountry = rowEl.find('.country').val();
//       var newSkills = rowEl.find('.skills').val();
//       var newEducation = rowEl.find('.education').val();
//       var newDescription = rowEl.find('.description').val();
  
//       var data = {newName:newName,
//                   newEmail:newEmail,
//                   newCountry:newCountry, 
//                   newSkiils:newSkills, 
//                   newEducation:newEducation, 
//                   newDescription:newDescription}
    
//     $.ajax({
//         url:'http://localhost3000/freelancer'+data[i].id,
//         type: 'PUT',    
//         data: data,
//         contentType: 'application/json',
//         success: function(data) {
//           console.log(data);
//           //$('#get-freelancer').click();
//           $('#view-form').append(data);
//       }
    
//          });
//     });
  });
  
});