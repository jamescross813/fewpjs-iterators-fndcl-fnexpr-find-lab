function superbowlWin(array){
    let winYear = array.find(e => e.result === 'W')
    if (winYear){
        return winYear.year
    }else{
        return undefined
    }
    }