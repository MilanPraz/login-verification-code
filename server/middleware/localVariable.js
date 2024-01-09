export function localVariable(req,res,next){

    if(!req.app.locals){

        req.app.locals={
            OTP:null,
            resetSession:false
        }
    }
    next()
}