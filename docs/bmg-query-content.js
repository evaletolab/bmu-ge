# location
https://catalogue-bm.geneve.ch/in/rest/api/resolveBySeqNo

## header:
POST /in/rest/api/resolveBySeqNo HTTP/1.1
Host: catalogue-bm.geneve.ch
Accept-Language: fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3
Accept-Encoding: gzip, deflate, br
Referer: https://catalogue-bm.geneve.ch/account/loans
X-InMedia-Authorization: Bearer a91ae45e-4180-4aab-b9d9-bbe51a406c97 5ed3a6a4-123a-4a29-a2a9-919ee795eb78
Content-Type: application/x-www-form-urlencoded
X-microsite-id: mainSite
Origin: https://catalogue-bm.geneve.ch
Content-Length: 57
Connection: keep-alive
Cookie: warning6c50ebd8d68346a0a801a3edf3c44770=agreed; remember=true; user=E309603738; JSESSIONID=D4688284B00137F56D7CCEBF77292D37

## post: 
locale=fr&
ids=T006347067,T006461370,T006477489,T006661297

responce:
{
  "maxPageNo": 1,
  "maxScore": 1.0,
  "numHits": 4,
  "pageNo": 1,
  "pageSize": 5,
  "query": "{!terms f=id}p::usmarcdef_T006347067,p::usmarcdef_T006461370,p::usmarcdef_T006477489,p::usmarcdef_T006661297",
  "querySyntax": "solr",
  "resultSet": [
    {
      "stateFacet": [
        {
          "value": "Accepted"
        }
      ],
      "disableNoticeConsultation": [
        {
          "value": ""
        }
      ],
      "posInSet": [
        {
          "value": "1"
        }
      ],
      "hideShareAction": [
        {
          "value": ""
        }
      ],
      "zmatDisplay": [
        {
          "display": "Type de document",
          "value": "Bandes dessinées"
        }
      ],
      "DomainFacet": [
        {
          "value": "BM Genève"
        }
      ],
      "title": [
        {
          "value": "Meurtres en famille"
        }
      ],
      "StockShelfmark": [
        {
          "value": "BD KORD"
        }
      ],
      "TypeOfDocumentFacet": [
        {
          "value": "GenevePhysicalDocument"
        }
      ],
      "zmatIndex": [
        {
          "display": "",
          "value": "BookBD"
        }
      ],
      "LocalNumber": [
        {
          "value": "T006477489"
        }
      ],
      "imageSource_512": [
        {
          "value": "/in/rest/Thumb/image?id=p%3A%3Ausmarcdef_T006477489&isbn=9782756082073&author=MACAN%2C+Darko&title=Meurtres+en+famille&year=2017&publisher=Delcourt&TypeOfDocument=GenevePhysicalDocument&mat=BookBD&ct=true&size=512&isPhysical=1"
        }
      ],
      "score": [
        {
          "value": "1.0"
        }
      ],
      "imageSource_128": [
        {
          "value": "/in/rest/Thumb/image?id=p%3A%3Ausmarcdef_T006477489&isbn=9782756082073&author=MACAN%2C+Darko&title=Meurtres+en+famille&year=2017&publisher=Delcourt&TypeOfDocument=GenevePhysicalDocument&mat=BookBD&ct=true&size=128&isPhysical=1"
        }
      ],
      "IsPhysicalDocument": [
        {
          "value": "1"
        }
      ],
      "meta": {
        "relationIsPartOf": [
          {
            "display": "Titre de la série",
            "exploreIndex": "title_t",
            "exploreQuery": "Titre: \"Marshal Bass\"",
            "value": "Marshal Bass, 2"
          }
        ],
        "creator": [
          {
            "display": "Auteur(s)",
            "exploreIndex": "author_s",
            "exploreQuery": "Créateur: \"MACAN, Darko\"",
            "value": "MACAN, Darko"
          },
          {
            "display": "Auteur(s)",
            "exploreIndex": "author_s",
            "exploreQuery": "Créateur: \"KORDEY, Igor\"",
            "value": "KORDEY, Igor"
          }
        ],
        "language": [
          {
            "display": "Langue(s)",
            "key": "fre",
            "value": "Français"
          }
        ],
        "dateIssuedYear": [
          {
            "display": "Date de publication",
            "value": "2017"
          }
        ]
      },
      "imageSource_256": [
        {
          "value": "/in/rest/Thumb/image?id=p%3A%3Ausmarcdef_T006477489&isbn=9782756082073&author=MACAN%2C+Darko&title=Meurtres+en+famille&year=2017&publisher=Delcourt&TypeOfDocument=GenevePhysicalDocument&mat=BookBD&ct=true&size=256&isPhysical=1"
        }
      ],
      "__thumbSVCQueryParam": [
        {
          "value": "id=p%3A%3Ausmarcdef_T006477489&title=Meurtres+en+famille&TypeOfDocument=GenevePhysicalDocument&icon=%24ICON%24&size=%24SIZE%24&isPhysical=1"
        }
      ],
      "id": [
        {
          "value": "p::usmarcdef_T006477489"
        }
      ],
      "ark": [
        {
          "value": "12345/caT006477489"
        }
      ],
      "hideFavoriteAction": [
        {
          "value": ""
        }
      ],
      "readerLabel": [
        {
          "value": "default"
        }
      ]
    },
    {
      "stateFacet": [
        {
          "value": "Accepted"
        }
      ],
      "disableNoticeConsultation": [
        {
          "value": ""
        }
      ],
      "posInSet": [
        {
          "value": "2"
        }
      ],
      "hideShareAction": [
        {
          "value": ""
        }
      ],
      "zmatDisplay": [
        {
          "display": "Type de document",
          "value": "Bandes dessinées"
        }
      ],
      "DomainFacet": [
        {
          "value": "BM Genève"
        }
      ],
      "title": [
        {
          "value": "Black & white"
        }
      ],
      "StockShelfmark": [
        {
          "value": "BD KORD"
        }
      ],
      "TypeOfDocumentFacet": [
        {
          "value": "GenevePhysicalDocument"
        }
      ],
      "zmatIndex": [
        {
          "display": "",
          "value": "BookBD"
        }
      ],
      "LocalNumber": [
        {
          "value": "T006461370"
        }
      ],
      "imageSource_512": [
        {
          "value": "/in/rest/Thumb/image?id=p%3A%3Ausmarcdef_T006461370&isbn=9782756082066&author=MACAN%2C+Darko&title=Black+%26+white&year=2017&publisher=Delcourt&TypeOfDocument=GenevePhysicalDocument&mat=BookBD&ct=true&size=512&isPhysical=1"
        }
      ],
      "score": [
        {
          "value": "1.0"
        }
      ],
      "imageSource_128": [
        {
          "value": "/in/rest/Thumb/image?id=p%3A%3Ausmarcdef_T006461370&isbn=9782756082066&author=MACAN%2C+Darko&title=Black+%26+white&year=2017&publisher=Delcourt&TypeOfDocument=GenevePhysicalDocument&mat=BookBD&ct=true&size=128&isPhysical=1"
        }
      ],
      "IsPhysicalDocument": [
        {
          "value": "1"
        }
      ],
      "meta": {
        "relationIsPartOf": [
          {
            "display": "Titre de la série",
            "exploreIndex": "title_t",
            "exploreQuery": "Titre: \"Marshal Bass\"",
            "value": "Marshal Bass, 1"
          }
        ],
        "creator": [
          {
            "display": "Auteur(s)",
            "exploreIndex": "author_s",
            "exploreQuery": "Créateur: \"MACAN, Darko\"",
            "value": "MACAN, Darko"
          },
          {
            "display": "Auteur(s)",
            "exploreIndex": "author_s",
            "exploreQuery": "Créateur: \"KORDEY, Igor\"",
            "value": "KORDEY, Igor"
          }
        ],
        "language": [
          {
            "display": "Langue(s)",
            "key": "fre",
            "value": "Français"
          }
        ],
        "dateIssuedYear": [
          {
            "display": "Date de publication",
            "value": "2017"
          }
        ]
      },
      "imageSource_256": [
        {
          "value": "/in/rest/Thumb/image?id=p%3A%3Ausmarcdef_T006461370&isbn=9782756082066&author=MACAN%2C+Darko&title=Black+%26+white&year=2017&publisher=Delcourt&TypeOfDocument=GenevePhysicalDocument&mat=BookBD&ct=true&size=256&isPhysical=1"
        }
      ],
      "__thumbSVCQueryParam": [
        {
          "value": "id=p%3A%3Ausmarcdef_T006461370&title=Black+%26+white&TypeOfDocument=GenevePhysicalDocument&icon=%24ICON%24&size=%24SIZE%24&isPhysical=1"
        }
      ],
      "id": [
        {
          "value": "p::usmarcdef_T006461370"
        }
      ],
      "ark": [
        {
          "value": "12345/caT006461370"
        }
      ],
      "hideFavoriteAction": [
        {
          "value": ""
        }
      ],
      "readerLabel": [
        {
          "value": "default"
        }
      ]
    },
    {
      "stateFacet": [
        {
          "value": "Accepted"
        }
      ],
      "disableNoticeConsultation": [
        {
          "value": ""
        }
      ],
      "posInSet": [
        {
          "value": "3"
        }
      ],
      "hideShareAction": [
        {
          "value": ""
        }
      ],
      "zmatDisplay": [
        {
          "display": "Type de document",
          "value": "Bandes dessinées"
        }
      ],
      "DomainFacet": [
        {
          "value": "BM Genève"
        }
      ],
      "title": [
        {
          "value": "La petite boîte rouge"
        }
      ],
      "StockShelfmark": [
        {
          "value": "BD VICO"
        }
      ],
      "TypeOfDocumentFacet": [
        {
          "value": "GenevePhysicalDocument"
        }
      ],
      "zmatIndex": [
        {
          "display": "",
          "value": "BookBD"
        }
      ],
      "LocalNumber": [
        {
          "value": "T006661297"
        }
      ],
      "imageSource_512": [
        {
          "value": "/in/rest/Thumb/image?id=p%3A%3Ausmarcdef_T006661297&isbn=9782723497381&author=VICOMTE%2C+Laurent&title=La+petite+bo%C3%AEte+rouge&year=2018&publisher=Gl%C3%A9nat&TypeOfDocument=GenevePhysicalDocument&mat=BookBD&ct=true&size=512&isPhysical=1"
        }
      ],
      "score": [
        {
          "value": "1.0"
        }
      ],
      "imageSource_128": [
        {
          "value": "/in/rest/Thumb/image?id=p%3A%3Ausmarcdef_T006661297&isbn=9782723497381&author=VICOMTE%2C+Laurent&title=La+petite+bo%C3%AEte+rouge&year=2018&publisher=Gl%C3%A9nat&TypeOfDocument=GenevePhysicalDocument&mat=BookBD&ct=true&size=128&isPhysical=1"
        }
      ],
      "IsPhysicalDocument": [
        {
          "value": "1"
        }
      ],
      "meta": {
        "relationIsPartOf": [
          {
            "display": "Titre de la série",
            "exploreIndex": "title_t",
            "exploreQuery": "Titre: \"Sasmira\"",
            "value": "Sasmira, 4"
          }
        ],
        "creator": [
          {
            "display": "Auteur(s)",
            "exploreIndex": "author_s",
            "exploreQuery": "Créateur: \"VICOMTE, Laurent\"",
            "value": "VICOMTE, Laurent"
          },
          {
            "display": "Auteur(s)",
            "exploreIndex": "author_s",
            "exploreQuery": "Créateur: \"BERNABE, Anaïs\"",
            "value": "BERNABE, Anaïs"
          }
        ],
        "language": [
          {
            "display": "Langue(s)",
            "key": "fre",
            "value": "Français"
          }
        ],
        "dateIssuedYear": [
          {
            "display": "Date de publication",
            "value": "2018"
          }
        ]
      },
      "imageSource_256": [
        {
          "value": "/in/rest/Thumb/image?id=p%3A%3Ausmarcdef_T006661297&isbn=9782723497381&author=VICOMTE%2C+Laurent&title=La+petite+bo%C3%AEte+rouge&year=2018&publisher=Gl%C3%A9nat&TypeOfDocument=GenevePhysicalDocument&mat=BookBD&ct=true&size=256&isPhysical=1"
        }
      ],
      "__thumbSVCQueryParam": [
        {
          "value": "id=p%3A%3Ausmarcdef_T006661297&title=La+petite+bo%C3%AEte+rouge&TypeOfDocument=GenevePhysicalDocument&icon=%24ICON%24&size=%24SIZE%24&isPhysical=1"
        }
      ],
      "id": [
        {
          "value": "p::usmarcdef_T006661297"
        }
      ],
      "ark": [
        {
          "value": "12345/caT006661297"
        }
      ],
      "hideFavoriteAction": [
        {
          "value": ""
        }
      ],
      "readerLabel": [
        {
          "value": "default"
        }
      ]
    },
    {
      "stateFacet": [
        {
          "value": "Accepted"
        }
      ],
      "disableNoticeConsultation": [
        {
          "value": ""
        }
      ],
      "posInSet": [
        {
          "value": "4"
        }
      ],
      "hideShareAction": [
        {
          "value": ""
        }
      ],
      "zmatDisplay": [
        {
          "display": "Type de document",
          "value": "Bandes dessinées"
        }
      ],
      "DomainFacet": [
        {
          "value": "BM Genève"
        }
      ],
      "title": [
        {
          "value": "Rien"
        }
      ],
      "StockShelfmark": [
        {
          "value": "BD VICO"
        }
      ],
      "TypeOfDocumentFacet": [
        {
          "value": "GenevePhysicalDocument"
        }
      ],
      "zmatIndex": [
        {
          "display": "",
          "value": "BookBD"
        }
      ],
      "LocalNumber": [
        {
          "value": "T006347067"
        }
      ],
      "imageSource_512": [
        {
          "value": "/in/rest/Thumb/image?id=p%3A%3Ausmarcdef_T006347067&isbn=9782723497374&author=VICOMTE%2C+Laurent&title=Rien&year=2016&publisher=Gl%C3%A9nat&TypeOfDocument=GenevePhysicalDocument&mat=BookBD&ct=true&size=512&isPhysical=1"
        }
      ],
      "score": [
        {
          "value": "1.0"
        }
      ],
      "imageSource_128": [
        {
          "value": "/in/rest/Thumb/image?id=p%3A%3Ausmarcdef_T006347067&isbn=9782723497374&author=VICOMTE%2C+Laurent&title=Rien&year=2016&publisher=Gl%C3%A9nat&TypeOfDocument=GenevePhysicalDocument&mat=BookBD&ct=true&size=128&isPhysical=1"
        }
      ],
      "IsPhysicalDocument": [
        {
          "value": "1"
        }
      ],
      "meta": {
        "relationIsPartOf": [
          {
            "display": "Titre de la série",
            "exploreIndex": "title_t",
            "exploreQuery": "Titre: \"Sasmira\"",
            "value": "Sasmira, 3"
          }
        ],
        "creator": [
          {
            "display": "Auteur(s)",
            "exploreIndex": "author_s",
            "exploreQuery": "Créateur: \"VICOMTE, Laurent\"",
            "value": "VICOMTE, Laurent"
          },
          {
            "display": "Auteur(s)",
            "exploreIndex": "author_s",
            "exploreQuery": "Créateur: \"BERNABE, Anaïs\"",
            "value": "BERNABE, Anaïs"
          }
        ],
        "language": [
          {
            "display": "Langue(s)",
            "key": "fre",
            "value": "Français"
          }
        ],
        "dateIssuedYear": [
          {
            "display": "Date de publication",
            "value": "2016"
          }
        ]
      },
      "imageSource_256": [
        {
          "value": "/in/rest/Thumb/image?id=p%3A%3Ausmarcdef_T006347067&isbn=9782723497374&author=VICOMTE%2C+Laurent&title=Rien&year=2016&publisher=Gl%C3%A9nat&TypeOfDocument=GenevePhysicalDocument&mat=BookBD&ct=true&size=256&isPhysical=1"
        }
      ],
      "__thumbSVCQueryParam": [
        {
          "value": "id=p%3A%3Ausmarcdef_T006347067&title=Rien&TypeOfDocument=GenevePhysicalDocument&icon=%24ICON%24&size=%24SIZE%24&isPhysical=1"
        }
      ],
      "id": [
        {
          "value": "p::usmarcdef_T006347067"
        }
      ],
      "ark": [
        {
          "value": "12345/caT006347067"
        }
      ],
      "hideFavoriteAction": [
        {
          "value": ""
        }
      ],
      "readerLabel": [
        {
          "value": "default"
        }
      ]
    }
  ],
  "solrQuery": "{!terms f=id}p::usmarcdef_T006347067,p::usmarcdef_T006461370,p::usmarcdef_T006477489,p::usmarcdef_T006661297"
}