const cookieToken=async(user,res)=>{

    const token = await user.getJwtToken()
    const options = {
        expires: new Date(Date.now()+(40*60*1000)),
        httpOnly:true
    }
    
    return res.cookie('osratoken', token, options ).redirect('/plans')
}

module.exports = cookieToken