
$(document).ready(function(){
    let path = $(location).attr('pathname');
    console.log(path);
    //To view a single object
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
           $("#update-div").html('<a href="update.html?id='+data.id+'" class="btn btn-warning" id="update-button">UPDATE</a>');
           
    })

    }

    //get request
  $.get("http://localhost:3000/freelancer", function(data){
      for(let i = 0; i < data.length; i++){
          let list =  '<tr><td>'+data[i].id+'</td>';
          list += '<td>'+data[i].name+'</td>';
          list += '<td>'+data[i].email+'</td>';
          list += '<td>'+data[i].country+'</td>';
          list += '<td>'+data[i].skill+'</td>';
          list += '<td>'+data[i].education+'</td>';
          list += '<td>'+data[i].description+'</td>';
          list += '<td>'+'<a href="view.html?id='+data[i].id+'" class="btn btn-primary" id="view-button">view</a>'+'</td>';
          list += '<td>'+'<button  class="btn btn-danger delete" value='+data[i].id+' id="delete-button">delete</button>'+'</td></tr>';
         
          $('table tbody').append(list);
      }

      //delete 
       $(".delete").click(function(e){
           e.preventDefault();
           const id = $(this).val()
 
        $.ajax({
           url:`http://localhost:3000/freelancer/${id}`,
           method: "DELETE",
           success: function(res){
            alert("Delete successful. please refresh");
          }
       })
     })
  })

  //post request
  $('#postForm').submit(function(e){
      e.preventDefault();
      let name =$('#name').val()
      let email =$('#email').val()
      let skill =$('#skill').val()
      let country =$('#country').val()
      let education =$('#education').val()
      let description =$('#description').val()
      let url =$(this).attr('action');
      //validation
      if(name === ''|| email === ''||skill === ''|| country === ''|| education === ''||description === ''){
          alert('Please fill in all fields')
      }
      else{
        $.post(url,
            {name:name, email:email, country:country, skill:skill, education:education,description:description}).done(
                function(data){
                    console.log('post saved')
                    alert("sign-up successful. Refresh page")
                    $('table tbody').append(data);
                    
                }
            )
       
      }


 //update profile
    if(path === "/update.html"){
        console.log(path)
        $('#update-button').click(function(e){
          e.preventDefault();

          let name = $("#editName").val();
          let email = $("#editEmail").val();
          let country = $("#editCountry").val();
          let skill = $("#editSkill").val();
          let education = $("#editEducation").val();
          let description = $("#editDescription").val();

          //validation
          if(name === ""||email === ""||country === ""|| skill === ""||education === ""||description === ""){
              alert("please fill all input")
          }else{
              let data = {
                  "name":name,
                  "email": email,
                  "country": country,
                  "skill": skill,
                  "education": education,
                  "description": description
              }

              $.ajax({
                  url:`http://localhost:3000/freelancer/${id}`,
                  method: "PUT",
                  data: data,
                  success: function(res){
                      window.location.replace("freelancer.html")
                  }
              })
          }

        })
     }
     
    
     

 
  });
  
});