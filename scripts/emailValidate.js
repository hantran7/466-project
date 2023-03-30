function feedbackFormValidate()
{
    var contactFormObj = document.getElementById("contactForm");
    var email = contactFormObj.email.value;
    var everythingOK = true;

    if (!validateEmail(email))
    {
        alert("Error: Invalid e-mail address.");
        everythingOK = false;
    }
    
    if (everythingOK)
    {
        if (contactFormObj.reply.checked)
            alert("Warning: The e-mail feature is currently not supported.");
        alert("All the information looks good.\nThank you!");
        return true;
    }
    else
        return false;
}

function validateEmail(address)
{
    var p = address.search(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/);
    if (p == 0)
        return true;
    else
        return false;
}