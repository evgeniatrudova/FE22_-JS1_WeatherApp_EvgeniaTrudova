# FE22_-JS1_WeatherApp_EvgeniaTrudova
Inlämning 1, dokumentation. 
//__DEL 1: API,som använder sig av  OPENWEATHERMAP & key -metod för att skaffa position och temperatur.______________________________________________________________
/*  
 1)    Variabler deklareras inför en funktion weather.
 2)    ApiKey är en sträng som innehåller API-nyckel, och fetchWeather() är en funktion som tar en parameter: city.
 3)    Koden anropar Open Weather Map API för att få väderdata för given (city) stad.
 4)    När man inte få svar från city; svar att en varning visas med texten "No weather found."
 5)    Retur JSON-data bibliotek selekteras för data för temperatur och luftfuktighet.
 6)    Data visas med documentQuery.
 7)    Kontroll; vid ingen sökning visas information för Stockholm. 
 */
 Inlämning 2; dokumentation.
 //_____DEL 3: Kod exempel med Bootstrap utan key med API: metadata, som bara finns på 8 språk; ej på svenska; och innehåller begränsad antal väder punkt referenser och funkar bäst med välkända städer som t.ex London/ Stockholm men kommer inte att ge svar för Lund eller Malmö för att Sverige har endast 2 data punkter; för Stockholm och Göteborg___________________________________________________________
/*  
 1) Väder app konstrueras med en konstruktur-metod. Kod delas upp i klasser; funktion av en klass kapslas in i konstruktor grupp som beskriver vad funtkionen gör.     
 2) Konstruktorfunktion söker efter data, när kod aktiveras.
      > Innehåller variabler; baseApiUrl och searchApiUrl som används för att markera sökning; så att korrekt data hämtas från API.
      > addCorsHeader() en metod markering som underlättar sökning i API, igenom cross-domain blockeringar.
      >  $.ajaxPrefilter() metod kontrollerar att Cors fungerar; syfte är att ha en bra header som markerar sökning i API.
 3)  Kod är organiserad i 3  område; denna struktur är vanlig när man arbetar med framework och utökar Java Script.
     constructor() {  this.grupp = $('id-av-grupp-från-html');}  
    1.- Core DOM Elements - Det som visas på skärm
    2.- Search Form - Sökning funktion
    3.- Error Box - fel meddelande funktion        
 4)  Class Display Forecast, innehåller  url för en bild för Forecast; samt grupp showTodaysForecastDetails() med parametrar  name, value, unit; som få instruktioner att när parameter data ändras; då ska DOM element ändras efter struktur: 
            $(`id från html`).append(`
            <div class="position inne i HTML">
                <span class="position inne i HTML">${name}</span>
                <span>${value} ${unit}</span>
            </div>
 5)   showUpcomingDaysForecast innehåller parametrar (dayImgUrl, weekDay, maxTemp) och organiseras på snärlik sätt med ${parameternamn}.
       $('#id').append(`
               <li class="html">
                <img class="html" src="${this.imageURL}/${dayImgUrl}.svg" />
                <span class="html">${weekDay}</span>
                <span class="html">${maxTemp}</span>
               </li>
 6)    Inkapslade funktioner anropas med showTodaysForecast för forecast genom id och nya JS namn.
        showTodaysForecast(forecast) {
        $('#id').html(java script namn för grupp);
        $('#forecast-card-img').attr('src', `${this.imageURL}/${forecast.todaysImgUrl}.svg`);
        }}
        
 7)    dataMiddleware är en klass som innehåller en konstruktor, som använder this. för att skapa  två objekt.
               this.displayForecast = new displayForecast();
               this.coreDomElements = new coreDomElements();
       
 8)     gatherTodaysForecastDetails(data) använder return, för att plocka ut data man önskar få ut från API, t.ex temperatur och luftfuktighet.Istället för att få ut all data; man organiserar sökning som 
         return {
            önskvärtsökning: {
                value: data.namnpåönskvärtsökning,
                unit: 'övriga tecken som %',
            },
 9)   gatherTodaysForecastGeneral(data) använder return metod för att plocka ut (data):  
            currentWeekday: moment (data.applicable_date).format('dddd'),
            todaysFullDate: moment(data.applicable_date).format('MMMM Do'),
            locationName: data.title,
            todaysImgUrl: data.weather_state_abbr,
            todaysTemp: Math.round(data.the_temp),
            weatherState: data.weather_state_name,
 10)    Koden förbereder sedan data som kommer att användas för att visa dagens prognosdetaljer och morgondagens prognosdetaljer genom att deklarera grupper som kan plockas ut med const; this. och data.Koden är avsedd att visa prognosen för idag och imorgon.
   
        prepareDataForDom(data) {
        const {  } = data.consolidated_weather[0]; organiserar alla möjliga data punkter man kan plocka från API
        const todaysForecastGeneral = this.gatherTodaysForecastGeneral({  }); = relevanta parametrar för design av app.
        const todaysForecastDetails = this.gatherTodaysForecastDetails({ }); = detaljer av todayforecast     
        prepareUpcomingDaysForecast(forecast) {
        $.each(forecast, (index, value) => {
            if (index < 1) return;
 11)    class requestController har construktor som använder this. för fetchForecastApi, coreDomeElements,coreDomElements,dataMiddleware, samt registrerEventListener som lyssnar till events. 
 12)     Om fetchWeather (query) använder sökning this inom fetchForecastApi return data och getLocation ger ingen svar; då få man fel meddelande  Could not find this location, please try again.
 
            fetchWeather(query) {  this.fetchForecastApi.getLocation(query, location => {
            if (!location || location.length === 0) {
                this.coreDomElements.showError('Could not find this location, please try again.');
                return;
 13)   Om data inte kan nåss, fel meddelande "Could not proceed with the request, please try again later"
 14)   Varje request, aktiveras när man trycker på Submit knapp; och sökning i API görs på nytt för showRequestInProgress och fetchWeather.
 15)   Data registreras.
 */
