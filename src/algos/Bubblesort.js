

export default function BubbleSortAnimations(arr) {
   let anim=[];
   let newarr= [...arr]
   let n = [...arr].length;

    for(let i=0; i<n-1; i++)
    {
        for(let j=0; j<n-i-1; j++)
        {
                if(newarr[j] > newarr[j+1])
                {
                    anim.push([j,j+1])

                    let temp = newarr[j]
                    newarr[j] = newarr[j+1]
                    newarr[j+1]= temp
                    
                }
        }
    }
    return anim;
}
