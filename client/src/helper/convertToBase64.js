export default function converter(file){
    return new Promise((resolve,reject)=>{
        const fileReader=new FileReader();
        if(file && file.type.match('image.*')){

            fileReader.readAsDataURL(file);
        }

        fileReader.onloadend=()=>{
            resolve(fileReader.result);
        }

        fileReader.onerror=(error)=>{
            reject(error)
        }
    })
}