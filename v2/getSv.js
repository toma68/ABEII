const axios = require('axios');

setInterval(get_svSession, 10,1);


function get_svSession(number) {
    for (let i = 0; i < number; i++) {
        axios.get('https://www.bienvenueauxetudiants.org/_api/v2/dynamicmodel')
            .then(response => {
                let svSession = response.data.svSession;
                console.log('"'+svSession+'",')
            })
            .catch(error => {
                console.log(error);
            });
    }
}
