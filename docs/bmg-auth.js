const { get } = require("request")

https://catalogue-bm.geneve.ch/in/rest/api/authenticate

## header
POST /in/rest/api/authenticate HTTP/1.1
Host: catalogue-bm.geneve.ch
User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:88.0) Gecko/20100101 Firefox/88.0
Accept-Language: fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3
Accept-Encoding: gzip, deflate, br
Content-Type: application/json
X-microsite-id: mainSite
Origin: https://catalogue-bm.geneve.ch
Content-Length: 77
Connection: keep-alive
Cookie: warning6c50ebd8d68346a0a801a3edf3c44770=agreed; remember=true; user=E309603738; JSESSIONID=103485BBC0D70107825B6DBCCF8A3C58

## post:
{
  "username": "E309603738",
  "password": "1G_ploiuz",
  "birthdate": "",
  "locale": "fr"
}

## Response:
{
  "defaultBasketId": "basket:E30 960 373 8:default:",
  "ilsUser": true,
  "login": "E309603738",
  "omnidexid": "E30 960 373 8",
  "token": "a91ae45e-4180-4aab-b9d9-bbe51a406c97",
  "userid": "E30 960 373 8"
}
