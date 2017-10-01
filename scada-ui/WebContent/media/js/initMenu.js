Vue.component('app-nav', {
	props:['menu'],
    template:  '<li class="start">'+
                '<a href="javascript:;">'+
                    '<i class="icon-home"></i>'+
                    '<span class="title">{{menu.station}}</span>'+
                    '<span class="arrow "></span>'+
                '</a>'+
                '<ul class="sub-menu">'+
                    '<li><a v-bind:href="menu.dataurl">数据监控</a></li>'+
                    '<li><a v-bind:href="menu.reporturl" target="_blank">报表查看</a></li>'+
                    '<li><a href="location.html">站点位置</a></li>'+
                '</ul>'+
               '</li>'
});
new Vue({ 
	el:'#app',
	data:{
		menulist:[]
	},
	created:function(){
        this.$http.get('/SCADA/userController/getMenu', {
        	params:{
        		username:$.cookie('username')
        	}
        }).then((response) => {  
        	var dataJson=$.parseJSON(response.bodyText);
        	this.$data.menulist=dataJson;
        	console.log(this.$data.menulist);
        }, (response) => {    
        	console.log("failure");
        	console.log(response);
        });
	}
});