//________________________________________________________________
Inlämning 3, dokumentation

Kod arbete:  https://github.com/evgeniatrudova/FE-21-WeatherApp/blob/main/script.js

Jag refererar till kod stycke; som är skriven med tutorial; som utgår från metaweather som saknas svenska som språk alternativ och ger undefined; på  veckans väder beskrivning  medan daglig rapport få en fungerande väder beskrivning.

Min tankesätt har varit att använda samma metod; som användes i daglig rapport och applicera den på veckans rapport.Så varför visas undefined? 
Som ni har så snällt märkt; som Chrome- Console också gjort; så är lösningen inte så enkel som slarv på rad 262. Inlämning uppgift är den sista fungerande versionen av ändringar; som slutar visas helt; när rad 262 ändras och utökas med unit och value. 

-showUpcomingDaysForecast({ dayImgUrl, weekDay, maxTemp,value,unit}) ger följande fel meddelnade: 
-script.js:262
-    Uncaught ReferenceError: unit is not defined
-    at Object.<anonymous> (script.js:262:95)
-    at Function.each (jquery-3.5.1.min.js:2:2976)
-    at dataMiddleware.prepareUpcomingDaysForecast (script.js:255:11)
-    at dataMiddleware.prepareDataForDom (script.js:239:14)
-    at script.js:297:37
-    at Object.<anonymous> (script.js:93:27)
-    at c (jquery-3.5.1.min.js:2:28294)
-    at Object.fireWith [as resolveWith] (jquery-3.5.1.min.js:2:29039)
-    at l (jquery-3.5.1.min.js:2:79800)
-    at XMLHttpRequest.<anonymous> (jquery-3.5.1.min.js:2:82254) 

1) Vi har inte fått någon träning i hantering av buggar; och jag har lämnat in uppgiften i senast fungerande versionen.Jag förstår inte vad ni syftar på; med att showUpcomingDaysForecast ska skrivas om för att ta emot weatherState och weather_state_namn för dagen. 
(API dokumentation: Majoriteten av detalj information ligger innuti "consolidated_weather") API: https://www.metaweather.com/api/location/44418/

2) Min förenklade tutorial kod är uppbyggt ut av  sex klasser;
 0.fetchForecastApi; coreDomElements; displayForecast; dataMiddleware, requestController och request. 
 1.Klass fetchForecastApi  innehåller en constructor; som kapslar in this.metoder som nåt in i API bibliotek via url för att plocka ut addCorsHeader markerad information om lokal position och väderdata.
 2.Klass coreDomElements har en constructor som kapslat in .this metod som kopplas direkt till id i HTML. Innuti ligger kod för error meddelande; Loader-animation och upvisning av Forecast. 
 3.Klass displayForecast  lägger till HTML länkar via JS; och innehåller ett constructor samt  show TodaysForecast och showTodatysForecastDetails samt  showUpcommingDaysForecast för veckan.
 ______________________________________________________________________
> (143) displayForecast > Constructor är  bara ett länk till url för APi.
> (146) displayForecast >  showTodaysForecastDetails innehåller namn på stad och beskrivning av väder via value och unit som bibliotek dem kan nå in i; 
 
