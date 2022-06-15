const form = document.querySelector('#addForm')
const itemLists = document.getElementById('items');
const search = document.querySelector('#search');




form.addEventListener('submit', addItem);

itemLists.addEventListener('click', removeItem);

search.addEventListener('keyup', searchItems);
 
// Styling Odd and Even list



// function add item
function addItem(e){
    e.preventDefault();
    const newItem = document.getElementById('input').value;

    
   if(document.getElementById('input').value != ""){
    li = document.createElement('li');
    li.className = "list-group-item";

    li.appendChild(document.createTextNode(newItem));
    console.log(li);
    const delee = document.createElement('button');
    delee.className =' btn btn-danger btn-sm float-right delete';
    delee.appendChild(document.createTextNode('X'));
    li.appendChild(delee);

    itemLists.appendChild(li);
   }
   document.getElementById('input').value = "";

   }
   function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm(`Are you Sure you want to delete this selected item`)){
            const li = e.target.parentElement;
            li.style.display ='none'
        }
    }
        

}
function searchItems(e){
    var text = e.target.value.toLowerCase();
    var items  =   itemLists.getElementsByTagName('li');
    // console.log(items)
    Array.from(items).forEach(function(item){
        const itemName = item.firstChild.textContent;
        console.log(itemName);

        if(itemName.toLowerCase().indexOf( text) != -1){
            item.style.display = "block"
        }else{
            item.style.display = "none"
        }
    })

}
