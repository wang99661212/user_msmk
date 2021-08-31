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
export function Appindex(){
    return service({
        url:req.Index,
        data:{},
        method:"get"
    })
}
export function Classify(){
    return service({
        url:req.Classify,
        data:{},
        method:"get"
    })
}
export function Infor(reg){
    return service({
        url:req.Infor,
        data:reg,
        method:"get"
    })
}

export function Sign(){
    return service({
        url:req.Sign,
        data:{},
        method:"get"
    })
}
export function Haoke(){
    return service({
        url:req.Haoke,
        data:{},
        method:"get"
    })
}
export function Tushu(){
    return service({
        url:req.Tushu,
        data:{},
        method:"get"
    })
}