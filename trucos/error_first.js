function asincrona(callback){
    setTimeout(function(){
        try{
            let a = 3 + z;
            callback(null, a);
        }catch(err){
            callback(err,null);
        }
    }, 1000);
}

asincrona(function(err, dato){
    if(err){
        console.error('Tenemos un error');
        console.error(err);
        return false;
        // throw err;
    }
    console.log('Todo ha ido bien, mi data es', dato);
});