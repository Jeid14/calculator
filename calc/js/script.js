var count = 0;
function insert(num) {
            var text = document.form.textView.value;
                if(num =="."){
                    count+=1;
                }else if(num == "+"||num == "-"||num == "*"||num == "/"){
                    count = 0;
            }
            if(count>=2&&num=="."){
                    num = "";
                    }
    for(i=0;i<text.length;i++){
    if((num == "+"||num == "-"||num == "*"||num == "/")){
       if(text[i]== "+"||text[i]== "-"||text[i]== "*"||text[i]== "/")
           num="";
    }
    }
             document.form.textView.value = document.form.textView.value + num
            
        }
        function clean() {
            document.form.textView.value = "";
        }

        function back() {
            var exp = document.form.textView.value;
            document.form.textView.value = exp.substring(0, exp.length - 1);
        }
       function equal(){
           var numOne = "" ;
           var numSec ="";
           var operation="" ;
           var c ="";
          var text = document.form.textView.value;
           for(i=0;i<text.length;i++){
               if(text[i]!="*"&&text[i]!="+"&&text[i]!="/"&&text[i]!="-"){
                    numOne = numOne + text[i];
               }
               else{
                   operation = text[i];
                   c = i;
                    break;
               }
              
           }
           for(i = c+1;i<text.length;i++){
               numSec =numSec+text[i];
               
           }
           if(numOne.length == 0){
               numOne = "0";
           }
           if(numSec.length == 0){
               numSec = "0";
           }
           numOne = Number.parseFloat(numOne);
           numSec = Number.parseFloat(numSec);
           switch(operation){
                   case"+":
                   document.form.textView.value = numOne+numSec;
                   break;
                   case"-":
                   document.form.textView.value = numOne-numSec;
                   break;
                   case"*":
                   document.form.textView.value = numOne*numSec;
                   break;
                   case"/":
                   document.form.textView.value = numOne/numSec;
                   break;
                   
           }
          
}