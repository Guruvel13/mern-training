//call back
function submitform(submit,db){
    console.log(db());
    console.log(submit);
}


function database(){
    dbName = "sample";
    return (dbName,"Data is stored in database");
}

submitform("Form Submitted ",database);