> $(`#forecast-details`).append( HTML ) syftar på att ändringar innuto metoden .append förmedlas till HTML fil som befinner sig på id positiionen forecast-details.
>Beskrivning av väder kan förmedlas med <span>${value} ${unit}</span> innuti showTodatsForecastDetails
> (154) displayForecast >  showUpcomingDaysForecast syftar på forecast av detalj information om kommande vecka. $('#forecast-details-week').append( HTML) fungerar på samma sätt > .Man har fler värde som förmedlas t.ex med ikon data <img class="mb-2" width="30" src="${this.imageURL}/${dayImgUrl}.svg" ; ikon data ändras  från stimuli från this. metod  och imageURL
> (165) displayForecast >  showTodaysForecast (forecast)  der direktiv att html förändringar genomförs först från signal som kommer från  forecast; som innehåller data för     currentWeekday; todasFullDate, locationName,todayimgURL, todayTemp och weatherState.
> Klass dataMiddleware  innehåller constructor, gatherTodaysForecastDetails,gatherTodaysForecastGeneral, prepareDataForDom, prepareTodaysForecastDetails och prepareUpcomingDaysForecast länkade till data och forecast bibliotek med information.
> constructor innehåller this.metod som kopplar displayForecast med newdisplayForecast samt coreDomElements=newcoreDomElements.
> gatherTodaysForecastDetails gör en förfråga till dataAPi för lista med egenskaper; som börjar med grupp.egenskap t.ex data.humidity; innuti data, hämta humidity. 
> gatherTodaysForecastGeneral använder moment metod för att få ögonblicklig datum och tid från data, som innehåller applicable_date grupp i ett format som önskas. Enklare > förfrågningar som namn för stad kan hittas direkt via markering i API dokumentation; namn på städer är under title. 
> Så för att göra en förfrågning skrivs JSnamnpågrupp= data.title; 
>weatherState; som ger väder beskrivning kan hittas under data.weather_state_name.
> prepareDataForDom använder const; för att validera grupper som efterfrågas i resten av uppgiften. Innuti denna grupp kan man placera ytterligare data punkter; för att lägga till t.ex luft tryck. Syfte med const{ air_pressure} = data.consolidated_weather[0] är hela väder appen; när innehåll i API databas ändras; då ändras innehåll i > > consolidated_weather som kan kallas med data. och grupp air_pressure.
> const todaysForecastDetails = this.gatherTodaysForecastDetails({        }); grupperar en del grupper under dagens mest relevanda data punkter, fuktighet; vindhastighet, temperatur och fåtal extra data punkter som kan kallas bara med todaysForecastDetails.
> Innehåll iconst; grupper innuti prepareDataForDom aktiveras med this.JSgrupp(const-bibliotek namn)
> (236) this.prepareUpcommingDaysForecast länkar direkt till data och consilidated_weather; som innehåller alla parametrar innuti API; även beskrivning av väder. 
> (237) this.coreDomElements.hideLoader(); samt  this.coreDomElements.showForecast(); är kod som krävs för att visa data på sidan.
> (240) prepareTodaysForecastDetails länkar till forecast bibliotek;  för varje call; kontrolleras Api key och value; som syftar på data värde som finns innuti api; det är ett bugg kontroll funktion som via this. hämtar konkret data  som skickas vidare till showTodaysForecastDetails. Each, syftar på att det görs för varje call inuti forecast.
> (249)prepareUpcommingDaysForecast; är del som kan vara relevant för forecast; kod del går ut på att för varje call in i forecast, hämtas index för vilken dag det är samt value. >Om index är större än 1, då kopplas in const för ikon; som hämtas bland api value och inom gruppen weather_state_abbr; samt temperatur och veckodag.
 >
 >
 > 
 > Här man man tro att man kan länka in väder beskrivning, som ligger i gruppen data.consolidated_weather under "weather_state_name". Men hela JS delen av koden kopplas bort när denna kod ändras med tillägg. 
> (249) prepareUpcomingDaysForecast(forecast) {
        $.each(forecast, (index, value) => {
            if (index < 1) return;
            const dayImgUrl = value.weather_state_abbr;
            const maxTemp = Math.round(value.max_temp);
            const weekDay = moment(value.applicable_date).format('dddd').substring(0, 3);
            this.displayForecast.showUpcomingDaysForecast({ dayImgUrl, maxTemp, unit });
        });
    }
ger  utökning av felmeddelande med   GET https://000678353.codepen.website/location-pin.png 404 

 >
 >
 >
 > (263) klass requestController är sista klass som  innehåller en constructor, showRequestInProgress, getQuery, fetchWeather, onSubmit, registerEventListener och slut const request. 
> Syfter med denna klassen är att hosta felmeddelande samt aktivera query funktionen i resten av klasser. 
constructor via metoden this hittar en Js-nämnd grupp som omvandlas till new- JSnämnd grupp.
> showRequestInProgress, är animation kopplad del av kod.
> getQuery använder return, val och trim för att ändra i id klassed search-query. 
> fetchWeather är kopplad till query bibiotek; när om man inte kan hitta ett location data då ändras coreDomElement till Show Error som innehåller text av felmeddelande. 
> fetchForecastApi är kopplad till getWeatherData,prepareDataforDom och och dataMiddleware. Om ingen data kommer från API, då ändras Dom till ett annat meddelande som är differentiera fel mellan oförmåga att hitta ett location och icke fungerande data.
onSubmit; aktiveras och query är inkopplad; stimuli skickas från aktivt query till showRequestInProgress.
> registerEventListener är standard kod; som gör det möjlight för JS att lyssna på HTMl hemsidan.
