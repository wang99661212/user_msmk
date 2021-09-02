import service from "./index.js"
import req from "./requer.js"
export function Home(reg){
    return service({
        url:"app/login",
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
export function SignRecord(reg){
    return service({
        url:req.SignRecord,
        data:reg,
        method:"get"
    })
}

export function Xiangid(reg){
    return service({
        url:req.Xiangid+reg,
        data:{},
        method:"get"
    })
}

export function Xianglist(reg){
    return service({
        url:req.Xianglist,
        data:reg,
        method:"post"
    })
}
export function Basis(reg){
    return service({
        url:req.Basis+reg,
        data:{},
        method:"get"
    })
}
export function Chapter(reg){
    return service({
        url:req.Chapter,
        data:reg,
        method:"post"
    })
}
export function Datail(reg){
    return service({
        url:req.Datail,
        data:reg,
        method:"post"
    })
}