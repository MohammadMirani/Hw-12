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



// $.post("https://reqres.in/api/users", data, function (res) {
//     console.log(res);
// })

// $.ajax({
//     method: "GET",
//     url: "https://reqres.in/api/users?page=2",
//     success: function(result){
//         console.log(result.data);
//     }
// })

// $.ajax({
//     method: "POST",
//     url : "https://reqres.in/api/users",
//     data: {name:"ali",age:22},
//     success :function(result){
//         console.log(result);
//     }
// })
// $.post("https://reqres.in/api/users", data, function (result) {
//     console.log(result);
//     $.get("https://reqres.in/api/users?page=2", function (res) {
//         console.log(res.data);
//     })
// })

//     $.ajax({
//         method: "GET",
//         url: "https://reqres.in/api/users/44",
//         success: function(result){
//             console.log(result);
//         },
//         error:function(){
//             console.log("Error");
//         }
//     })

// })