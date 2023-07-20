// const fruits = [
//     'Apple', 'Apricot', 'Avocado', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'kiwi'
// ]

// let result = document.getElementById('result');

const handleLoad = () =>{

//     for(const fruit of fruits){        
//         let p = document.createElement('p');
//         let a = document.createElement('a');
//         a.href = "google.com"
//         a.innerText = fruit;
//         p.appendChild(a);
//         p.className="p";
//         result.appendChild(p)
//     }

}

const handleSearchFruit = () =>{
    let filter = document.getElementById('input_box').value.toUpperCase();
    let result = document.getElementById('result');
    let p = result.getElementsByTagName('p');
    for( var i = 0; i<p.length; i++){
        let a = p[i].getElementsByTagName('a')[0];
        let textValue = a.textContent;

        if(textValue.toUpperCase().indexOf(filter) > -1){
            p[i].style.display = '';

        }
        else{
            p[i].style.display = 'none'; 
        }
    }
    // fruits.filter((fruit,id) =>  )

  }