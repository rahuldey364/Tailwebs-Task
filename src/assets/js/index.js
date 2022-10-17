// $("#add_student").submit(function(event){
//     alert("data inserted sucessfully")
// })

// $("#login").submit(function(event){
//     alert("login sucessful")
// })

// $("#signup").submit(function(event){
//     alert("user creation sucessful")
// })

$("#update_student").submit(function(event){
    event.preventDefault()
    const unindexed_array = $(this).serializeArray();
    const data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })

    const request = {
        "url" : `https://student-management-tailwebs.herokuapp.com/update-student/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
    })
})
if(window.location.pathname == "/user"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `https://student-management-tailwebs.herokuapp.com/delete-student/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Do you really want to delete this record?")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Successfully!");
                location.reload();
            })
        }

    })
}