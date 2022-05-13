var label1=labelcreate("label","for","fname","First Name:-");
 var b1=linebreak();
 var input1=createinput("input","type","text","id","fname");
 var b2=linebreak();
 var label2=labelcreate("label","for","lname","Last Name:-")
 var b3=linebreak();
 var input2=createinput("input","type","text","id","lname");
 var b4=linebreak();
 var label3=labelcreate("label","for","address","Address:-")
 var b5=linebreak();
 var input3=createinput("input","type","text","id","address");
 var b6=linebreak();
 var label4=labelcreate("label","for","pincode","Pincode:-")
 var b7=linebreak();
 var input4=createinput("input","type","text","id","pincode");
 var b8=linebreak();
 var label5=labelcreate("label","for","gender","Gender:-")
 var b9=linebreak();
 var label6=labelcreate("label","for","gender","Male","","id","genm")
 var input5=createinput("input","type","radio","name","gender","id","genderm");
 var label7=labelcreate("label","for","gender","Female","","id","genf")
 var input6=createinput("input","type","radio","name","gender","id","genderf");
 var b10=linebreak();
 var label8=labelcreate("label","for","country","Country:-")
 var b11=linebreak();
 var input7=createinput("input","type","text","id","country");
 var b12=linebreak();
 var label9=labelcreate("label","for","cof","Choice Of Food :-(must select atleast 2 out of 5 options)")
 var b13=linebreak();
 var input8=createinput("input","type","checkbox","id","cof1");
 var label10=labelcreate("label","for","cof1","North Indian","id","north");
 label10.style.fontFamily="italic"
 var b14=linebreak();
 var input9=createinput("input","type","checkbox","id","cof2");
 var label11=labelcreate("label","for","cof2","South Indian","id","south");
 label11.style.fontFamily="italic"
 var b15=linebreak();
 var input10=createinput("input","type","checkbox","id","cof3");
 var label12=labelcreate("label","for","cof3","Chineese","id","chine");
 label12.style.fontFamily="italic"
 var b16=linebreak();
 var input11=createinput("input","type","checkbox","id","cof4")
 var label13=labelcreate("label","for","cof4","Italian","id","ital")
 label13.style.fontFamily="italic"
 var b17=linebreak();
 var input12=createinput("input","type","checkbox","id","cof5")
 var label14=labelcreate("label","for","cof5","Mexican","id","mexi")
 label14.style.fontFamily="italic"
 var b18=linebreak();
var input13=createinput("input","type","submit","id","submit")
var b19=linebreak();
var b20=linebreak();
document.body.append(label1,b1,input1,b2,
    label2,b3,input2,b4,label3,b5,input3,b6,label4,b7,input4,b8,label5,b9,input5,label6,
    input6,label7,b10,label8,b11,input7,b12,
    label9,b13,input8,label10,b14,input9,label11,b15,input10,
    label12,b16,
    input11,label13,b17,input12,label14,b18,input13,b19,b20)

    function createele(elementname,value){
      var ele=document.createElement(elementname);
      ele.innerHTML=value;
      return ele;
     } 
 function createselect(tagname,attributename1,attributevalue1,attributename2,attributevalue2){
var select=document.createElement(tagname);
select.setAttribute(attributename1,attributevalue1);
select.setAttribute(attributename2,attributevalue2);
return select;
 }
 function labelcreate(tagname,attrname,attrvalue,content,attrname1,attrvalue1){
 var ele=document.createElement(tagname);
 ele.setAttribute(attrname,attrvalue,attrname1,attrvalue1);
 ele.innerHTML=content;
 return ele;
 }
 function linebreak(){
     var br=document.createElement("br");
     return br;
 }
 function createinput(tagname1,attrname1,attrvalue1,attrname2,attrvalue2,attrname3,attrvalue3){
 var element=document.createElement(tagname1);
 element.setAttribute(attrname1,attrvalue1);
 element.setAttribute(attrname2,attrvalue2);
 element.setAttribute(attrname3,attrvalue3);
 return element;
 
 }
 document.getElementById("submit")
input13.addEventListener("click",table)
 function table(){
 var table=document.createElement("table");
 table.className="table";
 var thead=document.createElement("thead");
 thead.className="thead-dark";
 var tr1=document.createElement("tr");
 var th1=createele("th","Firstname");
 var th2=createele("th","Lastname");
 var th3=createele("th","Address");
 var th4=createele("th","Pincode");
 var th5=createele("th","Gender");
 var th6=createele("th","Country");
 var th7=createele("th","Choice Of Food");
 tr1.append(th1,th2,th3,th4,th5,th6,th7);
 thead.append(tr1);
 var tbody =document.createElement("tbody");
var tr2=document.createElement("tr");
var td1=createele("td","");
var td2=createele("td","");
var td3=createele("td","");
var td4=createele("td","");
var td5=createele("td","");
var td6=createele("td","");
var td7=createele("td","");
var fn=document.getElementById("fname").value
td1.append(fn)
var ln=document.getElementById("lname").value
td2.append(ln)
var addrs=document.getElementById("address").value
td3.append(addrs)
var pincde=document.getElementById("pincode").value
td4.append(pincde)


var btn1=document.getElementById("genderm")
td5.append(btn1)
td5.append("Male")
var btn2=document.getElementById("genderf")
td5.append(btn2)

td5.append("Female");

var ctry=document.getElementById("country").value
td6.append(ctry)



var food1=document. getElementById('cof1')
   td7.append(food1)
   td7.append("North Indian")

   var food2=document. getElementById('cof2')
   td7.append(food2)
   td7.append("South Indian")

   var food3=document. getElementById('cof3')
   td7.append(food3)
   td7.append("Chineese")

   var food4=document. getElementById('cof4')
   td7.append(food4)
   td7.append("italian")

   var food5=document. getElementById('cof5')
   td7.append(food5)
   td7.append("Mexican")
   
   
tr2.append(td1,td2,td3,td4,td5,td6,td7)
tbody.append(tr2);
table.append(thead,tbody);
document.body.append(table);
return table

}

