Auth :
Reister Route :Done
verify Email: Done
Email verification: Done
Forget password:Done
Change password:Done
Login:Done

1. the register router needs an object of
   { "name","username", "profilePhoto", "password", "email", }
   but only {email, password} is being passed from the frontend
   ..this clashes with create Profile screen
2. after you have been sent email confirmation for reset password it sends you a link to the live version of the page
3. Error messages from backend are not exact so in some cases static error messages are used
4. password doesn't change on localhost i keep getting this { "success": false,
   "message": "Something went wrong. Maybe your reset link has expired"}. I hope this is a backend issue
   5.Step1 for createProfile getMaxDays is not defined
