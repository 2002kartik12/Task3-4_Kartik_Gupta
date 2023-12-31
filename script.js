
document.getElementById('username').addEventListener('blur', function () {
   var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (document.getElementById('username').value.match(pattern)) {
         document.getElementById('usernameError').textContent = '';
      return true;
      } else {
         document.getElementById('usernameError').textContent = 'Please enter a valid email address';
         return false;
      }
});

document.getElementById('password').addEventListener('blur', function() {
   var pass=document.getElementById('password').value;
   var pattern = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[@]).{4,}$/;
   
   if (document.getElementById('password').value.match(pattern)) {
      document.getElementById('passwordError').textContent = '';
      alert("Login Successfully");
      return true;
   } 
   else {
   document.getElementById('passwordError').textContent = 'Password should contain at least 4 characters, including Uppercase, number and special character (@)';
   return false;
}
});

document.getElementById('password').addEventListener('blur', function() {
   var pattern = 'SmartServTest@123';
   if (document.getElementById('password').value.match(pattern)) {
      document.getElementById('passwordError').textContent = '';
      alert("Login Successfully,Going to dashboard");
      window.location.href = 'dashboard.html';
   } 
   else {
   document.getElementById('passwordError').textContent = 'Password should contain at least 4 characters, including Uppercase, number and special character (@)';
   return false;
}
});

function openEmailClient() {
   // Replace the subject and body with appropriate content
   const subject = encodeURIComponent('Password Reset Request');
   const body = encodeURIComponent('Hello,\n\nI need assistance with resetting my password. Please help.');
 
   // Open default email client with pre-filled details
   window.location.href = `mailto:support@smartserv.io?subject=${subject}&body=${body}`;
 }
