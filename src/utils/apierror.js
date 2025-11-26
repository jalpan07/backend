class apierror extends Error {
    constructor (
        statuscode,
        message = "something went wrong",
        errors = [],
        statck = ""
    ){
        super(message)
        this.statuscode=statuscode
        this.errors=errors
        this.data = false
        this.success = false
        this.message=message
        if(statck){
            this.stack=statck
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}


export {apierror}
