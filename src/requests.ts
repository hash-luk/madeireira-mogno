export function getData<Res>() {
    fetch('http://localhost:3000/brands', {
        headers: {
            Accept: "application/json"
        }
    }).then(res => res.json()).then(res => console.log(res))
}