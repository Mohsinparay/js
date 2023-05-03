

function additem(){
    let input = document.getElementById("item");
    let main = document.getElementById("main");
    let value = input.value;
    let btn = document.createElement("button");
    
    const btnn = document.createElement("button");
    btnn.addEventListener('click', function handleClick(event) {
        main.removeChild(btnn);
        main.removeChild(br);
      main.removeChild(para);
      main.removeChild(btn);
      main.removeChild(btnn);
      main.removeChild(br); main.removeChild(br);
    });
    btn.addEventListener('click', function handleClick(event) {
    para.style="border:1px solid green;"
    main.removeChild(btn);
    
    
    });
    
    const para = document.createElement("li");
    const br = document.createElement("hr");
    para.id = 'edit'; 
    btn.id = 'edit-button';
    btnn.id = 'end-editing';
    // btnn.onclick =  function() { alert('blah'); 
    btn.innerHTML = '&#10003 Done'; 
    btnn.innerHTML = '&#xe872;'+"Delete"; 
    para.classList.add("list-input-box");
    para.innerText = value;
    para.style="list-style: decimal-leading-zero;"
    
    // Append to body:
    
    main.appendChild(para);
    main.appendChild(br);
    main.appendChild(btn);
    main.appendChild(btnn);
    main.appendChild(br);
    
    }
    