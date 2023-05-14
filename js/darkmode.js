const btn_darkmode = document.getElementById('darkmode');
btn_darkmode.addEventListener('click', function(){
    
    if( document.body.classList.contains('dark') ){
        document.body.classList.remove('dark');
    }else{
        document.body.classList.add('dark');
    }
    
});