
document.querySelector('#button').onclick = function()
{
    const password = document.querySelector('#pass').value;
    const confirmpassword = document.querySelector('#confirmpass').value;

    if(password != confirmpassword)
    {
        alert("Confirm Password didn't match");
        return false;

    }


}

