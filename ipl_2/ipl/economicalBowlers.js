function economicalBowlers(matches,deliveries) {
    const years=[];
    const all_season={};
    for (let year of matches){
        if (years.includes(year.season)){
            continue;
        }else{
            years.push(year.season)
        }
    }
   
    for (let season of years){
        const arr=[];
        for (let match of matches){
            if (match.season==season){
                arr.push(match.id)
        }
        }
        const result = {};
        for (let delivery of deliveries){
            if(arr.includes(delivery.match_id)){
                const bowler=delivery.bowler;
                if(result[bowler]) {
                    result[bowler][0]+=Number(delivery.total_runs);
                    result[bowler][1]+=Number(1);
                } else {
                    const i=1;
                    result[bowler]=[Number(delivery.total_runs),Number(i)];
                }
            }
        }
        for (let i in result){
            result[i]=Number(result[i][0]/(result[i][1]/6));
        }
        const arr_result=[];
        for(let i in result){
            arr_result.push([i,result[i]])
        }
        arr_result.sort(function(a, b) {
            let x = a[1];
            let y = b[1];
            return x - y;
        });
        const new_arr_result=arr_result.slice(0,10);
        const new_result={}
        for(let i of new_arr_result){
            new_result[i[0]]=i[1];
        }
        all_season[season]=new_result;
    }
    return all_season;
  }
  
  module.exports = economicalBowlers;
  