const fs = require('fs')



exports.sing = (song,options) => {
    options = options || {}
    options.internal = options.internal || 200
    if(song.constructor === String){
        if(fs.existsSync(song))
            song = fs.readFileSync(song,{encoding: "utf8"}).split('\n')
        else
            song = ['1','5','1','5','...']
    }
    if(song.length && song.length>0){
        const tap = index =>{
            if(index <  song.length){
                console.log(song[index])
                setTimeout(() => {
                    tap(index + 1)
                }, options.internal)
            }
            else{
                console.log("~~~~~~~~")
                console.log(" song by LiSA , " + require("moment")().format("YYYY-MM-DD HH:mm:ss"))
            }
        }
        tap(0)
    }
}