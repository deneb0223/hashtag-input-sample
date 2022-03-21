// ES 5이하 문법으로 진행

(function(){
    
    var input, hashtagArray, container, t;

    input = document.querySelector('#hashtags');
    container = document.querySelector('.tag-container');
    hashtagArray = [];

    var ENTER_KEY_CODE = 13;

    input.addEventListener('keyup', function(e) {
        if (e.which == ENTER_KEY_CODE && input.value.length > 0) {
            var text = document.createTextNode(input.value);
            var p = document.createElement('p');
            container.appendChild(p);
            p.appendChild(text);
            p.classList.add('tag');
            input.value = '';
        
            var deleteTags = document.querySelectorAll('.tag');
        
            for(let i = 0; i < deleteTags.length; i++) {
                deleteTags[i].addEventListener('click', function(e) {
                    container.removeChild(deleteTags[i]);
                });
            }
        }

    });
}());
