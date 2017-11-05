

define(['jquery'],function($) {


    $('form').on('submit',function(){
        
                    var _this = $(this)
                    // 发送请求 登录到首页
                    $.ajax({
                        url : '/api/employee/employeeLogin',
                        type : 'post',
                        data : _this.serialize(),
                        success : function(info) {
                            if(info.error) {
                               return alert(info.message)
                            }
                            location.href = '/'
                        }
                    })
                    return false;
                })
});