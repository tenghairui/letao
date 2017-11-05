define(['jquery'], function ($) {
    // 检测登没登了 没登录跳转到登录页面
    $.ajax({
        // http://localhost:3000/employee/employeeLogin
        url: '/api/employee/checkRootLogin',
        type: 'get',
        success: function (info) {
            if (info.error) {
                location.href = '/login.html';
            }
        }
    })



    // 退出
    $('.logout').on('click',function(){

        $.ajax({
            url :'/api/employee/employeeLogout',
            type : 'get',
            success : function(info) {
                if(info.success) {
                    location.href = '/login.html';
                }
            }
        })
    })
});