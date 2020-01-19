_=0;
      addEventListener('load', function(ev){
      _ ; [].slice.apply(document.querySelectorAll('button.counting')).forEach(function(e){
      _ , _ ; e.addEventListener('click', function(evt){
      _ , _ , _ ; var a = parseInt(this.getAttribute('data-count'));
      _ , _ , _ ; a = isNaN(a)? 1: a+1;
      _ , _ , _ ; ccc.textContent = a+1;
      _ , _ , _ ; this.setAttribute('data-count', a);
      _ , _ ; }, false);
      _ ; });
      }, false);