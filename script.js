const generateJokes = async() =>{
    try{
        const setHeader = {
            headers:{
                Accept: "application/json"
            }
        }
        const res= await fetch('https://icanhazdadjoke.com/', setHeader);
        const data= await res.json();
        joke.innerHTML = data.joke;
    }catch(err){
        console.log(`the error is ${err}`);
    }
}

jokebtn.addEventListener('click', generateJokes);
generateJokes();