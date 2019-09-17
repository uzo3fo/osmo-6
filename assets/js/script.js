
$(document).ready(function(){
    //get request
  $.get("http://localhost:3000/freelancer", function(data){
      for(var i = 0; i < data.length; i++){
          var list =  '<tr><td>'+data[i].name+'</td>';
          list += '<td>'+data[i].email+'</td>';
          list += '<td>'+data[i].country+'</td>';
          list += '<td>'+data[i].skill+'</td>';
          list += '<td>'+data[i].education+'</td>';
          list += '<td>'+data[i].description+'</td></tr>';

          $('table tbody').append(list);
      }
  })


  //post request
  $('#postForm').submit(function(e){
      e.preventDefault();
      var name =$('#name').val()
      var email =$('#email').val()
      var skills =$('#skills').val()
      var country =$('#country').val()
      var education =$('#education').val()
      var description =$('#description').val()
      var url =$(this).attr('action');
      $.post(url,
       {name:name, email:email, country:country, skills:skills, education:education,description:description}).done(
           function(data){
               console.log('post saved')
               $('table tbody').append(data);
           }
       )
  })
  
});

