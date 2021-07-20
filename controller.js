window.onload = function () {


///////////////////
//  Opdracht 1
///////////////////

    /*opdracht 1a
    Hoeveel exemplaren moeten we nog verkopen? Schrijf een functie die dit berekent.
     */

    const checkStock = function () {
        //variable voor totale voorraad
        let totalStock = 0;
        //check elk item in array en haal element.sold af van element.originalStock
        inventory.map(element => {
            let currentStock = element.originalStock - element.sold
            // tel dit op bij de totalStock
            totalStock += currentStock;
        })
        return totalStock;
    }

///////////////////
//  Opdracht 2
///////////////////

    /*opdracht 1B
    Zorg ervoor dat dit aantal _in het rood_ wordt weergegeven op de pagina
     */
    //variable displayStock wordt toegewezen aan 'p'-element met #totalStock
    const displayStock = document.querySelector('#totalstock');
    //inhoud displayStock is uitkomst functie checkStock;
    displayStock.textContent = checkStock();


    /*opdracht 2A
    Gebruik een array-methode om een array te maken met alle tv-type namen.
     */

    //loop met mapfunctie door de inventory en log van elke object het type in de console
    const typeNames = inventory.map((type) => type.type);
    console.log(typeNames);

    /*opdracht 2B
    Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn.
     */

    // loop met de filterfunctie door de inventory en filter elk item waarbij de ingekochte voorraad gelijk is aan de verkochte items;
    const soldOut = inventory.filter(item => item.sold == item.originalStock);
    console.log(soldOut);

    /*opdracht 2C
    Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken.
     */

    // loop met de filterfunctie door de inventory en filter elk item uit de opties-array die beschikt over ambilight;
    const ambiLight = inventory.filter(item => item.options.ambiLight);
    console.log(ambiLight);

    /*opdracht 2D
    Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert.
     */

    // loop met de sort-functie door de inventory en sorteer de items van laag naar hoog
    const priceSort = inventory.sort((a, b) => a.price - b.price);
    console.log(priceSort);


///////////////////
//  Opdracht 3
///////////////////

    /*opdracht 3a
   Bereken wat de totale opbrengst is, als we alle exemplaren van ieder type zouden verkopen.
   Geef dit in het **blauw** weer op de pagina.(dit gebeurt in de stylesheet)
    */

//functie die de gehele voorraad van elk opject mapped en vermenigvuldigt met de prijs
    const everyItemSold = () => {
        let totalValue = 0;
        inventory.map(item => {
                AllItemSoldPrice = item.originalStock * item.price;
                // van elk item wordt deze uitkomst opgeteld bij totalValue
                totalValue += AllItemSoldPrice;
            }
        )
        return totalValue;
    }
    //variabele soldOutYield wordt gekoppeld aan 'p'-element in de Dom
    const soldoutyield = document.querySelector('#totaleopbrengst');
    //textcontent van dit 'p'-element is de uitkomst van functie everyItemSold
    soldoutyield.textContent = everyItemSold();

    /*opdracht 3b
Bereken hoeveel we tot nu toe verdient hebben met het aantal verkochte tv's.
Geef dit weer in het **groen** weer op de pagina(dit gebeurt in de stylesheet)
    */

//functie die over elk item in inventory loopt en de verkochte items vermenigvuldigt met de prijs
    const itemSoldValue = () => {
        let totalValue = 0;
        inventory.map(item => {
                AllItemSoldPrice = item.sold * item.price;
                // van elk item wordt deze uitkomst opgeteld bij totalValue
                totalValue += AllItemSoldPrice;
            }
        )
        return totalValue;
    }
    //variabele soldOutYield wordt gekoppeld aan 'p'-element in de Dom
    const currentyield = document.querySelector('#totalhuidigeopbrengst');
    //textcontent van dit 'p'-element is de uitkomst van functie itemSoldValue
    currentyield.textContent = itemSoldValue();


///////////////////
//  Opdracht 4
///////////////////

//maak een variable voor elke tv en append daar het type van een willekeurige tv in
    const tv1 = document.querySelector('#tv1').append(inventory[0].type);
    const tv2 = document.querySelector('#tv2').append(inventory[1].type);


///////////////////
//  Opdracht 5
///////////////////


    /*opdracht 5a
Zorg ervoor dat er een string wordt gegenereerd voor de naam van een tv.
Maak een functie die één tv-object als parameter verwacht en de naam op de volgende manier samenvoegt:
`[merk] [type] - [naam]` zoals `Philips 43PUS6504/12 - 4K TV` of `NIKKEI NH3216SMART - HD smart TV`.
Zorg ervoor dat je deze functie voor iedere tv zou kunnen gebruiken.
    */

// functie die string terug geeft met de waardes van inventory.brand / inventory.type / inventory.name
    function showTvName(tv) {
        return `${tv.brand} ${tv.type} | ${tv.name}`
    }

    showTvName(inventory[0]);

    /*opdracht 5b
Maak een functie die één tv-prijs als parameter verwacht (zoals `379`) en daar de volgende string van maakt: `€379,-`.
Zorg ervoor dat je deze functie voor iedere tv zou kunnen gebruiken.
    */

// functie die string terug geeft met de waarde van inventory.price, het euroteken en ,-
    function showTvPrice(tv) {
        return `\u20AC${tv.price},-`;
    }

    showTvPrice(inventory[0]);

    /*opdracht 5c
Zorg ervoor dat er een string wordt gegenereerd voor alle beschikbare schermgroottes van één tv in zowel inches als cm
Maak een functie die één screen-sizes array verwacht en de groottes op de volgende manier samenvoegt:
`[schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm)` etc.
Dus een input van `[32]` geeft `32 inch (81 cm)` en een input van `[43, 50, 55, 58]` geeft
`43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)`.
Zorg ervoor dat je deze functie voor iedere tv zou kunnen gebruiken,
zowel voor tv's met maar één schermgrootte als met tientallen schermgroottes.
   */

// functie die een lege string genereert en deze vult met de schermgroottes in inches en cm(omgerekend) van elke tv;
    function showScreenSizes(tv) {
        let string = '';
        //loop door elke schermgroote van de tv en geef de inches en cm(inches *2,54 afgerond), vul de string met elke schermgrootte en voeg | toe.
        tv.availableSizes.map(size => {
            let tvItem = `${size} inch (${Math.round(size * 2, 54)}) cm | `;
            string += tvItem;

        })
        // haal het laatste | weg van de laatste schermgrootte
        string = string.substring(0, string.length - 3);
        return string;
    }

    showScreenSizes(inventory[3]);

    /*opdracht 5d
Zorg ervoor de informatie van één van de twee tv's zoals het voorbeeld wordt weergegeven op de pagina.
Gebruik hiervoor de functies die je hebt gemaakt in opdracht 5a, 5b en 5c.
   */

    //koppel leeg element in de dom aan je variabele en vul deze met de uitkomst van de functies uit 5a,5b,5c
    document.querySelector('#naam').append(showTvName(inventory[4]));
    document.querySelector('#prijs').append(showTvPrice(inventory[4]));
    document.querySelector('#schermgroottes').append(showScreenSizes(inventory[4]));


    /*opdracht 5e
    Schrijf een functie die ALLE tv's weergeeft op de pagina zoals in het voorbeeld.
    Dit wil je natuurlijk niet acht keer opnieuw schrijven, want nu zijn het 8 tv's, maar in de toekomst misschien wel 200!
    Gebruik in deze functie de voorgaande functies die je hebt geschreven,
    om onderdelen van de data te formatten. Deze "tv-generator-functie" verwacht één parameter:
    de volledige array met tv-objecten. Vergeet 'm niet aan te roepen!
     */

    const showAlTvs = (array) => {
        //loop door array
        array.map(tv => {
            //maak een HTML-element aan in een variabele
            const tvName = document.createElement('p');
            //vul dit element met de uitkomst van de functie
            tvName.innerHTML = showTvName(tv);
            const tvPrice = document.createElement('p');
            tvPrice.innerHTML = showTvPrice(tv);
            const tvScreen = document.createElement('p');
            tvScreen.innerHTML = showScreenSizes(tv);

            //maak een div-container aan en geef dit een class(Name)
            const tvcontainer = document.createElement('div');
            tvcontainer.className = 'tv';
            //vul de container met de HTML-elementen
            tvcontainer.append(tvName, tvPrice, tvScreen);
            //voeg de container aan de dom in een "verzamelcontainer"(dit doe ik omdat ik handiger is met styling bijv. flexbox)
            document.querySelector('#container').append(tvcontainer);
        })

    }
    showAlTvs(inventory);

///////////////////
//  Bonusopdracht
///////////////////

    /*
    Maak drie knoppen op de pagina: `Sorteer op prijs`, `AmbiLight TV's` en `Uitverkochte exemplaren`. Gebruik de code die je in opdracht 2b, 2c en 2d hebt gemaakt
    en schrijf dit om naar functies zodat je ze kunt aanroepen
    op het moment dat de buttons geklikt worden. Zorg ervoor dat de functies de uitkomsten in de de console loggen als de gebruiker op de bijbehorende knop klikt.
     */

    //koppel de buttons aan de variabelen
    const sortPriceButton = document.querySelector('#prijsbutton');
    const ambilightButton = document.querySelector('#prijsbutton');
    const soldOutButton = document.querySelector('#uitverkochtbutton');

    //functies gemaakt van de 2B opdracht
    const soldOutFunction = () => {
        inventory.filter(item => item.sold == item.originalStock);
        console.log(soldOut)
    };

    //functies gemaakt van de 2C opdracht
    const ambiLightFunction = () => {
        inventory.filter(item => item.options.ambiLight);
        console.log(ambiLight)
    };

    //functies gemaakt van de opdracht 2D
    const priceSortFunction = () => {
        inventory.sort((a, b) => a.price - b.price);
        console.log(priceSort)
    };

    //voeg een eventlistener toe aan de buttons en na de klik roepen ze bijbehorende functie aan
    sortPriceButton.addEventListener('click', priceSortFunction);
    ambilightButton.addEventListener('click', ambiLightFunction);
    soldOutButton.addEventListener('click', soldOutFunction);
}