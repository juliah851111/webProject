var apiurl = 'https://data.coa.gov.tw/Service/OpenData/AnimalOpenData.aspx?FOTT=Json';
var obj={};
var hello="";
$.ajax({
  url: apiurl,
  success: function(res){
  	obj = res;
    console.log(obj);
  }
});  