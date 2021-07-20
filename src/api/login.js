import Cookies from 'universal-cookie';
const cookies = new Cookies();

export async function login(email, senha){
    

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();

    urlencoded.append("email", email);
    urlencoded.append("senha", senha);

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow',
    };
    
    //faz o post e recebe o status
    const res = await fetch(`http://localhost:3030/api/auth/login`, requestOptions);
    const data = await res.json();
    
    //cria cookie
    if (data.token) {
        cookies.set('acess-token', data.token, { path: '/', secure: true,  });
    }
}