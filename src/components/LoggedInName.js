import React from 'react';
function LoggedInName()
{
    var _ud = localStorage.getItem('user_data');
    var ud = JSON.parse(_ud);
    var userId = ud.id;
    var firstName = ud.firstName;
    var lastName = ud.lastName;

    const doLogout = event =>{
        event.preventDefault();
        localStorage.romoveItem("user_datadata")
        window.location.href = '/';
    };
    return(
        <div id="loggedInDiv">
            <span id="userName">Logged In As John Doe </span><br />
            <button type="button" id="logoutButton" class="buttons" onClick={doLogout}> Log Out </button>
        </div>
    );
};
export default LoggedInName;