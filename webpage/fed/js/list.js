document.querySelector('#btn').onclick = function() {
    if(document.querySelector('#todolist input').value.length == 0){
        alert('Please enter the list')
    }
    else{
        document.querySelector('#list').innerHTML +=  `
        <div class="task">
                <span id="taskname">
                ${document.querySelector('#todolist input').value}
                </span>
                
                <button class="delete">
                <i class="fa fa-trash-o" aria-hidden="true"></i>
                </button>
        </div>
        `;
        var current_list = document.querySelectorAll(".delete");
        for(var i=0; i<current_list.length; i++){
            current_list[i].onclick = function(){
                this.parentNode.remove();
            }  
        }
       var list = document.querySelectorAll(".task");
       for (var i=0; i<list.length; i++){
           list[i].onclick = function(){
               this.classList.toggle('completed');
           }
       }
       document.querySelector("#todolist input").value="";
        
    }
}