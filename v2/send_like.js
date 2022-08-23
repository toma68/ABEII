const axios = require('axios');

let nb_like_envoye = 0


setInterval(send_like, 2000,1);


function get_svSession(number) {
    for (let i = 0; i < number; i++) {
        axios.get('https://www.bienvenueauxetudiants.org/_api/v2/dynamicmodel')
            .then(response => {
                let svSession = response.data.svSession;
                return svSession
            })
            .catch(error => {
                console.log(error);
            });
    }
}




function send_like() {

    axios.get('https://www.bienvenueauxetudiants.org/_api/v2/dynamicmodel')
        .then(response => {
            let svSession = response.data.svSession;
            axios.request({
                url: "https://www.bienvenueauxetudiants.org/_api/communities-blog-node-api/v2/posts/12b7ae9c-b254-4e5b-9e65-ccab25e780f2/like",
                method: "post",
                headers:{
                    Cookie: "svSession="+svSession
                }
            })    .then(response => {
                console.log('envoi du like reussi');
                nb_like_envoye = nb_like_envoye +1
                console.log('like numero : ', nb_like_envoye)

            })
                .catch(error => {
                    console.log('err');
                });
        })
        .catch(error => {
            console.log(error);
        });


}