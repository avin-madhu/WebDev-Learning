function submitForm()
{
   var fname =  document.getElementById('fname').value
   var lname = document.getElementById('lname').value
   var email =  document.getElementById('email').value
   var message = document.getElementById('message-box').value


   if(fname == ''||lname == ''||email == ''|| message == '')
   {
      if(fname='')
      {
        alert('please enter your first name')
      }
      
      alert('Please enter all fields!!')
   }
   else
   {
      alert('Form Successfully Submitted!!\n\nFirst Name: '+fname+'\nLast Name: '+lname+'\nE-Mail: '+email+'\nMessage: '+message)
   }
   return
}

