import Cookies from 'universal-cookie';
const cookies = new Cookies();

export async function auth(){
    
    const myHeaders = new Headers();
    myHeaders.append("x-acess-token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJ0ZXN0ZTFAdGVzdC50ZW0iLCJpYXQiOjE2MjY3ODk2OTQsImV4cCI6MTYyNjg3NjA5NH0.gsIZrBv8oPzBmQDtyVxOBcLchq5WxEjdjgBBkTLPwCk");
    
    const body = {}

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    
    //faz o post e recebe o status
    const res = await fetch(`http://localhost:3030/api/test/upload`, requestOptions);
    const data = await res.json();

    console.log(data);
}