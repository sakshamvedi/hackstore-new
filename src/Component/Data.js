import React from 'react'

function Data() {
const data = [
    {
      "Rank": 1,
      "Root Domain": "www.google.com",
      "Linking Root Domains": "14,448,292",
      "Domain Authority": 100
    },
    {
      "Rank": 2,
      "Root Domain": "youtube.com",
      "Linking Root Domains": "22,647,509",
      "Domain Authority": 100
    },
    {
      "Rank": 3,
      "Root Domain": "apple.com",
      "Linking Root Domains": "6,499,465",
      "Domain Authority": 100
    },
    {
      "Rank": 4,
      "Root Domain": "play.google.com",
      "Linking Root Domains": "3,836,519",
      "Domain Authority": 99
    },
    {
      "Rank": 5,
      "Root Domain": "support.google.com",
      "Linking Root Domains": "5,441,796",
      "Domain Authority": 99
    },
    {
      "Rank": 6,
      "Root Domain": "www.blogger.com",
      "Linking Root Domains": "30,104,008",
      "Domain Authority": 99
    },
    {
      "Rank": 7,
      "Root Domain": "microsoft.com",
      "Linking Root Domains": "5,210,556",
      "Domain Authority": 99
    },
    {
      "Rank": 8,
      "Root Domain": "linkedin.com",
      "Linking Root Domains": "11,987,489",
      "Domain Authority": 99
    },
    {
      "Rank": 9,
      "Root Domain": "en.wikipedia.org",
      "Linking Root Domains": "6,976,016",
      "Domain Authority": 98
    },
    {
      "Rank": 10,
      "Root Domain": "maps.google.com",
      "Linking Root Domains": "5,880,868",
      "Domain Authority": 98
    },
    {
      "Rank": 11,
      "Root Domain": "youtu.be",
      "Linking Root Domains": "5,158,451",
      "Domain Authority": 98
    },
    {
      "Rank": 12,
      "Root Domain": "docs.google.com",
      "Linking Root Domains": "3,314,710",
      "Domain Authority": 98
    },
    {
      "Rank": 13,
      "Root Domain": "wordpress.org",
      "Linking Root Domains": "11,960,057",
      "Domain Authority": 98
    },
    {
      "Rank": 14,
      "Root Domain": "cloudflare.com",
      "Linking Root Domains": "6,494,999",
      "Domain Authority": 98
    },
    {
      "Rank": 15,
      "Root Domain": "mozilla.org",
      "Linking Root Domains": "2,409,940",
      "Domain Authority": 98
    },
    {
      "Rank": 16,
      "Root Domain": "adobe.com",
      "Linking Root Domains": "2,857,075",
      "Domain Authority": 97
    },
    {
      "Rank": 17,
      "Root Domain": "drive.google.com",
      "Linking Root Domains": "2,439,133",
      "Domain Authority": 97
    },
    {
      "Rank": 18,
      "Root Domain": "bp.blogspot.com",
      "Linking Root Domains": "17,899,129",
      "Domain Authority": 97
    },
    {
      "Rank": 19,
      "Root Domain": "accounts.google.com",
      "Linking Root Domains": "2,571,569",
      "Domain Authority": 97
    },
    {
      "Rank": 20,
      "Root Domain": "whatsapp.com",
      "Linking Root Domains": "3,755,429",
      "Domain Authority": 97
    },
    {
      "Rank": 21,
      "Root Domain": "plus.google.com",
      "Linking Root Domains": "11,083,430",
      "Domain Authority": 97
    },
    {
      "Rank": 22,
      "Root Domain": "sites.google.com",
      "Linking Root Domains": "2,222,294",
      "Domain Authority": 97
    },
    {
      "Rank": 23,
      "Root Domain": "googleusercontent.com",
      "Linking Root Domains": "3,430,031",
      "Domain Authority": 97
    },
    {
      "Rank": 24,
      "Root Domain": "europa.eu",
      "Linking Root Domains": "2,249,650",
      "Domain Authority": 97
    },
    {
      "Rank": 25,
      "Root Domain": "vimeo.com",
      "Linking Root Domains": "3,545,499",
      "Domain Authority": 96
    },
    {
      "Rank": 26,
      "Root Domain": "github.com",
      "Linking Root Domains": "2,867,256",
      "Domain Authority": 96
    },
    {
      "Rank": 27,
      "Root Domain": "istockphoto.com",
      "Linking Root Domains": "3,620,995",
      "Domain Authority": 96
    },
    {
      "Rank": 28,
      "Root Domain": "facebook.com",
      "Linking Root Domains": "58,730,292",
      "Domain Authority": 96
    },
    {
      "Rank": 29,
      "Root Domain": "vk.com",
      "Linking Root Domains": "1,784,188",
      "Domain Authority": 96
    },
    {
      "Rank": 30,
      "Root Domain": "uol.com.br",
      "Linking Root Domains": "686,562",
      "Domain Authority": 96
    },
    {
      "Rank": 31,
      "Root Domain": "t.me",
      "Linking Root Domains": "1,249,549",
      "Domain Authority": 96
    },
    {
      "Rank": 32,
      "Root Domain": "policies.google.com",
      "Linking Root Domains": "2,762,742",
      "Domain Authority": 96
    },
    {
      "Rank": 33,
      "Root Domain": "amazon.com",
      "Linking Root Domains": "4,954,641",
      "Domain Authority": 96
    },
    {
      "Rank": 34,
      "Root Domain": "search.google.com",
      "Linking Root Domains": "1,506,929",
      "Domain Authority": 95
    },
    {
      "Rank": 35,
      "Root Domain": "terra.com.br",
      "Linking Root Domains": "200,405",
      "Domain Authority": 95
    },
    {
      "Rank": 36,
      "Root Domain": "who.int",
      "Linking Root Domains": "2,014,040",
      "Domain Authority": 95
    },
    {
      "Rank": 37,
      "Root Domain": "shopify.com",
      "Linking Root Domains": "2,574,584",
      "Domain Authority": 95
    },
    {
      "Rank": 38,
      "Root Domain": "cnn.com",
      "Linking Root Domains": "1,641,290",
      "Domain Authority": 95
    },
    {
      "Rank": 39,
      "Root Domain": "bbc.com",
      "Linking Root Domains": "909,085",
      "Domain Authority": 95
    },
    {
      "Rank": 40,
      "Root Domain": "paypal.com",
      "Linking Root Domains": "1,134,833",
      "Domain Authority": 95
    },
    {
      "Rank": 41,
      "Root Domain": "gravatar.com",
      "Linking Root Domains": "12,344,985",
      "Domain Authority": 95
    },
    {
      "Rank": 42,
      "Root Domain": "news.google.com",
      "Linking Root Domains": "807,378",
      "Domain Authority": 95
    },
    {
      "Rank": 43,
      "Root Domain": "feedburner.com",
      "Linking Root Domains": "1,836,460",
      "Domain Authority": 95
    },
    {
      "Rank": 44,
      "Root Domain": "issuu.com",
      "Linking Root Domains": "997,478",
      "Domain Authority": 95
    },
    {
      "Rank": 45,
      "Root Domain": "slideshare.net",
      "Linking Root Domains": "1,003,638",
      "Domain Authority": 95
    },
    {
      "Rank": 46,
      "Root Domain": "globo.com",
      "Linking Root Domains": "455,064",
      "Domain Authority": 95
    },
    {
      "Rank": 47,
      "Root Domain": "es.wikipedia.org",
      "Linking Root Domains": "963,178",
      "Domain Authority": 95
    },
    {
      "Rank": 48,
      "Root Domain": "gstatic.com",
      "Linking Root Domains": "629,199",
      "Domain Authority": 95
    },
    {
      "Rank": 49,
      "Root Domain": "bbc.co.uk",
      "Linking Root Domains": "1,737,413",
      "Domain Authority": 95
    },
    {
      "Rank": 50,
      "Root Domain": "nytimes.com",
      "Linking Root Domains": "2,187,656",
      "Domain Authority": 95
    },
    {
      "Rank": 51,
      "Root Domain": "enable-javascript.com",
      "Linking Root Domains": "9,441,985",
      "Domain Authority": 95
    },
    {
      "Rank": 52,
      "Root Domain": "nih.gov",
      "Linking Root Domains": "1,465,412",
      "Domain Authority": 95
    },
    {
      "Rank": 53,
      "Root Domain": "dropbox.com",
      "Linking Root Domains": "1,103,675",
      "Domain Authority": 95
    },
    {
      "Rank": 54,
      "Root Domain": "youronlinechoices.com",
      "Linking Root Domains": "577,988",
      "Domain Authority": 95
    },
    {
      "Rank": 55,
      "Root Domain": "www.weebly.com",
      "Linking Root Domains": "5,312,915",
      "Domain Authority": 95
    },
    {
      "Rank": 56,
      "Root Domain": "w3.org",
      "Linking Root Domains": "1,129,744",
      "Domain Authority": 95
    },
    {
      "Rank": 57,
      "Root Domain": "fr.wikipedia.org",
      "Linking Root Domains": "635,932",
      "Domain Authority": 95
    },
    {
      "Rank": 58,
      "Root Domain": "pt.wikipedia.org",
      "Linking Root Domains": "417,540",
      "Domain Authority": 95
    },
    {
      "Rank": 59,
      "Root Domain": "live.com",
      "Linking Root Domains": "970,740",
      "Domain Authority": 95
    },
    {
      "Rank": 60,
      "Root Domain": "jimdofree.com",
      "Linking Root Domains": "1,715,984",
      "Domain Authority": 95
    },
    {
      "Rank": 61,
      "Root Domain": "cpanel.net",
      "Linking Root Domains": "1,783,283",
      "Domain Authority": 95
    },
    {
      "Rank": 62,
      "Root Domain": "google.co.jp",
      "Linking Root Domains": "657,326",
      "Domain Authority": 95
    },
    {
      "Rank": 63,
      "Root Domain": "brandbucket.com",
      "Linking Root Domains": "11,188,928",
      "Domain Authority": 95
    },
    {
      "Rank": 64,
      "Root Domain": "creativecommons.org",
      "Linking Root Domains": "1,734,245",
      "Domain Authority": 95
    },
    {
      "Rank": 65,
      "Root Domain": "line.me",
      "Linking Root Domains": "908,689",
      "Domain Authority": 95
    },
    {
      "Rank": 66,
      "Root Domain": "theguardian.com",
      "Linking Root Domains": "1,581,286",
      "Domain Authority": 95
    },
    {
      "Rank": 67,
      "Root Domain": "opera.com",
      "Linking Root Domains": "955,587",
      "Domain Authority": 95
    },
    {
      "Rank": 68,
      "Root Domain": "imdb.com",
      "Linking Root Domains": "1,519,393",
      "Domain Authority": 95
    },
    {
      "Rank": 69,
      "Root Domain": "medium.com",
      "Linking Root Domains": "1,751,059",
      "Domain Authority": 95
    },
    {
      "Rank": 70,
      "Root Domain": "buydomains.com",
      "Linking Root Domains": "1,078,972",
      "Domain Authority": 95
    },
    {
      "Rank": 71,
      "Root Domain": "dailymotion.com",
      "Linking Root Domains": "1,136,178",
      "Domain Authority": 95
    },
    {
      "Rank": 72,
      "Root Domain": "tools.google.com",
      "Linking Root Domains": "1,747,960",
      "Domain Authority": 95
    },
    {
      "Rank": 73,
      "Root Domain": "google.es",
      "Linking Root Domains": "477,921",
      "Domain Authority": 95
    },
    {
      "Rank": 74,
      "Root Domain": "draft.blogger.com",
      "Linking Root Domains": "11,112,977",
      "Domain Authority": 95
    },
    {
      "Rank": 75,
      "Root Domain": "developers.google.com",
      "Linking Root Domains": "1,118,672",
      "Domain Authority": 95
    },
    {
      "Rank": 76,
      "Root Domain": "wikimedia.org",
      "Linking Root Domains": "2,049,756",
      "Domain Authority": 95
    },
    {
      "Rank": 77,
      "Root Domain": "files.wordpress.com",
      "Linking Root Domains": "7,654,013",
      "Domain Authority": 95
    },
    {
      "Rank": 78,
      "Root Domain": "google.com.br",
      "Linking Root Domains": "296,887",
      "Domain Authority": 95
    },
    {
      "Rank": 79,
      "Root Domain": "google.de",
      "Linking Root Domains": "1,119,880",
      "Domain Authority": 95
    },
    {
      "Rank": 80,
      "Root Domain": "www.yahoo.com",
      "Linking Root Domains": "1,362,361",
      "Domain Authority": 95
    },
    {
      "Rank": 81,
      "Root Domain": "telegram.me",
      "Linking Root Domains": "377,447",
      "Domain Authority": 94
    },
    {
      "Rank": 82,
      "Root Domain": "washingtonpost.com",
      "Linking Root Domains": "1,175,040",
      "Domain Authority": 94
    },
    {
      "Rank": 83,
      "Root Domain": "office.com",
      "Linking Root Domains": "633,530",
      "Domain Authority": 94
    },
    {
      "Rank": 84,
      "Root Domain": "mediafire.com",
      "Linking Root Domains": "864,252",
      "Domain Authority": 94
    },
    {
      "Rank": 85,
      "Root Domain": "domainmarket.com",
      "Linking Root Domains": "1,064,577",
      "Domain Authority": 94
    },
    {
      "Rank": 86,
      "Root Domain": "elpais.com",
      "Linking Root Domains": "430,673",
      "Domain Authority": 94
    },
    {
      "Rank": 87,
      "Root Domain": "yadi.sk",
      "Linking Root Domains": "169,361",
      "Domain Authority": 94
    },
    {
      "Rank": 88,
      "Root Domain": "cdc.gov",
      "Linking Root Domains": "908,226",
      "Domain Authority": 94
    },
    {
      "Rank": 89,
      "Root Domain": "fb.com",
      "Linking Root Domains": "464,296",
      "Domain Authority": 94
    },
    {
      "Rank": 90,
      "Root Domain": "ru.wikipedia.org",
      "Linking Root Domains": "376,976",
      "Domain Authority": 94
    },
    {
      "Rank": 91,
      "Root Domain": "msn.com",
      "Linking Root Domains": "1,098,698",
      "Domain Authority": 94
    },
    {
      "Rank": 92,
      "Root Domain": "planalto.gov.br",
      "Linking Root Domains": "120,725",
      "Domain Authority": 94
    },
    {
      "Rank": 93,
      "Root Domain": "pinterest.com",
      "Linking Root Domains": "8,639,376",
      "Domain Authority": 94
    },
    {
      "Rank": 94,
      "Root Domain": "telegraph.co.uk",
      "Linking Root Domains": "1,004,701",
      "Domain Authority": 94
    },
    {
      "Rank": 95,
      "Root Domain": "goo.gl",
      "Linking Root Domains": "4,756,800",
      "Domain Authority": 94
    },
    {
      "Rank": 96,
      "Root Domain": "ft.com",
      "Linking Root Domains": "506,318",
      "Domain Authority": 94
    },
    {
      "Rank": 97,
      "Root Domain": "ytimg.com",
      "Linking Root Domains": "955,402",
      "Domain Authority": 94
    },
    {
      "Rank": 98,
      "Root Domain": "elmundo.es",
      "Linking Root Domains": "243,086",
      "Domain Authority": 94
    },
    {
      "Rank": 99,
      "Root Domain": "android.com",
      "Linking Root Domains": "316,948",
      "Domain Authority": 94
    },
    {
      "Rank": 100,
      "Root Domain": "estadao.com.br",
      "Linking Root Domains": "136,126",
      "Domain Authority": 94
    },
    {
      "Rank": 101,
      "Root Domain": "shutterstock.com",
      "Linking Root Domains": "531,794",
      "Domain Authority": 94
    },
    {
      "Rank": 102,
      "Root Domain": "wsj.com",
      "Linking Root Domains": "987,702",
      "Domain Authority": 94
    },
    {
      "Rank": 103,
      "Root Domain": "independent.co.uk",
      "Linking Root Domains": "773,396",
      "Domain Authority": 94
    },
    {
      "Rank": 104,
      "Root Domain": "huffpost.com",
      "Linking Root Domains": "1,213,641",
      "Domain Authority": 94
    },
    {
      "Rank": 105,
      "Root Domain": "google.pl",
      "Linking Root Domains": "196,799",
      "Domain Authority": 94
    },
    {
      "Rank": 106,
      "Root Domain": "soundcloud.com",
      "Linking Root Domains": "1,840,031",
      "Domain Authority": 94
    },
    {
      "Rank": 107,
      "Root Domain": "pixabay.com",
      "Linking Root Domains": "480,730",
      "Domain Authority": 94
    },
    {
      "Rank": 108,
      "Root Domain": "bing.com",
      "Linking Root Domains": "1,026,596",
      "Domain Authority": 94
    },
    {
      "Rank": 109,
      "Root Domain": "dailymail.co.uk",
      "Linking Root Domains": "1,127,044",
      "Domain Authority": 94
    },
    {
      "Rank": 110,
      "Root Domain": "hatena.ne.jp",
      "Linking Root Domains": "1,530,374",
      "Domain Authority": 94
    },
    {
      "Rank": 111,
      "Root Domain": "indiatimes.com",
      "Linking Root Domains": "488,420",
      "Domain Authority": 94
    },
    {
      "Rank": 112,
      "Root Domain": "wa.me",
      "Linking Root Domains": "1,357,335",
      "Domain Authority": 94
    },
    {
      "Rank": 113,
      "Root Domain": "nature.com",
      "Linking Root Domains": "626,464",
      "Domain Authority": 94
    },
    {
      "Rank": 114,
      "Root Domain": "t.co",
      "Linking Root Domains": "2,167,781",
      "Domain Authority": 94
    },
    {
      "Rank": 115,
      "Root Domain": "twitter.com",
      "Linking Root Domains": "59,676,584",
      "Domain Authority": 94
    },
    {
      "Rank": 116,
      "Root Domain": "huffingtonpost.com",
      "Linking Root Domains": "1,084,540",
      "Domain Authority": 94
    },
    {
      "Rank": 117,
      "Root Domain": "researchgate.net",
      "Linking Root Domains": "723,746",
      "Domain Authority": 94
    },
    {
      "Rank": 118,
      "Root Domain": "bloomberg.com",
      "Linking Root Domains": "868,091",
      "Domain Authority": 94
    },
    {
      "Rank": 119,
      "Root Domain": "ok.ru",
      "Linking Root Domains": "362,987",
      "Domain Authority": 94
    },
    {
      "Rank": 120,
      "Root Domain": "google.it",
      "Linking Root Domains": "442,106",
      "Domain Authority": 94
    },
    {
      "Rank": 121,
      "Root Domain": "www.gov.uk",
      "Linking Root Domains": "636,191",
      "Domain Authority": 94
    },
    {
      "Rank": 122,
      "Root Domain": "abril.com.br",
      "Linking Root Domains": "275,467",
      "Domain Authority": 94
    },
    {
      "Rank": 123,
      "Root Domain": "amazon.de",
      "Linking Root Domains": "559,330",
      "Domain Authority": 94
    },
    {
      "Rank": 124,
      "Root Domain": "fandom.com",
      "Linking Root Domains": "625,092",
      "Domain Authority": 94
    },
    {
      "Rank": 125,
      "Root Domain": "picasaweb.google.com",
      "Linking Root Domains": "633,141",
      "Domain Authority": 94
    },
    {
      "Rank": 126,
      "Root Domain": "photos.google.com",
      "Linking Root Domains": "278,295",
      "Domain Authority": 94
    },
    {
      "Rank": 127,
      "Root Domain": "aliexpress.com",
      "Linking Root Domains": "519,645",
      "Domain Authority": 94
    },
    {
      "Rank": 128,
      "Root Domain": "mail.ru",
      "Linking Root Domains": "484,269",
      "Domain Authority": 94
    },
    {
      "Rank": 129,
      "Root Domain": "tinyurl.com",
      "Linking Root Domains": "1,435,763",
      "Domain Authority": 94
    },
    {
      "Rank": 130,
      "Root Domain": "list-manage.com",
      "Linking Root Domains": "790,433",
      "Domain Authority": 94
    },
    {
      "Rank": 131,
      "Root Domain": "hugedomains.com",
      "Linking Root Domains": "16,423,247",
      "Domain Authority": 94
    },
    {
      "Rank": 132,
      "Root Domain": "foxnews.com",
      "Linking Root Domains": "591,336",
      "Domain Authority": 94
    },
    {
      "Rank": 133,
      "Root Domain": "un.org",
      "Linking Root Domains": "611,055",
      "Domain Authority": 94
    },
    {
      "Rank": 134,
      "Root Domain": "wikihow.com",
      "Linking Root Domains": "627,734",
      "Domain Authority": 94
    },
    {
      "Rank": 135,
      "Root Domain": "amazon.co.uk",
      "Linking Root Domains": "782,661",
      "Domain Authority": 94
    },
    {
      "Rank": 136,
      "Root Domain": "wikia.com",
      "Linking Root Domains": "509,777",
      "Domain Authority": 94
    },
    {
      "Rank": 137,
      "Root Domain": "4shared.com",
      "Linking Root Domains": "561,394",
      "Domain Authority": 94
    },
    {
      "Rank": 138,
      "Root Domain": "tiktok.com",
      "Linking Root Domains": "749,502",
      "Domain Authority": 94
    },
    {
      "Rank": 139,
      "Root Domain": "booking.com",
      "Linking Root Domains": "408,699",
      "Domain Authority": 94
    },
    {
      "Rank": 140,
      "Root Domain": "archive.org",
      "Linking Root Domains": "1,198,868",
      "Domain Authority": 94
    },
    {
      "Rank": 141,
      "Root Domain": "cnet.com",
      "Linking Root Domains": "745,451",
      "Domain Authority": 94
    },
    {
      "Rank": 142,
      "Root Domain": "reuters.com",
      "Linking Root Domains": "943,652",
      "Domain Authority": 94
    },
    {
      "Rank": 143,
      "Root Domain": "myspace.com",
      "Linking Root Domains": "1,375,031",
      "Domain Authority": 94
    },
    {
      "Rank": 144,
      "Root Domain": "get.google.com",
      "Linking Root Domains": "642,623",
      "Domain Authority": 94
    },
    {
      "Rank": 145,
      "Root Domain": "businessinsider.com",
      "Linking Root Domains": "864,683",
      "Domain Authority": 94
    },
    {
      "Rank": 146,
      "Root Domain": "thesun.co.uk",
      "Linking Root Domains": "421,990",
      "Domain Authority": 94
    },
    {
      "Rank": 147,
      "Root Domain": "ig.com.br",
      "Linking Root Domains": "158,034",
      "Domain Authority": 94
    },
    {
      "Rank": 148,
      "Root Domain": "google.co.uk",
      "Linking Root Domains": "600,769",
      "Domain Authority": 94
    },
    {
      "Rank": 149,
      "Root Domain": "it.wikipedia.org",
      "Linking Root Domains": "339,516",
      "Domain Authority": 94
    },
    {
      "Rank": 150,
      "Root Domain": "news.yahoo.com",
      "Linking Root Domains": "692,386",
      "Domain Authority": 94
    },
    {
      "Rank": 151,
      "Root Domain": "amazon.co.jp",
      "Linking Root Domains": "867,074",
      "Domain Authority": 94
    },
    {
      "Rank": 152,
      "Root Domain": "bit.ly",
      "Linking Root Domains": "4,938,049",
      "Domain Authority": 94
    },
    {
      "Rank": 153,
      "Root Domain": "netvibes.com",
      "Linking Root Domains": "1,222,212",
      "Domain Authority": 94
    },
    {
      "Rank": 154,
      "Root Domain": "samsung.com",
      "Linking Root Domains": "402,092",
      "Domain Authority": 94
    },
    {
      "Rank": 155,
      "Root Domain": "usatoday.com",
      "Linking Root Domains": "873,400",
      "Domain Authority": 94
    },
    {
      "Rank": 156,
      "Root Domain": "scribd.com",
      "Linking Root Domains": "769,643",
      "Domain Authority": 94
    },
    {
      "Rank": 157,
      "Root Domain": "storage.googleapis.com",
      "Linking Root Domains": "868,275",
      "Domain Authority": 94
    },
    {
      "Rank": 158,
      "Root Domain": "google.fr",
      "Linking Root Domains": "413,292",
      "Domain Authority": 94
    },
    {
      "Rank": 159,
      "Root Domain": "nasa.gov",
      "Linking Root Domains": "686,202",
      "Domain Authority": 94
    },
    {
      "Rank": 160,
      "Root Domain": "aboutads.info",
      "Linking Root Domains": "633,893",
      "Domain Authority": 94
    },
    {
      "Rank": 161,
      "Root Domain": "forms.gle",
      "Linking Root Domains": "782,500",
      "Domain Authority": 94
    },
    {
      "Rank": 162,
      "Root Domain": "namecheap.com",
      "Linking Root Domains": "1,111,805",
      "Domain Authority": 94
    },
    {
      "Rank": 163,
      "Root Domain": "forbes.com",
      "Linking Root Domains": "1,419,632",
      "Domain Authority": 94
    },
    {
      "Rank": 164,
      "Root Domain": "plesk.com",
      "Linking Root Domains": "698,808",
      "Domain Authority": 94
    },
    {
      "Rank": 165,
      "Root Domain": "networkadvertising.org",
      "Linking Root Domains": "748,208",
      "Domain Authority": 94
    },
    {
      "Rank": 166,
      "Root Domain": "time.com",
      "Linking Root Domains": "841,771",
      "Domain Authority": 94
    },
    {
      "Rank": 167,
      "Root Domain": "webmd.com",
      "Linking Root Domains": "814,562",
      "Domain Authority": 94
    },
    {
      "Rank": 168,
      "Root Domain": "mirror.co.uk",
      "Linking Root Domains": "418,272",
      "Domain Authority": 94
    },
    {
      "Rank": 169,
      "Root Domain": "marketingplatform.google....",
      "Linking Root Domains": "878,460",
      "Domain Authority": 94
    },
    {
      "Rank": 170,
      "Root Domain": "cbsnews.com",
      "Linking Root Domains": "688,342",
      "Domain Authority": 94
    },
    {
      "Rank": 171,
      "Root Domain": "amazon.es",
      "Linking Root Domains": "192,511",
      "Domain Authority": 94
    },
    {
      "Rank": 172,
      "Root Domain": "imageshack.us",
      "Linking Root Domains": "816,970",
      "Domain Authority": 94
    },
    {
      "Rank": 173,
      "Root Domain": "dan.com",
      "Linking Root Domains": "3,953,866",
      "Domain Authority": 94
    },
    {
      "Rank": 174,
      "Root Domain": "afternic.com",
      "Linking Root Domains": "3,016,528",
      "Domain Authority": 94
    },
    {
      "Rank": 175,
      "Root Domain": "de.wikipedia.org",
      "Linking Root Domains": "676,498",
      "Domain Authority": 94
    },
    {
      "Rank": 176,
      "Root Domain": "mail.google.com",
      "Linking Root Domains": "494,309",
      "Domain Authority": 94
    },
    {
      "Rank": 177,
      "Root Domain": "change.org",
      "Linking Root Domains": "503,406",
      "Domain Authority": 94
    },
    {
      "Rank": 178,
      "Root Domain": "wp.com",
      "Linking Root Domains": "2,138,190",
      "Domain Authority": 94
    },
    {
      "Rank": 179,
      "Root Domain": "myaccount.google.com",
      "Linking Root Domains": "358,765",
      "Domain Authority": 94
    },
    {
      "Rank": 180,
      "Root Domain": "sapo.pt",
      "Linking Root Domains": "233,981",
      "Domain Authority": 93
    },
    {
      "Rank": 181,
      "Root Domain": "guardian.co.uk",
      "Linking Root Domains": "609,506",
      "Domain Authority": 93
    },
    {
      "Rank": 182,
      "Root Domain": "netlify.app",
      "Linking Root Domains": "390,569",
      "Domain Authority": 93
    },
    {
      "Rank": 183,
      "Root Domain": "redbull.com",
      "Linking Root Domains": "166,059",
      "Domain Authority": 93
    },
    {
      "Rank": 184,
      "Root Domain": "m.wikipedia.org",
      "Linking Root Domains": "331,607",
      "Domain Authority": 93
    },
    {
      "Rank": 185,
      "Root Domain": "nginx.org",
      "Linking Root Domains": "809,419",
      "Domain Authority": 93
    },
    {
      "Rank": 186,
      "Root Domain": "vice.com",
      "Linking Root Domains": "415,038",
      "Domain Authority": 93
    },
    {
      "Rank": 187,
      "Root Domain": "bandcamp.com",
      "Linking Root Domains": "623,564",
      "Domain Authority": 93
    },
    {
      "Rank": 188,
      "Root Domain": "ria.ru",
      "Linking Root Domains": "198,764",
      "Domain Authority": 93
    },
    {
      "Rank": 189,
      "Root Domain": "lemonde.fr",
      "Linking Root Domains": "275,500",
      "Domain Authority": 93
    },
    {
      "Rank": 190,
      "Root Domain": "ssl-images-amazon.com",
      "Linking Root Domains": "573,815",
      "Domain Authority": 93
    },
    {
      "Rank": 191,
      "Root Domain": "francetvinfo.fr",
      "Linking Root Domains": "176,571",
      "Domain Authority": 93
    },
    {
      "Rank": 192,
      "Root Domain": "liveinternet.ru",
      "Linking Root Domains": "343,479",
      "Domain Authority": 93
    },
    {
      "Rank": 193,
      "Root Domain": "ca.gov",
      "Linking Root Domains": "535,204",
      "Domain Authority": 93
    },
    {
      "Rank": 194,
      "Root Domain": "oup.com",
      "Linking Root Domains": "424,709",
      "Domain Authority": 93
    },
    {
      "Rank": 195,
      "Root Domain": "gnu.org",
      "Linking Root Domains": "588,138",
      "Domain Authority": 93
    },
    {
      "Rank": 196,
      "Root Domain": "walmart.com",
      "Linking Root Domains": "355,465",
      "Domain Authority": 93
    },
    {
      "Rank": 197,
      "Root Domain": "abc.net.au",
      "Linking Root Domains": "422,110",
      "Domain Authority": 93
    },
    {
      "Rank": 198,
      "Root Domain": "www.wikipedia.org",
      "Linking Root Domains": "545,721",
      "Domain Authority": 93
    },
    {
      "Rank": 199,
      "Root Domain": "www.wix.com",
      "Linking Root Domains": "734,397",
      "Domain Authority": 93
    },
    {
      "Rank": 200,
      "Root Domain": "addthis.com",
      "Linking Root Domains": "660,513",
      "Domain Authority": 93
    },
    {
      "Rank": 201,
      "Root Domain": "dreamstime.com",
      "Linking Root Domains": "436,199",
      "Domain Authority": 93
    },
    {
      "Rank": 202,
      "Root Domain": "target.com",
      "Linking Root Domains": "301,105",
      "Domain Authority": 93
    },
    {
      "Rank": 203,
      "Root Domain": "berkeley.edu",
      "Linking Root Domains": "502,490",
      "Domain Authority": 93
    },
    {
      "Rank": 204,
      "Root Domain": "ietf.org",
      "Linking Root Domains": "395,058",
      "Domain Authority": 93
    },
    {
      "Rank": 205,
      "Root Domain": "adssettings.google.com",
      "Linking Root Domains": "408,352",
      "Domain Authority": 93
    },
    {
      "Rank": 206,
      "Root Domain": "clickbank.net",
      "Linking Root Domains": "480,366",
      "Domain Authority": 93
    },
    {
      "Rank": 207,
      "Root Domain": "biglobe.ne.jp",
      "Linking Root Domains": "240,817",
      "Domain Authority": 93
    },
    {
      "Rank": 208,
      "Root Domain": "hp.com",
      "Linking Root Domains": "488,455",
      "Domain Authority": 93
    },
    {
      "Rank": 209,
      "Root Domain": "google.co.in",
      "Linking Root Domains": "280,242",
      "Domain Authority": 93
    },
    {
      "Rank": 210,
      "Root Domain": "yelp.com",
      "Linking Root Domains": "951,049",
      "Domain Authority": 93
    },
    {
      "Rank": 211,
      "Root Domain": "ftc.gov",
      "Linking Root Domains": "296,042",
      "Domain Authority": 93
    },
    {
      "Rank": 212,
      "Root Domain": "amazon.fr",
      "Linking Root Domains": "258,679",
      "Domain Authority": 93
    },
    {
      "Rank": 213,
      "Root Domain": "search.yahoo.com",
      "Linking Root Domains": "471,702",
      "Domain Authority": 93
    },
    {
      "Rank": 214,
      "Root Domain": "washington.edu",
      "Linking Root Domains": "379,932",
      "Domain Authority": 93
    },
    {
      "Rank": 215,
      "Root Domain": "thenai.org",
      "Linking Root Domains": "508,136",
      "Domain Authority": 93
    },
    {
      "Rank": 216,
      "Root Domain": "secureserver.net",
      "Linking Root Domains": "998,920",
      "Domain Authority": 93
    },
    {
      "Rank": 217,
      "Root Domain": "pinterest.fr",
      "Linking Root Domains": "127,996",
      "Domain Authority": 93
    },
    {
      "Rank": 218,
      "Root Domain": "amzn.to",
      "Linking Root Domains": "969,152",
      "Domain Authority": 93
    },
    {
      "Rank": 219,
      "Root Domain": "akamaihd.net",
      "Linking Root Domains": "594,517",
      "Domain Authority": 93
    },
    {
      "Rank": 220,
      "Root Domain": "radiofrance.fr",
      "Linking Root Domains": "129,314",
      "Domain Authority": 93
    },
    {
      "Rank": 221,
      "Root Domain": "photos1.blogger.com",
      "Linking Root Domains": "884,036",
      "Domain Authority": 93
    },
    {
      "Rank": 222,
      "Root Domain": "disqus.com",
      "Linking Root Domains": "940,394",
      "Domain Authority": 93
    },
    {
      "Rank": 223,
      "Root Domain": "php.net",
      "Linking Root Domains": "663,814",
      "Domain Authority": 93
    },
    {
      "Rank": 224,
      "Root Domain": "nationalgeographic.com",
      "Linking Root Domains": "642,831",
      "Domain Authority": 93
    },
    {
      "Rank": 225,
      "Root Domain": "ibm.com",
      "Linking Root Domains": "521,426",
      "Domain Authority": 93
    },
    {
      "Rank": 226,
      "Root Domain": "www.livejournal.com",
      "Linking Root Domains": "3,013,375",
      "Domain Authority": 93
    },
    {
      "Rank": 227,
      "Root Domain": "lg.com",
      "Linking Root Domains": "146,264",
      "Domain Authority": 93
    },
    {
      "Rank": 228,
      "Root Domain": "whitehouse.gov",
      "Linking Root Domains": "409,267",
      "Domain Authority": 93
    },
    {
      "Rank": 229,
      "Root Domain": "newsweek.com",
      "Linking Root Domains": "403,716",
      "Domain Authority": 93
    },
    {
      "Rank": 230,
      "Root Domain": "discord.gg",
      "Linking Root Domains": "370,041",
      "Domain Authority": 93
    },
    {
      "Rank": 231,
      "Root Domain": "netflix.com",
      "Linking Root Domains": "375,123",
      "Domain Authority": 93
    },
    {
      "Rank": 232,
      "Root Domain": "bp2.blogger.com",
      "Linking Root Domains": "558,152",
      "Domain Authority": 93
    },
    {
      "Rank": 233,
      "Root Domain": "economist.com",
      "Linking Root Domains": "391,868",
      "Domain Authority": 93
    },
    {
      "Rank": 234,
      "Root Domain": "spiegel.de",
      "Linking Root Domains": "372,432",
      "Domain Authority": 93
    },
    {
      "Rank": 235,
      "Root Domain": "cointernet.com.co",
      "Linking Root Domains": "600,066",
      "Domain Authority": 93
    },
    {
      "Rank": 236,
      "Root Domain": "quora.com",
      "Linking Root Domains": "454,203",
      "Domain Authority": 93
    },
    {
      "Rank": 237,
      "Root Domain": "ebay.com",
      "Linking Root Domains": "953,225",
      "Domain Authority": 93
    },
    {
      "Rank": 238,
      "Root Domain": "lavanguardia.com",
      "Linking Root Domains": "155,530",
      "Domain Authority": 93
    },
    {
      "Rank": 239,
      "Root Domain": "huawei.com",
      "Linking Root Domains": "1,954,723",
      "Domain Authority": 93
    },
    {
      "Rank": 240,
      "Root Domain": "themeforest.net",
      "Linking Root Domains": "533,888",
      "Domain Authority": 93
    },
    {
      "Rank": 241,
      "Root Domain": "picasa.google.com",
      "Linking Root Domains": "257,917",
      "Domain Authority": 93
    },
    {
      "Rank": 242,
      "Root Domain": "yandex.com",
      "Linking Root Domains": "1,538,145",
      "Domain Authority": 93
    },
    {
      "Rank": 243,
      "Root Domain": "latimes.com",
      "Linking Root Domains": "742,491",
      "Domain Authority": 93
    },
    {
      "Rank": 244,
      "Root Domain": "steampowered.com",
      "Linking Root Domains": "292,529",
      "Domain Authority": 93
    },
    {
      "Rank": 245,
      "Root Domain": "lefigaro.fr",
      "Linking Root Domains": "228,320",
      "Domain Authority": 93
    },
    {
      "Rank": 246,
      "Root Domain": "blog.fc2.com",
      "Linking Root Domains": "387,697",
      "Domain Authority": 93
    },
    {
      "Rank": 247,
      "Root Domain": "mega.nz",
      "Linking Root Domains": "190,787",
      "Domain Authority": 93
    },
    {
      "Rank": 248,
      "Root Domain": "fb.me",
      "Linking Root Domains": "343,263",
      "Domain Authority": 93
    },
    {
      "Rank": 249,
      "Root Domain": "akamaized.net",
      "Linking Root Domains": "334,518",
      "Domain Authority": 93
    },
    {
      "Rank": 250,
      "Root Domain": "translate.google.com",
      "Linking Root Domains": "297,831",
      "Domain Authority": 93
    },
    {
      "Rank": 251,
      "Root Domain": "instructables.com",
      "Linking Root Domains": "357,734",
      "Domain Authority": 93
    },
    {
      "Rank": 252,
      "Root Domain": "ouest-france.fr",
      "Linking Root Domains": "125,803",
      "Domain Authority": 93
    },
    {
      "Rank": 253,
      "Root Domain": "zoom.us",
      "Linking Root Domains": "662,996",
      "Domain Authority": 93
    },
    {
      "Rank": 254,
      "Root Domain": "arxiv.org",
      "Linking Root Domains": "255,995",
      "Domain Authority": 93
    },
    {
      "Rank": 255,
      "Root Domain": "deezer.com",
      "Linking Root Domains": "167,254",
      "Domain Authority": 93
    },
    {
      "Rank": 256,
      "Root Domain": "techcrunch.com",
      "Linking Root Domains": "523,418",
      "Domain Authority": 93
    },
    {
      "Rank": 257,
      "Root Domain": "buzzfeed.com",
      "Linking Root Domains": "629,078",
      "Domain Authority": 93
    },
    {
      "Rank": 258,
      "Root Domain": "mozilla.com",
      "Linking Root Domains": "209,523",
      "Domain Authority": 93
    },
    {
      "Rank": 259,
      "Root Domain": "britannica.com",
      "Linking Root Domains": "525,799",
      "Domain Authority": 93
    },
    {
      "Rank": 260,
      "Root Domain": "mashable.com",
      "Linking Root Domains": "445,320",
      "Domain Authority": 93
    },
    {
      "Rank": 261,
      "Root Domain": "yahoo.co.jp",
      "Linking Root Domains": "670,865",
      "Domain Authority": 93
    },
    {
      "Rank": 262,
      "Root Domain": "groups.google.com",
      "Linking Root Domains": "361,093",
      "Domain Authority": 93
    },
    {
      "Rank": 263,
      "Root Domain": "pl.wikipedia.org",
      "Linking Root Domains": "149,632",
      "Domain Authority": 93
    },
    {
      "Rank": 264,
      "Root Domain": "id.wikipedia.org",
      "Linking Root Domains": "543,150",
      "Domain Authority": 93
    },
    {
      "Rank": 265,
      "Root Domain": "ovh.com",
      "Linking Root Domains": "531,714",
      "Domain Authority": 93
    },
    {
      "Rank": 266,
      "Root Domain": "nypost.com",
      "Linking Root Domains": "434,362",
      "Domain Authority": 93
    },
    {
      "Rank": 267,
      "Root Domain": "abcnews.go.com",
      "Linking Root Domains": "588,250",
      "Domain Authority": 93
    },
    {
      "Rank": 268,
      "Root Domain": "ja.wikipedia.org",
      "Linking Root Domains": "368,912",
      "Domain Authority": 93
    },
    {
      "Rank": 269,
      "Root Domain": "skype.com",
      "Linking Root Domains": "440,283",
      "Domain Authority": 93
    },
    {
      "Rank": 270,
      "Root Domain": "vkontakte.ru",
      "Linking Root Domains": "355,894",
      "Domain Authority": 93
    },
    {
      "Rank": 271,
      "Root Domain": "express.co.uk",
      "Linking Root Domains": "386,693",
      "Domain Authority": 93
    },
    {
      "Rank": 272,
      "Root Domain": "rapidshare.com",
      "Linking Root Domains": "289,690",
      "Domain Authority": 93
    },
    {
      "Rank": 273,
      "Root Domain": "disney.com",
      "Linking Root Domains": "256,664",
      "Domain Authority": 93
    },
    {
      "Rank": 274,
      "Root Domain": "detik.com",
      "Linking Root Domains": "427,522",
      "Domain Authority": 93
    },
    {
      "Rank": 275,
      "Root Domain": "eventbrite.com",
      "Linking Root Domains": "660,343",
      "Domain Authority": 93
    },
    {
      "Rank": 276,
      "Root Domain": "npr.org",
      "Linking Root Domains": "866,306",
      "Domain Authority": 93
    },
    {
      "Rank": 277,
      "Root Domain": "kickstarter.com",
      "Linking Root Domains": "488,928",
      "Domain Authority": 93
    },
    {
      "Rank": 278,
      "Root Domain": "discord.com",
      "Linking Root Domains": "409,238",
      "Domain Authority": 93
    },
    {
      "Rank": 279,
      "Root Domain": "playstation.com",
      "Linking Root Domains": "252,850",
      "Domain Authority": 93
    },
    {
      "Rank": 280,
      "Root Domain": "stanford.edu",
      "Linking Root Domains": "650,298",
      "Domain Authority": 93
    },
    {
      "Rank": 281,
      "Root Domain": "rambler.ru",
      "Linking Root Domains": "942,728",
      "Domain Authority": 93
    },
    {
      "Rank": 282,
      "Root Domain": "apache.org",
      "Linking Root Domains": "1,005,932",
      "Domain Authority": 93
    },
    {
      "Rank": 283,
      "Root Domain": "twitch.tv",
      "Linking Root Domains": "476,657",
      "Domain Authority": 93
    },
    {
      "Rank": 284,
      "Root Domain": "google.nl",
      "Linking Root Domains": "253,432",
      "Domain Authority": 93
    },
    {
      "Rank": 285,
      "Root Domain": "ted.com",
      "Linking Root Domains": "641,957",
      "Domain Authority": 93
    },
    {
      "Rank": 286,
      "Root Domain": "nydailynews.com",
      "Linking Root Domains": "397,786",
      "Domain Authority": 93
    },
    {
      "Rank": 287,
      "Root Domain": "plos.org",
      "Linking Root Domains": "316,012",
      "Domain Authority": 93
    },
    {
      "Rank": 288,
      "Root Domain": "google.ru",
      "Linking Root Domains": "199,846",
      "Domain Authority": 93
    },
    {
      "Rank": 289,
      "Root Domain": "wired.com",
      "Linking Root Domains": "695,567",
      "Domain Authority": 93
    },
    {
      "Rank": 290,
      "Root Domain": "lexpress.fr",
      "Linking Root Domains": "121,569",
      "Domain Authority": 93
    },
    {
      "Rank": 291,
      "Root Domain": "academia.edu",
      "Linking Root Domains": "398,506",
      "Domain Authority": 93
    },
    {
      "Rank": 292,
      "Root Domain": "weibo.com",
      "Linking Root Domains": "1,398,459",
      "Domain Authority": 93
    },
    {
      "Rank": 293,
      "Root Domain": "rtve.es",
      "Linking Root Domains": "191,589",
      "Domain Authority": 93
    },
    {
      "Rank": 294,
      "Root Domain": "linktr.ee",
      "Linking Root Domains": "450,227",
      "Domain Authority": 93
    },
    {
      "Rank": 295,
      "Root Domain": "rakuten.co.jp",
      "Linking Root Domains": "649,522",
      "Domain Authority": 93
    },
    {
      "Rank": 296,
      "Root Domain": "urbandictionary.com",
      "Linking Root Domains": "260,102",
      "Domain Authority": 93
    },
    {
      "Rank": 297,
      "Root Domain": "surveymonkey.com",
      "Linking Root Domains": "452,011",
      "Domain Authority": 93
    },
    {
      "Rank": 298,
      "Root Domain": "webnode.page",
      "Linking Root Domains": "517,893",
      "Domain Authority": 93
    },
    {
      "Rank": 299,
      "Root Domain": "bloglovin.com",
      "Linking Root Domains": "555,711",
      "Domain Authority": 93
    },
    {
      "Rank": 300,
      "Root Domain": "e-monsite.com",
      "Linking Root Domains": "147,842",
      "Domain Authority": 93
    },
    {
      "Rank": 301,
      "Root Domain": "thetimes.co.uk",
      "Linking Root Domains": "424,366",
      "Domain Authority": 93
    },
    {
      "Rank": 302,
      "Root Domain": "hubspot.com",
      "Linking Root Domains": "342,134",
      "Domain Authority": 93
    },
    {
      "Rank": 303,
      "Root Domain": "xing.com",
      "Linking Root Domains": "502,215",
      "Domain Authority": 93
    },
    {
      "Rank": 304,
      "Root Domain": "books.google.com",
      "Linking Root Domains": "442,478",
      "Domain Authority": 93
    },
    {
      "Rank": 305,
      "Root Domain": "leparisien.fr",
      "Linking Root Domains": "145,109",
      "Domain Authority": 93
    },
    {
      "Rank": 306,
      "Root Domain": "outlook.com",
      "Linking Root Domains": "383,121",
      "Domain Authority": 93
    },
    {
      "Rank": 307,
      "Root Domain": "newyorker.com",
      "Linking Root Domains": "438,761",
      "Domain Authority": 93
    },
    {
      "Rank": 308,
      "Root Domain": "offset.com",
      "Linking Root Domains": "1,662,918",
      "Domain Authority": 93
    },
    {
      "Rank": 309,
      "Root Domain": "rt.com",
      "Linking Root Domains": "321,229",
      "Domain Authority": 93
    },
    {
      "Rank": 310,
      "Root Domain": "instagram.com",
      "Linking Root Domains": "27,457,411",
      "Domain Authority": 93
    },
    {
      "Rank": 311,
      "Root Domain": "wiktionary.org",
      "Linking Root Domains": "322,197",
      "Domain Authority": 93
    },
    {
      "Rank": 312,
      "Root Domain": "finance.yahoo.com",
      "Linking Root Domains": "490,486",
      "Domain Authority": 93
    },
    {
      "Rank": 313,
      "Root Domain": "gmail.com",
      "Linking Root Domains": "215,707",
      "Domain Authority": 93
    },
    {
      "Rank": 314,
      "Root Domain": "wiley.com",
      "Linking Root Domains": "642,854",
      "Domain Authority": 93
    },
    {
      "Rank": 315,
      "Root Domain": "ipv4.google.com",
      "Linking Root Domains": "335,030",
      "Domain Authority": 93
    },
    {
      "Rank": 316,
      "Root Domain": "freepik.com",
      "Linking Root Domains": "350,287",
      "Domain Authority": 93
    },
    {
      "Rank": 317,
      "Root Domain": "privacyshield.gov",
      "Linking Root Domains": "434,165",
      "Domain Authority": 93
    },
    {
      "Rank": 318,
      "Root Domain": "ggpht.com",
      "Linking Root Domains": "790,049",
      "Domain Authority": 93
    },
    {
      "Rank": 319,
      "Root Domain": "tripadvisor.com",
      "Linking Root Domains": "743,461",
      "Domain Authority": 93
    },
    {
      "Rank": 320,
      "Root Domain": "cnbc.com",
      "Linking Root Domains": "584,223",
      "Domain Authority": 93
    },
    {
      "Rank": 321,
      "Root Domain": "pbs.org",
      "Linking Root Domains": "550,504",
      "Domain Authority": 93
    },
    {
      "Rank": 322,
      "Root Domain": "oracle.com",
      "Linking Root Domains": "610,229",
      "Domain Authority": 93
    },
    {
      "Rank": 323,
      "Root Domain": "godaddy.com",
      "Linking Root Domains": "2,527,387",
      "Domain Authority": 93
    },
    {
      "Rank": 324,
      "Root Domain": "windows.net",
      "Linking Root Domains": "421,649",
      "Domain Authority": 93
    },
    {
      "Rank": 325,
      "Root Domain": "nginx.com",
      "Linking Root Domains": "719,475",
      "Domain Authority": 93
    },
    {
      "Rank": 326,
      "Root Domain": "cbc.ca",
      "Linking Root Domains": "501,258",
      "Domain Authority": 93
    },
    {
      "Rank": 327,
      "Root Domain": "spotify.com",
      "Linking Root Domains": "1,562,803",
      "Domain Authority": 93
    },
    {
      "Rank": 328,
      "Root Domain": "sciencemag.org",
      "Linking Root Domains": "325,338",
      "Domain Authority": 93
    },
    {
      "Rank": 329,
      "Root Domain": "yandex.ru",
      "Linking Root Domains": "1,030,476",
      "Domain Authority": 93
    },
    {
      "Rank": 330,
      "Root Domain": "aol.com",
      "Linking Root Domains": "684,413",
      "Domain Authority": 93
    },
    {
      "Rank": 331,
      "Root Domain": "sakura.ne.jp",
      "Linking Root Domains": "399,559",
      "Domain Authority": 93
    },
    {
      "Rank": 332,
      "Root Domain": "doi.org",
      "Linking Root Domains": "535,641",
      "Domain Authority": 93
    },
    {
      "Rank": 333,
      "Root Domain": "unesco.org",
      "Linking Root Domains": "343,443",
      "Domain Authority": 93
    },
    {
      "Rank": 334,
      "Root Domain": "gooyaabitemplates.com",
      "Linking Root Domains": "526,242",
      "Domain Authority": 93
    },
    {
      "Rank": 335,
      "Root Domain": "20minutos.es",
      "Linking Root Domains": "177,328",
      "Domain Authority": 93
    },
    {
      "Rank": 336,
      "Root Domain": "xbox.com",
      "Linking Root Domains": "202,072",
      "Domain Authority": 93
    },
    {
      "Rank": 337,
      "Root Domain": "abc.es",
      "Linking Root Domains": "208,310",
      "Domain Authority": 93
    },
    {
      "Rank": 338,
      "Root Domain": "nbcnews.com",
      "Linking Root Domains": "703,943",
      "Domain Authority": 93
    },
    {
      "Rank": 339,
      "Root Domain": "alexa.com",
      "Linking Root Domains": "318,100",
      "Domain Authority": 93
    },
    {
      "Rank": 340,
      "Root Domain": "sendspace.com",
      "Linking Root Domains": "153,507",
      "Domain Authority": 93
    },
    {
      "Rank": 341,
      "Root Domain": "dw.com",
      "Linking Root Domains": "402,910",
      "Domain Authority": 93
    },
    {
      "Rank": 342,
      "Root Domain": "icann.org",
      "Linking Root Domains": "647,759",
      "Domain Authority": 93
    },
    {
      "Rank": 343,
      "Root Domain": "mit.edu",
      "Linking Root Domains": "721,948",
      "Domain Authority": 93
    },
    {
      "Rank": 344,
      "Root Domain": "ziddu.com",
      "Linking Root Domains": "191,173",
      "Domain Authority": 93
    },
    {
      "Rank": 345,
      "Root Domain": "sedo.com",
      "Linking Root Domains": "2,834,345",
      "Domain Authority": 93
    },
    {
      "Rank": 346,
      "Root Domain": "amazon.it",
      "Linking Root Domains": "158,377",
      "Domain Authority": 93
    },
    {
      "Rank": 347,
      "Root Domain": "cpanel.com",
      "Linking Root Domains": "1,034,726",
      "Domain Authority": 93
    },
    {
      "Rank": 348,
      "Root Domain": "gofundme.com",
      "Linking Root Domains": "358,213",
      "Domain Authority": 93
    },
    {
      "Rank": 349,
      "Root Domain": "canada.ca",
      "Linking Root Domains": "277,717",
      "Domain Authority": 93
    },
    {
      "Rank": 350,
      "Root Domain": "cornell.edu",
      "Linking Root Domains": "468,491",
      "Domain Authority": 93
    },
    {
      "Rank": 351,
      "Root Domain": "sciencedaily.com",
      "Linking Root Domains": "373,565",
      "Domain Authority": 93
    },
    {
      "Rank": 352,
      "Root Domain": "engadget.com",
      "Linking Root Domains": "450,057",
      "Domain Authority": 93
    },
    {
      "Rank": 353,
      "Root Domain": "insider.com",
      "Linking Root Domains": "376,121",
      "Domain Authority": 93
    },
    {
      "Rank": 354,
      "Root Domain": "pexels.com",
      "Linking Root Domains": "348,012",
      "Domain Authority": 93
    },
    {
      "Rank": 355,
      "Root Domain": "addtoany.com",
      "Linking Root Domains": "706,608",
      "Domain Authority": 93
    },
    {
      "Rank": 356,
      "Root Domain": "sputniknews.com",
      "Linking Root Domains": "192,304",
      "Domain Authority": 93
    },
    {
      "Rank": 357,
      "Root Domain": "timeweb.ru",
      "Linking Root Domains": "614,037",
      "Domain Authority": 93
    },
    {
      "Rank": 358,
      "Root Domain": "zendesk.com",
      "Linking Root Domains": "524,051",
      "Domain Authority": 93
    },
    {
      "Rank": 359,
      "Root Domain": "www.gov.br",
      "Linking Root Domains": "162,487",
      "Domain Authority": 93
    },
    {
      "Rank": 360,
      "Root Domain": "code.google.com",
      "Linking Root Domains": "322,760",
      "Domain Authority": 93
    },
    {
      "Rank": 361,
      "Root Domain": "theatlantic.com",
      "Linking Root Domains": "584,155",
      "Domain Authority": 93
    },
    {
      "Rank": 362,
      "Root Domain": "alicdn.com",
      "Linking Root Domains": "540,630",
      "Domain Authority": 93
    },
    {
      "Rank": 363,
      "Root Domain": "theverge.com",
      "Linking Root Domains": "417,440",
      "Domain Authority": 93
    },
    {
      "Rank": 364,
      "Root Domain": "goodreads.com",
      "Linking Root Domains": "912,979",
      "Domain Authority": 93
    },
    {
      "Rank": 365,
      "Root Domain": "about.com",
      "Linking Root Domains": "749,096",
      "Domain Authority": 93
    },
    {
      "Rank": 366,
      "Root Domain": "clarin.com",
      "Linking Root Domains": "147,656",
      "Domain Authority": 93
    },
    {
      "Rank": 367,
      "Root Domain": "xinhuanet.com",
      "Linking Root Domains": "592,086",
      "Domain Authority": 93
    },
    {
      "Rank": 368,
      "Root Domain": "www.over-blog.com",
      "Linking Root Domains": "814,305",
      "Domain Authority": 93
    },
    {
      "Rank": 369,
      "Root Domain": "sciencedirect.com",
      "Linking Root Domains": "671,665",
      "Domain Authority": 93
    },
    {
      "Rank": 370,
      "Root Domain": "metro.co.uk",
      "Linking Root Domains": "278,961",
      "Domain Authority": 93
    },
    {
      "Rank": 371,
      "Root Domain": "psychologytoday.com",
      "Linking Root Domains": "393,073",
      "Domain Authority": 93
    },
    {
      "Rank": 372,
      "Root Domain": "espn.com",
      "Linking Root Domains": "399,025",
      "Domain Authority": 93
    },
    {
      "Rank": 373,
      "Root Domain": "reg.ru",
      "Linking Root Domains": "432,316",
      "Domain Authority": 93
    },
    {
      "Rank": 374,
      "Root Domain": "photobucket.com",
      "Linking Root Domains": "1,755,869",
      "Domain Authority": 93
    },
    {
      "Rank": 375,
      "Root Domain": "www.canalblog.com",
      "Linking Root Domains": "408,928",
      "Domain Authority": 93
    },
    {
      "Rank": 376,
      "Root Domain": "harvard.edu",
      "Linking Root Domains": "778,956",
      "Domain Authority": 93
    },
    {
      "Rank": 377,
      "Root Domain": "gizmodo.com",
      "Linking Root Domains": "411,344",
      "Domain Authority": 93
    },
    {
      "Rank": 378,
      "Root Domain": "naver.com",
      "Linking Root Domains": "524,140",
      "Domain Authority": 93
    },
    {
      "Rank": 379,
      "Root Domain": "google.ca",
      "Linking Root Domains": "343,694",
      "Domain Authority": 93
    },
    {
      "Rank": 380,
      "Root Domain": "qq.com",
      "Linking Root Domains": "4,198,673",
      "Domain Authority": 93
    },
    {
      "Rank": 381,
      "Root Domain": "prezi.com",
      "Linking Root Domains": "332,115",
      "Domain Authority": 93
    },
    {
      "Rank": 382,
      "Root Domain": "googleblog.com",
      "Linking Root Domains": "268,485",
      "Domain Authority": 93
    },
    {
      "Rank": 383,
      "Root Domain": "unsplash.com",
      "Linking Root Domains": "605,616",
      "Domain Authority": 93
    },
    {
      "Rank": 384,
      "Root Domain": "doubleclick.net",
      "Linking Root Domains": "595,982",
      "Domain Authority": 93
    },
    {
      "Rank": 385,
      "Root Domain": "ikea.com",
      "Linking Root Domains": "371,450",
      "Domain Authority": 93
    },
    {
      "Rank": 386,
      "Root Domain": "ea.com",
      "Linking Root Domains": "214,064",
      "Domain Authority": 93
    },
    {
      "Rank": 387,
      "Root Domain": "springer.com",
      "Linking Root Domains": "518,821",
      "Domain Authority": 93
    },
    {
      "Rank": 388,
      "Root Domain": "cambridge.org",
      "Linking Root Domains": "357,160",
      "Domain Authority": 93
    },
    {
      "Rank": 389,
      "Root Domain": "imageshack.com",
      "Linking Root Domains": "461,225",
      "Domain Authority": 93
    },
    {
      "Rank": 390,
      "Root Domain": "kompas.com",
      "Linking Root Domains": "299,769",
      "Domain Authority": 92
    },
    {
      "Rank": 391,
      "Root Domain": "allaboutcookies.org",
      "Linking Root Domains": "420,919",
      "Domain Authority": 92
    },
    {
      "Rank": 392,
      "Root Domain": "variety.com",
      "Linking Root Domains": "311,994",
      "Domain Authority": 92
    },
    {
      "Rank": 393,
      "Root Domain": "getbootstrap.com",
      "Linking Root Domains": "211,568",
      "Domain Authority": 92
    },
    {
      "Rank": 394,
      "Root Domain": "bbci.co.uk",
      "Linking Root Domains": "238,119",
      "Domain Authority": 92
    },
    {
      "Rank": 395,
      "Root Domain": "nikkei.com",
      "Linking Root Domains": "252,762",
      "Domain Authority": 92
    },
    {
      "Rank": 396,
      "Root Domain": "so-net.ne.jp",
      "Linking Root Domains": "172,858",
      "Domain Authority": 92
    },
    {
      "Rank": 397,
      "Root Domain": "epa.gov",
      "Linking Root Domains": "370,937",
      "Domain Authority": 92
    },
    {
      "Rank": 398,
      "Root Domain": "corriere.it",
      "Linking Root Domains": "183,600",
      "Domain Authority": 92
    },
    {
      "Rank": 399,
      "Root Domain": "statista.com",
      "Linking Root Domains": "367,679",
      "Domain Authority": 92
    },
    {
      "Rank": 400,
      "Root Domain": "lycos.com",
      "Linking Root Domains": "684,851",
      "Domain Authority": 92
    },
    {
      "Rank": 401,
      "Root Domain": "airbnb.com",
      "Linking Root Domains": "228,192",
      "Domain Authority": 92
    },
    {
      "Rank": 402,
      "Root Domain": "politico.com",
      "Linking Root Domains": "298,108",
      "Domain Authority": 92
    },
    {
      "Rank": 403,
      "Root Domain": "mysql.com",
      "Linking Root Domains": "425,534",
      "Domain Authority": 92
    },
    {
      "Rank": 404,
      "Root Domain": "orange.fr",
      "Linking Root Domains": "179,453",
      "Domain Authority": 92
    },
    {
      "Rank": 405,
      "Root Domain": "oecd.org",
      "Linking Root Domains": "215,791",
      "Domain Authority": 92
    },
    {
      "Rank": 406,
      "Root Domain": "pnas.org",
      "Linking Root Domains": "244,160",
      "Domain Authority": 92
    },
    {
      "Rank": 407,
      "Root Domain": "fbsbx.com",
      "Linking Root Domains": "559,075",
      "Domain Authority": 92
    },
    {
      "Rank": 408,
      "Root Domain": "geocities.com",
      "Linking Root Domains": "554,839",
      "Domain Authority": 92
    },
    {
      "Rank": 409,
      "Root Domain": "ameblo.jp",
      "Linking Root Domains": "737,305",
      "Domain Authority": 92
    },
    {
      "Rank": 410,
      "Root Domain": "m.me",
      "Linking Root Domains": "245,526",
      "Domain Authority": 92
    },
    {
      "Rank": 411,
      "Root Domain": "google.co.id",
      "Linking Root Domains": "193,837",
      "Domain Authority": 92
    },
    {
      "Rank": 412,
      "Root Domain": "viglink.com",
      "Linking Root Domains": "402,620",
      "Domain Authority": 92
    },
    {
      "Rank": 413,
      "Root Domain": "asus.com",
      "Linking Root Domains": "170,738",
      "Domain Authority": 92
    },
    {
      "Rank": 414,
      "Root Domain": "megaupload.com",
      "Linking Root Domains": "257,525",
      "Domain Authority": 92
    },
    {
      "Rank": 415,
      "Root Domain": "techradar.com",
      "Linking Root Domains": "178,457",
      "Domain Authority": 92
    },
    {
      "Rank": 416,
      "Root Domain": "storage.canalblog.com",
      "Linking Root Domains": "315,286",
      "Domain Authority": 92
    },
    {
      "Rank": 417,
      "Root Domain": "wisc.edu",
      "Linking Root Domains": "312,792",
      "Domain Authority": 92
    },
    {
      "Rank": 418,
      "Root Domain": "merriam-webster.com",
      "Linking Root Domains": "325,220",
      "Domain Authority": 92
    },
    {
      "Rank": 419,
      "Root Domain": "fortune.com",
      "Linking Root Domains": "299,559",
      "Domain Authority": 92
    },
    {
      "Rank": 420,
      "Root Domain": "hindustantimes.com",
      "Linking Root Domains": "242,839",
      "Domain Authority": 92
    },
    {
      "Rank": 421,
      "Root Domain": "thefreedictionary.com",
      "Linking Root Domains": "265,296",
      "Domain Authority": 92
    },
    {
      "Rank": 422,
      "Root Domain": "giphy.com",
      "Linking Root Domains": "456,256",
      "Domain Authority": 92
    },
    {
      "Rank": 423,
      "Root Domain": "itmedia.co.jp",
      "Linking Root Domains": "123,193",
      "Domain Authority": 92
    },
    {
      "Rank": 424,
      "Root Domain": "liberation.fr",
      "Linking Root Domains": "128,743",
      "Domain Authority": 92
    },
    {
      "Rank": 425,
      "Root Domain": "sina.com.cn",
      "Linking Root Domains": "1,005,726",
      "Domain Authority": 92
    },
    {
      "Rank": 426,
      "Root Domain": "focus.de",
      "Linking Root Domains": "162,282",
      "Domain Authority": 92
    },
    {
      "Rank": 427,
      "Root Domain": "worldbank.org",
      "Linking Root Domains": "293,962",
      "Domain Authority": 92
    },
    {
      "Rank": 428,
      "Root Domain": "pcmag.com",
      "Linking Root Domains": "304,947",
      "Domain Authority": 92
    },
    {
      "Rank": 429,
      "Root Domain": "scholastic.com",
      "Linking Root Domains": "196,357",
      "Domain Authority": 92
    },
    {
      "Rank": 430,
      "Root Domain": "ovh.co.uk",
      "Linking Root Domains": "386,318",
      "Domain Authority": 92
    },
    {
      "Rank": 431,
      "Root Domain": "theglobeandmail.com",
      "Linking Root Domains": "269,436",
      "Domain Authority": 92
    },
    {
      "Rank": 432,
      "Root Domain": "tinypic.com",
      "Linking Root Domains": "646,261",
      "Domain Authority": 92
    },
    {
      "Rank": 433,
      "Root Domain": "bp1.blogger.com",
      "Linking Root Domains": "557,532",
      "Domain Authority": 92
    },
    {
      "Rank": 434,
      "Root Domain": "debian.org",
      "Linking Root Domains": "413,975",
      "Domain Authority": 92
    },
    {
      "Rank": 435,
      "Root Domain": "archives.gov",
      "Linking Root Domains": "277,433",
      "Domain Authority": 92
    },
    {
      "Rank": 436,
      "Root Domain": "sfgate.com",
      "Linking Root Domains": "391,023",
      "Domain Authority": 92
    },
    {
      "Rank": 437,
      "Root Domain": "public-api.wordpress.com",
      "Linking Root Domains": "191,743",
      "Domain Authority": 92
    },
    {
      "Rank": 438,
      "Root Domain": "cutt.ly",
      "Linking Root Domains": "168,129",
      "Domain Authority": 92
    },
    {
      "Rank": 439,
      "Root Domain": "cbslocal.com",
      "Linking Root Domains": "332,422",
      "Domain Authority": 92
    },
    {
      "Rank": 440,
      "Root Domain": "ads.google.com",
      "Linking Root Domains": "158,154",
      "Domain Authority": 92
    },
    {
      "Rank": 441,
      "Root Domain": "usgs.gov",
      "Linking Root Domains": "243,092",
      "Domain Authority": 92
    },
    {
      "Rank": 442,
      "Root Domain": "telegra.ph",
      "Linking Root Domains": "295,174",
      "Domain Authority": 92
    },
    {
      "Rank": 443,
      "Root Domain": "intel.com",
      "Linking Root Domains": "257,879",
      "Domain Authority": 92
    },
    {
      "Rank": 444,
      "Root Domain": "rollingstone.com",
      "Linking Root Domains": "358,295",
      "Domain Authority": 92
    },
    {
      "Rank": 445,
      "Root Domain": "marketwatch.com",
      "Linking Root Domains": "387,580",
      "Domain Authority": 92
    },
    {
      "Rank": 446,
      "Root Domain": "inc.com",
      "Linking Root Domains": "281,267",
      "Domain Authority": 92
    },
    {
      "Rank": 447,
      "Root Domain": "utexas.edu",
      "Linking Root Domains": "285,896",
      "Domain Authority": 92
    },
    {
      "Rank": 448,
      "Root Domain": "amazon.ca",
      "Linking Root Domains": "240,618",
      "Domain Authority": 92
    },
    {
      "Rank": 449,
      "Root Domain": "pinterest.ca",
      "Linking Root Domains": "144,979",
      "Domain Authority": 92
    },
    {
      "Rank": 450,
      "Root Domain": "channel4.com",
      "Linking Root Domains": "170,291",
      "Domain Authority": 92
    },
    {
      "Rank": 451,
      "Root Domain": "slate.com",
      "Linking Root Domains": "398,238",
      "Domain Authority": 92
    },
    {
      "Rank": 452,
      "Root Domain": "excite.co.jp",
      "Linking Root Domains": "497,822",
      "Domain Authority": 92
    },
    {
      "Rank": 453,
      "Root Domain": "stuff.co.nz",
      "Linking Root Domains": "193,320",
      "Domain Authority": 92
    },
    {
      "Rank": 454,
      "Root Domain": "reverbnation.com",
      "Linking Root Domains": "217,531",
      "Domain Authority": 92
    },
    {
      "Rank": 455,
      "Root Domain": "noaa.gov",
      "Linking Root Domains": "343,115",
      "Domain Authority": 92
    },
    {
      "Rank": 456,
      "Root Domain": "amazon.in",
      "Linking Root Domains": "209,905",
      "Domain Authority": 92
    },
    {
      "Rank": 457,
      "Root Domain": "fifa.com",
      "Linking Root Domains": "188,278",
      "Domain Authority": 92
    },
    {
      "Rank": 458,
      "Root Domain": "woocommerce.com",
      "Linking Root Domains": "210,668",
      "Domain Authority": 92
    },
    {
      "Rank": 459,
      "Root Domain": "rottentomatoes.com",
      "Linking Root Domains": "258,049",
      "Domain Authority": 92
    },
    {
      "Rank": 460,
      "Root Domain": "garanteprivacy.it",
      "Linking Root Domains": "121,967",
      "Domain Authority": 92
    },
    {
      "Rank": 461,
      "Root Domain": "prnewswire.com",
      "Linking Root Domains": "463,164",
      "Domain Authority": 92
    },
    {
      "Rank": 462,
      "Root Domain": "kotaku.com",
      "Linking Root Domains": "147,546",
      "Domain Authority": 92
    },
    {
      "Rank": 463,
      "Root Domain": "fastcompany.com",
      "Linking Root Domains": "336,789",
      "Domain Authority": 92
    },
    {
      "Rank": 464,
      "Root Domain": "wordreference.com",
      "Linking Root Domains": "128,243",
      "Domain Authority": 92
    },
    {
      "Rank": 465,
      "Root Domain": "rbc.ru",
      "Linking Root Domains": "131,693",
      "Domain Authority": 92
    },
    {
      "Rank": 466,
      "Root Domain": "onamae.com",
      "Linking Root Domains": "137,938",
      "Domain Authority": 92
    },
    {
      "Rank": 467,
      "Root Domain": "ox.ac.uk",
      "Linking Root Domains": "283,676",
      "Domain Authority": 92
    },
    {
      "Rank": 468,
      "Root Domain": "barnesandnoble.com",
      "Linking Root Domains": "400,261",
      "Domain Authority": 92
    },
    {
      "Rank": 469,
      "Root Domain": "vox.com",
      "Linking Root Domains": "475,227",
      "Domain Authority": 92
    },
    {
      "Rank": 470,
      "Root Domain": "frontiersin.org",
      "Linking Root Domains": "234,357",
      "Domain Authority": 92
    },
    {
      "Rank": 471,
      "Root Domain": "unam.mx",
      "Linking Root Domains": "151,374",
      "Domain Authority": 92
    },
    {
      "Rank": 472,
      "Root Domain": "nl.wikipedia.org",
      "Linking Root Domains": "173,556",
      "Domain Authority": 92
    },
    {
      "Rank": 473,
      "Root Domain": "narod.ru",
      "Linking Root Domains": "273,336",
      "Domain Authority": 92
    },
    {
      "Rank": 474,
      "Root Domain": "dailystar.co.uk",
      "Linking Root Domains": "156,405",
      "Domain Authority": 92
    },
    {
      "Rank": 475,
      "Root Domain": "java.com",
      "Linking Root Domains": "150,880",
      "Domain Authority": 92
    },
    {
      "Rank": 476,
      "Root Domain": "asahi.com",
      "Linking Root Domains": "200,273",
      "Domain Authority": 92
    },
    {
      "Rank": 477,
      "Root Domain": "sky.com",
      "Linking Root Domains": "239,433",
      "Domain Authority": 92
    },
    {
      "Rank": 478,
      "Root Domain": "theconversation.com",
      "Linking Root Domains": "346,069",
      "Domain Authority": 92
    },
    {
      "Rank": 479,
      "Root Domain": "123rf.com",
      "Linking Root Domains": "255,236",
      "Domain Authority": 92
    },
    {
      "Rank": 480,
      "Root Domain": "thehill.com",
      "Linking Root Domains": "240,710",
      "Domain Authority": 92
    },
    {
      "Rank": 481,
      "Root Domain": "bfmtv.com",
      "Linking Root Domains": "130,139",
      "Domain Authority": 92
    },
    {
      "Rank": 482,
      "Root Domain": "businesswire.com",
      "Linking Root Domains": "347,554",
      "Domain Authority": 92
    },
    {
      "Rank": 483,
      "Root Domain": "a8.net",
      "Linking Root Domains": "463,770",
      "Domain Authority": 92
    },
    {
      "Rank": 484,
      "Root Domain": "mailchimp.com",
      "Linking Root Domains": "393,999",
      "Domain Authority": 92
    },
    {
      "Rank": 485,
      "Root Domain": "feedproxy.google.com",
      "Linking Root Domains": "746,068",
      "Domain Authority": 92
    },
    {
      "Rank": 486,
      "Root Domain": "box.com",
      "Linking Root Domains": "284,487",
      "Domain Authority": 92
    },
    {
      "Rank": 487,
      "Root Domain": "indianexpress.com",
      "Linking Root Domains": "268,130",
      "Domain Authority": 92
    },
    {
      "Rank": 488,
      "Root Domain": "espn.go.com",
      "Linking Root Domains": "255,430",
      "Domain Authority": 92
    },
    {
      "Rank": 489,
      "Root Domain": "weforum.org",
      "Linking Root Domains": "245,338",
      "Domain Authority": 92
    },
    {
      "Rank": 490,
      "Root Domain": "bigcommerce.com",
      "Linking Root Domains": "337,496",
      "Domain Authority": 92
    },
    {
      "Rank": 491,
      "Root Domain": "dell.com",
      "Linking Root Domains": "257,791",
      "Domain Authority": 92
    },
    {
      "Rank": 492,
      "Root Domain": "house.gov",
      "Linking Root Domains": "298,870",
      "Domain Authority": 92
    },
    {
      "Rank": 493,
      "Root Domain": "usda.gov",
      "Linking Root Domains": "419,600",
      "Domain Authority": 92
    },
    {
      "Rank": 494,
      "Root Domain": "python.org",
      "Linking Root Domains": "204,323",
      "Domain Authority": 92
    },
    {
      "Rank": 495,
      "Root Domain": "ubuntu.com",
      "Linking Root Domains": "238,353",
      "Domain Authority": 92
    },
    {
      "Rank": 496,
      "Root Domain": "jstor.org",
      "Linking Root Domains": "249,108",
      "Domain Authority": 92
    },
    {
      "Rank": 497,
      "Root Domain": "deloitte.com",
      "Linking Root Domains": "221,878",
      "Domain Authority": 92
    },
    {
      "Rank": 498,
      "Root Domain": "blackberry.com",
      "Linking Root Domains": "145,990",
      "Domain Authority": 92
    },
    {
      "Rank": 499,
      "Root Domain": "parallels.com",
      "Linking Root Domains": "545,400",
      "Domain Authority": 92
    },
    {
      "Rank": 500,
      "Root Domain": "standard.co.uk",
      "Linking Root Domains": "263,322",
      "Domain Authority": 92
    }
   ]

  return (
  <></>
  )
}

export default Data