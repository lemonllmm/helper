const ReturnBody = (ctx,code=200,data=null,message="",error=null) => {
    switch(code) {
        case 200:
            message=message || '接口请求成功';
            break;
        case 400:
            message=message||'参数不正确';
            break;
        case 500:
            message=message|| '服务器返回错误';
            break;
        case 404:
            message=message || '接口不存在';
            break
    } 
    return ctx.body = {
        code,
        data,
        message,
        error
    }
}
module.exports = {
    ReturnBody
}