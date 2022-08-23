const axios = require('axios');

let nb_like_envoye = 0

let svSessions = [
    "0745a1ce90fa97236048e541ef298832d6b549330e0e262c74daf322b7ff93dac0e444faf84017a41ae15679277bdd8a1e60994d53964e647acf431e4f798bcdba93c5436af415d4dbc95b4199550ea32cc143301bddbb7e18097945787f0f4f15b3d7468e22332ba7ec8e234f2db22e1d16c0bf96e4718951f91ed030c1fbaa20585e465c6255f7503291b524dfd50f",
    "2cfd5e27231bc2b615365ce5622da72309b259455f2864fa5655df3bc217d29b74d189d241eec28d0b4bed0b05dff7111e60994d53964e647acf431e4f798bcdba93c5436af415d4dbc95b4199550ea382ff6de35335d164203572834e11895f15b3d7468e22332ba7ec8e234f2db22e1d16c0bf96e4718951f91ed030c1fbaa20585e465c6255f7503291b524dfd50f",
    "de97ab5173c8048787e9ec0c9b0dc043b4f2f45fc3c69a9e9f8a7f838a059a6a27234f74deee1e25d2d677df36e3b9251e60994d53964e647acf431e4f798bcdba93c5436af415d4dbc95b4199550ea382ff6de35335d164203572834e11895f15b3d7468e22332ba7ec8e234f2db22e1d16c0bf96e4718951f91ed030c1fbaa20585e465c6255f7503291b524dfd50f",
    "afb82b3e8feaa6fb5af1d30bfd3848fdfef2f818439d2daeb6173e4e975bffd5fd326f2196cbfe41cd2307df5951c1731e60994d53964e647acf431e4f798bcdba93c5436af415d4dbc95b4199550ea3cb4a89022f18938fd1873fa094a2716d15b3d7468e22332ba7ec8e234f2db22e1d16c0bf96e4718951f91ed030c1fbaa20585e465c6255f7503291b524dfd50f",
    "15a1b67227bcaaae1286fb3c21eaf0a5638003da87fa0f8c6e6b119d98e36deb6ed6d575344dea587658df55e75b15f01e60994d53964e647acf431e4f798bcdba93c5436af415d4dbc95b4199550ea3d659713194a8ee395f7e56b2e8af64d515b3d7468e22332ba7ec8e234f2db22e1d16c0bf96e4718951f91ed030c1fbaa20585e465c6255f7503291b524dfd50f",
    "33bf1915846ba96c2d0d8a9e5965f624538920cbd5d54baebc2020b31e043597fc2713e50d5445417b9da02647bb9bd21e60994d53964e647acf431e4f798bcdba93c5436af415d4dbc95b4199550ea384ef6e454d609633e45f8551487606ef15b3d7468e22332ba7ec8e234f2db22e1d16c0bf96e4718951f91ed030c1fbaa20585e465c6255f7503291b524dfd50f",
    "a5e57f5572aaa3238b4bfc1bf48ff92b791c2a5a439823a5f52869abc21369194c2da29963021ef8fb6e656ec9d3700b1e60994d53964e647acf431e4f798bcdba93c5436af415d4dbc95b4199550ea32fd678b33f57b94bb67fe2734cacccd415b3d7468e22332ba7ec8e234f2db22e1d16c0bf96e4718951f91ed030c1fbaa20585e465c6255f7503291b524dfd50f",
    "a52f7a4e1f17724fae50663ff88124e7c4a3040d9157cbcd5af6501d392d5e78422abf405c580906ed941d2287bd34221e60994d53964e647acf431e4f798bcdba93c5436af415d4dbc95b4199550ea34af18526d2d100f7ee5b6f106e82b54415b3d7468e22332ba7ec8e234f2db22e1d16c0bf96e4718951f91ed030c1fbaa20585e465c6255f7503291b524dfd50f",
    "5705a819295534c6dc8fe90d67c49f1741d0f180b33c6f44a7615a00b91b2d2194c0940e6c0e010ba788a6c1084d6c331e60994d53964e647acf431e4f798bcdba93c5436af415d4dbc95b4199550ea35e137d81af53a948aa25439501425d7f15b3d7468e22332ba7ec8e234f2db22e1d16c0bf96e4718951f91ed030c1fbaa20585e465c6255f7503291b524dfd50f",
    "921b33196555ddf240981c6155f4ea367ae23d538b05a9e8022404cc9091bce5f09b452285857df03daa034a9028e4e91e60994d53964e647acf431e4f798bcdba93c5436af415d4dbc95b4199550ea3fae6ef48d80d2550bb05ecffe091345f15b3d7468e22332ba7ec8e234f2db22e1d16c0bf96e4718951f91ed030c1fbaa20585e465c6255f7503291b524dfd50f",
    "ce555f1c5d48dba3d4349a813590a06ae3125239f1b76a39c54d87d0c644d22d5f0f2401a78e7f6b8a7a978659ba9f211e60994d53964e647acf431e4f798bcdba93c5436af415d4dbc95b4199550ea3f6f560b41e988a6045974455958f9f7f15b3d7468e22332ba7ec8e234f2db22e1d16c0bf96e4718951f91ed030c1fbaa20585e465c6255f7503291b524dfd50f",
    "053bbddb73b5eb8449d76f2ff13a48c2410e315badbe1f0148a2504dce04e6322e2bc0624a43992b4d0eca6d22b11f031e60994d53964e647acf431e4f798bcdba93c5436af415d4dbc95b4199550ea35dd5c84c270ac21fa0e67a4460ea374c15b3d7468e22332ba7ec8e234f2db22e1d16c0bf96e4718951f91ed030c1fbaa20585e465c6255f7503291b524dfd50f",
    "a133277894e80f563cc4875878f13a20b980ea3cd5594d27e6ff6999d531ab7d60aa0d040f94ce8f135794e97c0e6e2c1e60994d53964e647acf431e4f798bcdba93c5436af415d4dbc95b4199550ea3c493f40b07218de4192d999512baac3d15b3d7468e22332ba7ec8e234f2db22e1d16c0bf96e4718951f91ed030c1fbaa20585e465c6255f7503291b524dfd50f",
    "42653d7caf23cd76e75fa559b865ce0d24bd75f30445fb351f0563bfa1df4f9693d7cc09dbf75c5b6d948af3ba30d1731e60994d53964e647acf431e4f798bcdba93c5436af415d4dbc95b4199550ea3601cdd78f68e95ae01cc756f8a366b7215b3d7468e22332ba7ec8e234f2db22e1d16c0bf96e4718951f91ed030c1fbaa20585e465c6255f7503291b524dfd50f",
    "2091bca037330840c9154f5bbe998193d90011d42929cd58e851856f4cf52937dc5c1b3e5a42b5860950cc47dea0dce31e60994d53964e647acf431e4f798bcdba93c5436af415d4dbc95b4199550ea3cf5bb06b3ca70c68de35350e0505eea515b3d7468e22332ba7ec8e234f2db22e1d16c0bf96e4718951f91ed030c1fbaa20585e465c6255f7503291b524dfd50f",
    "8855b27a1363bad4ec7919ec3c7a6a1db91c9b19baaed020125969fadfe50ae449517b3643b4cd0e939b5251f0261ff51e60994d53964e647acf431e4f798bcdba93c5436af415d4dbc95b4199550ea34fb455e6e29ddde8e07ac8112c93f96615b3d7468e22332ba7ec8e234f2db22e1d16c0bf96e4718951f91ed030c1fbaa20585e465c6255f7503291b524dfd50f",
    "20d10e07e4a9b460f3824544ee6d7ef65883742b026e5ff64b70b026e6f2bbe0c53922c049fe6d5cde0f2bdc6073c4171e60994d53964e647acf431e4f798bcdba93c5436af415d4dbc95b4199550ea37697658522ac7df85cb49a90b150ce1a15b3d7468e22332ba7ec8e234f2db22e1d16c0bf96e4718951f91ed030c1fbaa20585e465c6255f7503291b524dfd50f",
    "ea9104e3b68d8b34888cac2ce0a1e55ea58338c22c859c1f6d84d219d001e7e85d135b35a5465a89c47c01f6195b22181e60994d53964e647acf431e4f798bcdba93c5436af415d4dbc95b4199550ea310b7291e1d26f7802aa3c9759891373115b3d7468e22332ba7ec8e234f2db22e1d16c0bf96e4718951f91ed030c1fbaa20585e465c6255f7503291b524dfd50f",
    "918b4379d7fdeac79a5b5150a497aae97dcb6f318deb01910f7c9950853b89e7c8c302b061e0c28406b352ed93527d6b1e60994d53964e647acf431e4f798bcdba93c5436af415d4dbc95b4199550ea31f63d00ed18bf594c9ec450c62d60cfe15b3d7468e22332ba7ec8e234f2db22e1d16c0bf96e4718951f91ed030c1fbaa20585e465c6255f7503291b524dfd50f",
    "4c786ddb46a35e6bec90a4b3f4ab92da8ad2326149a7c8a9b49054529ac4e9b427e2e6f1854c8419e3b9a94e657031401e60994d53964e647acf431e4f798bcdba93c5436af415d4dbc95b4199550ea366a20112098342627756607dc047b82d15b3d7468e22332ba7ec8e234f2db22e1d16c0bf96e4718951f91ed030c1fbaa20585e465c6255f7503291b524dfd50f",
    "93de96dec0f4a219877791375bbb8354cb120b1302defb1d6c6cf7c65a3b05859079011202cf3e141b4ab33f3826c7f11e60994d53964e647acf431e4f798bcdba93c5436af415d4dbc95b4199550ea392a16d5fc2f9d6d70916c345a14dffb715b3d7468e22332ba7ec8e234f2db22e1d16c0bf96e4718951f91ed030c1fbaa20585e465c6255f7503291b524dfd50f",
    "8262a6abe3be5d558489da2205c2beeb6c9bdc1e0e1aa588548d78fda9b3ee50505fcbca4360d141aaa424e04a59b7571e60994d53964e647acf431e4f798bcdba93c5436af415d4dbc95b4199550ea3e7aefaa0ebf72ea65b176eba5cbc848c15b3d7468e22332ba7ec8e234f2db22e1d16c0bf96e4718951f91ed030c1fbaa20585e465c6255f7503291b524dfd50f",
    "39a644ebe975e9fcb8deba17801d20738d797ffb5ae5c15a72bef1669f0c9f91a8bdfd7e7e89b786ac2586e3f15d79631e60994d53964e647acf431e4f798bcdba93c5436af415d4dbc95b4199550ea35a0e1145965a7b3105316178a8c4c43815b3d7468e22332ba7ec8e234f2db22e1d16c0bf96e4718951f91ed030c1fbaa20585e465c6255f7503291b524dfd50f"
       ]


//setInterval(get_svSession, 100,1);


for (const svSession of svSessions) {
    send_like(svSession);
}




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


function send_like(svSession) {
    axios.request({
        url: "https://www.bienvenueauxetudiants.org/_api/communities-blog-node-api/v2/posts/12b7ae9c-b254-4e5b-9e65-ccab25e780f2/like",
        method: "post",
        headers:{
            Cookie: "svSession="+svSession
        }
    })    .then(response => {
        if (response.data == '{}'){
            console.log('envoi du like reussi');
            nb_like_envoye = nb_like_envoye +1
            console.log('like numero : ', nb_like_envoye)
        }

    })
        .catch(error => {
            console.log('err');
        });

}