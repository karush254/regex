button.onclick = function () { 
  let file = document.getElementById("file").files[0]; 
  let reader = new FileReader(); 
  reader.readAsText(file); 
  reader.onload = function () { 
      let text = reader.result; 
      const regex = text.match(/background-color:\s*(#[0-9A-Za-z]{3,6}|[a-z]{3,}|rgb\([0-9]{1,3},\s*[0-9]{1,3},\s*[0-9]{1,3}\));/gi); 
      console.log(regex);
      for (let i = 0; i < regex.length; i++) {
        let x = regex[i]
        let colour = x.split(": ")[1].replace(/;/g, "")
        let newdiv = document.createElement("div")
          newdiv.classList.add("newdiv");
          newdiv.style.background = `${colour}`
          newdiv.innerHTML = `background-color: ${colour};`
            div.append(newdiv)
        
      } 
  } 
};


let div = document.getElementById("div")



