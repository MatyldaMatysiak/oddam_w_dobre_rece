export default function sendForm(data, callback, array) {
    fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(res => {
        if (res.ok) {
            console.log(res)
            callback(true)
            array.map(element => element(""))
        } else {
            console.log(res);
            callback(false)
        }
    }).catch(err => {
        console.log(err)
        alert("Coś poszło nie tak, spróbuj ponownie później.")
    })

}