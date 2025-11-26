const asynchandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next))
      .catch((err) => next(err));
  };
};

export  {asynchandler}


// const asynchandler = (fn) => async(req,res,next) => {

//     try{
//         await fn(req,res,next)
//     }
//     catch (e){
//         res.status(e.code || 500).json({
//             success : false,
//             message : e.message

//         })
//     }
// }