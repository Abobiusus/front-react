let last;
let time = 0;
export default function helper(text='key'){
    if (text === last){
        time++;
    }else{
        time = 0;
        last = text;
    }
    return `${text}_${time}`;
}