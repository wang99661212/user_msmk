import service from "./index.js"
import req from "./requer.js"
export function Home(reg){
    return service({
        url:"/login",
        data:reg,
        method:"post"
    })
}
export function Bottm(){
    return service({
        url:req.Bottom,
        data:{},
        method:"get"
    })
}
