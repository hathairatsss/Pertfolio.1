window.onload = pageLoad;

function pageLoad(){
    var xhr = new XMLHttpRequest(); 
    xhr.open("GET", "cloth.json"); 
    xhr.onload = function() { 
       var jsdata = JSON.parse(xhr.responseText);
        console.log(jsdata);
        showData(jsdata);}; 
    xhr.onerror = function() 
        { alert("ERROR!"); }; 
    xhr.send();	
}

function showData(data){
	var layerDiv = document.getElementById("layer");
    layerDiv.innerHTML = '';

    for(var key in data){
        if (data.hasOwnProperty(key)){
            var item = data[key];
            var productDiv = document.createElement("div");

            var img = document.createElement("img");
            img.src = item.img;
            img.alt = item.brand + "" + key;

            var brandP = document.createElement("p");
            brandP.textContent = item.brand;

            var priceP = document.createElement("p");
            priceP.textContent = "Price: " + item.price + " Bath";

            productDiv.appendChild(img);
            productDiv.appendChild(brandP);
            productDiv.appendChild(priceP);

            layerDiv.appendChild(productDiv);
        }
    }

}

// ฟังก์ชันสร้างหิมะ
function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  snowflake.textContent = "❄"; // ใช้ Unicode หิมะ
  snowflake.style.left = Math.random() * window.innerWidth + "px";
  snowflake.style.fontSize = Math.random() * 10 + 10 + "px";
  snowflake.style.animationDuration = Math.random() * 5 + 5 + "s"; // ความเร็ว
  snowflake.style.opacity = Math.random();

  document.body.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, 10000);
}

// สร้างหิมะเรื่อย ๆ
setInterval(createSnowflake, 200);
