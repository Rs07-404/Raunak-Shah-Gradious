function loadData(){
    while(localStorage.countries === undefined){
        localStorage.countries = JSON.stringify({
            "Argentina":{
                "country": "Argentina",
                "languages": "Spanish (Official), English, Italian, German, French",
                "population": "41,803,125",
                "median-age": 31.3,
                "area": "2,780,387"
            },
            "Australia":{
                "country": "Australia",
                "languages": "English (Official), Italian, Greek, Chinese",
                "population": "26,821,557",
                "median-age": 37.3,
                "area": "7,688,287"
            },
            "Greece":{
                "country": "Greece",
                "languages": "Greek (Official), English, German, French, Italian",
                "population": "10,341,277",
                "median-age": 43.2,
                "area": "131,957"
            },
            "India":{
                "country": "India",
                "languages": "Indian English & Hindi (Official), Gujarati, Kannada, Marathi, Bengali, Bodo, Dogri, Malayalam, Punjabi, Sanskrit, Tamil, Telugu",
                "population": "1,440,303,558",
                "median-age": 29.5,
                "area": "32,87,263"
            },
            "Brazil":{
                "country": "Brazil",
                "languages": "Portuguese (Official), Italian, German, Japanese",
                "population": "217,637,297",
                "median-age": 34.7,
                "area": "8,514,215"
            },
            "Japan":{
                "country": "Japan",
                "languages": "Japanese (Official), Amami, Kyukyu, Miyako",
                "population": "122,631,432",
                "median-age": 49.5,
                "area": "377,973"
            },
            "US":{
                "country": "United States",
                "languages": "English (78%), Spanish, Chinese, Tagalog, Vietnamese, French, Arabic, Korean, Russian, German",
                "population": "339,996,563",
                "median-age": 38.8,
                "area": "9,833,520"
            },
            "Malaysia":{
                "country": "Malaysia",
                "languages": "Malay (Official), English, Mandarin, Tamil",
                "population": "34,633,348",
                "median-age": 31.4,
                "area": "330,803"
            },
            "Russia":{
                "country": "Russia",
                "languages": "Russian (Official), Ossetic, Ukrainian, Buryat, Kalmyk, Chechen, Ingush, Abaza, Adyghe",
                "population": "144,713,314",
                "median-age": 41.5,
                "area": "17,098,242"
            },
            "Singapore":{
                "country": "Singapore",
                "languages": "Malay (Official), Tamil, English, Singaporean Mandarin",
                "population": "5,673,000",
                "median-age": 38.9,
                "area": "714.3"
            },
            "Germany":{
                "country": "Germany",
                "languages": "German (Official), Turkish, Arabic, Romani, Danish",
                "population": "84,607,016",
                "median-age": 46.7,
                "area": "357,592"
            }
        
        });
    }
    var data = JSON.parse(localStorage.countries);
    for(let cnt in data){
        let new_row = document.createElement("div");
        new_row.classList.add("tr");
        let new_element = document.createElement("div");
        new_element.innerHTML = data[cnt].country;
        new_row.appendChild(new_element);
        new_element = document.createElement("div");
        new_element.innerHTML = data[cnt].languages;
        new_row.appendChild(new_element);
        new_element = document.createElement("div");
        new_element.innerHTML = data[cnt].population;
        new_row.appendChild(new_element);
        new_element = document.createElement("div");
        new_element.innerHTML = data[cnt]["median-age"];
        new_row.appendChild(new_element);
        new_element = document.createElement("div");
        new_element.innerHTML = data[cnt].area;
        new_row.appendChild(new_element);
        document.getElementById("table").appendChild(new_row);
    }
    
}

window.onload = loadData();