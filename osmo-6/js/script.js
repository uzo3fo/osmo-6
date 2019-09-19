
$(document).ready(function(){
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
          list += '<td>'+'<a href="update.html?id=+id" class="btn btn-warning" id="update-button">Update</a>'+'</td>';
          list += '<td>'+'<buttton class="btn btn-danger" id="delete-button">Delete</button>'+'</td></tr>';
         
          

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
     

  //put request (update profile)
  $('#update-form').submit(function(e){
      e.preventDefault();
      var rowEl = $(this).closest('tr');
      var id = rowEl.find('.id').text();
      var newName = rowEl.find('.name').val();
      var newEmail = rowEl.find('.email').val();
      var newCountry = rowEl.find('.country').val();
      var newSkills = rowEl.find('.skills').val();
      var newEducation = rowEl.find('.education').val();
      var newDescription = rowEl.find('.description').val();
  
      var data = {newName:newName,
                  newEmail:newEmail,
                  newCountry:newCountry, 
                  newSkiils:newSkills, 
                  newEducation:newEducation, 
                  newDescription:newDescription}
    
    $.ajax({
        url:'http://localhost3000/freelancer'+ id,
        type: 'PUT',    
        data: data,
        contentType: 'application/json',
        success: function(data) {
          console.log(data);
          $('#get-freelancer').click();
      }
    
  })
    
  });



 /* document.getElementById('postForm').addEventListener('submit', saveIssues);

function saveIssues(e){
    var nameIssue = document.getElementById('name').val();
    var emailIssue = document.getElementById('email').val();
    var countryIssue = document.getElementById('country').val();
    var skillsIssue = document.getElementById('skills').val();
    var eduIssue = document.getElementById('education').val();
    var descIssue = document.getElementById('description').val();
}

   function fetchIssues(){
      var freelancer = JSON.parse(localStorage.getItems('freelancer'));
      var viewForms = document.getElementById(view-form);
      issuesList.innerHtml = ''

      for(var i = 0; i<freelancer.length; i++){
          var id = freelancer[i].id;
          var name = freelancer[i].name;
          var email = freelancer[i].email;
          var skills = freelancer[i].skills;
          var country = freelancer[i].country;
          var edu = freelancer[i].education;
          var desc = freelancer[i].description;


          issuesList.innerHtml += '<div class="well">'+
                                   '<h5> NAME: '+name+'</h5>'+
                                   '<p> EMAIL: '+email+'</p>'+
                                   '<p> COUNTRY:'+country+'</p>'+
                                   '<p> SKILLS:'+skills+'</p>'+
                                   '<p> EDUCATION:'+education+'</p>'+
                                   '<p> DESCRIPTION:'+description+'</p>'+
                                   '<a href="#" class="btn btn-warning">'+UPDATE+'</a>'+
                                   '<a href="#" class="btn btn-danger">'+DELETE+'</a>'+
                                   '</div>';

      }
  } 
    */

})
  
});

