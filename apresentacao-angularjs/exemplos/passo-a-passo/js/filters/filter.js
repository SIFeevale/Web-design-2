
app.filter('upper', function(){
  return function(input){
    return input.toUpperCase();
  }
})
.filter('lower', function(){
  return function(input){
    return input.toLowerCase();
  }
})
.filter('case', function(){
  return function(input, tipo){
    if(tipo == 'upper'){
      return input.toUpperCase();
    }else if(tipo == 'lower'){
      return input.toLowerCase();   
    }
    return input;
  }
});