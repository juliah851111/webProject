var areadata = ["","","臺北市", "新北市", "基隆市", "宜蘭縣", "桃園縣", "新竹縣", "新竹市", "苗栗縣", "臺中市", "彰化縣", "南投縣", "雲林縣", "嘉義縣", "嘉義市", "臺南市", "高雄市", "屏東縣", "花蓮縣", "臺東縣", "澎湖縣", "金門縣", "連江縣"];
var vm = new Vue({
  el : "#app",
  data : {
    datas: [],
    area : areadata,
    account: "",
  	pwd: "",
  	message: {message: "failed"}
  },
  methods: {
    verifyAC: function(){
    	var account = this.account;
    	var pwd = this.pwd;
    	console.log('account:'+account);
    	console.log('pwd:'+pwd);

    	$.ajax({
		  url: 'http://localhost:3001/login/'+account+'/'+pwd,
		  success: function(res){
		    var obj = res;
		    console.log(obj);
		    vm.message = obj;
		    Vue.set(vm,"message",obj);
		  }
		});
      
    },
    
  },
});


// $(document).ready(function(){

// 	$.ajax({
// 	  url: 'http://localhost:3001/animals/20',
// 	  success: function(res){
// 	    var obj = res;
// 	    console.log(obj);
// 	    vm.datas = obj;
// 	    Vue.set(vm,"datas",obj);
// 	  }
// 	});
// });
