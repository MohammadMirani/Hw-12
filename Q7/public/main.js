// $(document).ready(function () {

//     $('.signIn').click(function (e) {
//         // console.log($('.userBox').html());
//         let userName = $('#userBox').val();
//         let passWord = $('#passBox').val();
//         let user ={userName,passWord}
//         console.log(user);
    

//         // e.preventDefault();

//         $.ajax({
//             method: "POST",
//             url: "http://localhost:5005/",
//             data: {
//                 userName,
//                 passWord
//             },
//             success: function (result) {
//                 console.log(result.data);
//             }
//         })



//     });


// });

function myFunc () {
    let userName = document.getElementById('userBox').value;
    let passWord = document.getElementById('passBox').value;
    let user ={userName,passWord}
    console.log(user);

    return user;

}

module.exports = {myFunc};
 


// $.ajax({
//     method: "GET",
//     url: "https://reqres.in/api/users?page=2",
//     success: function(result){
//         console.log(result.data);
//     }
// })
