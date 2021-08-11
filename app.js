const display = document.querySelector("input"),
      button = document.querySelector("button"),
      copyBtn = document.querySelector("span.far"),
      copyActive = document.querySelector("span.fas");

      var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
let copyText = document.querySelector(".copy");
      button.onclick = ()=>{
        let i,
        randomPassword = "";
        copyBtn.style.display = "block";
        copyActive.style.display = "none";
        if (document.getElementById('sayisal').checked == true) {
          var chars = "0123456789";
        }
        else if(document.getElementById('harf').checked == true){
          var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
        else if(document.getElementById('harfsayi').checked==true){
          var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        }
        else{
          var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
        }
        for (i = 0; i < 15; i++) {
          randomPassword = randomPassword + chars.charAt(
            Math.floor(Math.random() * chars.length)
          );
        }
        display.value = randomPassword;
      }
      
      function copy(){
        copyText.innerHTML ="Kopyalandı!";
          setTimeout(function(){ copyText.innerHTML =""; }, 1500);

        copyBtn.style.display = "none";
        copyActive.style.display = "block";
        setTimeout(function(){copyBtn.style.display = "block";},1500);
        setTimeout(function(){copyActive.style.display = "none";},1500);
        
        display.select();
        document.execCommand("copy");
        document.getElementById("kopyala").innerHTML.replace("Kopyalandı");
        // alert("Kopyalandı!")
      }

