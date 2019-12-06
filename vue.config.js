module.exports={
    lintOnSave:false,
    devServer:{
        before(app){
            app.get('/list',(req,res)=>{
                let data=require("./src/mock/index.json")
                res.send(data)
            })
        }
    }
}