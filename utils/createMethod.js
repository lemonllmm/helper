const {
    ReturnBody
} = require("./returnBody");

const createMethod = (router=null, url='', method='get', fn=()=>{}) => {
    switch (method) {
        case "post":
            return router.post(url, async (ctx) => {
                const param = ctx.request.body;
                let res = await fn(param,ctx);
                if (res) {
                    ReturnBody(ctx, 200,res)
                } else {
                    ReturnBody(ctx, 400)
                }
            });
        case 'get':
            return router.get(url, async (ctx) => {
                const search = ctx.request.query;
                let res = await fn(search,ctx);
                ReturnBody(ctx, 200,Array.isArray(res)?res:[res])
            });
        case "delete":
            return router.delete(url, async (ctx) => {
                const query = ctx.request.body;
                let res = await fn(query,ctx);
                if (res) {
                    ReturnBody(ctx, 200)
                } else {
                    ReturnBody(ctx, 400)
                }
            });
        case "put":
            return router.put(url, async (ctx) => {
                const query = ctx.request.body;
                let res = await fn(query,ctx);
                if (res) {
                    ReturnBody(ctx, 200)
                } else {
                    ReturnBody(ctx, 400)
                }
            });
    }
}
module.exports = {
    createMethod
}