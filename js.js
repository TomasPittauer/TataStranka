let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 60;
    document.querySelector('.slideshow').style.transform = `translateX(${offset}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

function currentSlide(index) {
    showSlide(index);
}

// Initialize the first slide as active
showSlide(currentIndex);

// Add event listeners to the dots
const dots = document.querySelectorAll('.dot');
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide(index);
    });
});


let currentLanguage = "CZ";

document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementById("button");

    let flag = document.getElementById("flag");

    let B1 = document.getElementById("oneB");
    let S1 = document.getElementById("oneS");

    let B2 = document.getElementById("twoB");
    let S2 = document.getElementById("twoS");

    let B3 = document.getElementById("threeB");
    let S3 = document.getElementById("threeS");

    let B4 = document.getElementById("fourB");
    let S4 = document.getElementById("fourS");

    function zmena() {
        if (currentLanguage === "CZ") {
            flag.src = "1280px-Flag_of_the_United_Kingdom_(2-3).svg.png";
            B1.innerText = "EN";
            S1.innerText = "EN";
            B2.innerText = "About Me";
            S2.innerText = "I am a passionate IT professional specializing in data processing, ETL, and reporting. I enjoy extracting data from various systems and transforming it into clear visualizations that provide added value to users. My work allows me to leverage modern technologies and continuously learn new things. I love challenges and enjoy solving complex problems that require a creative and efficient approach. Working with data is not just a job for me; it's a hobby.\n";
            B3.innerText = "Used Technologies";
            S3.innerText = "I have extensive experience with well-known databases such as MSSQL and Oracle, but my favorite is Snowflake. I use Keboola as my ETL tool, where I hold a Senior Data Engineer certification. For data visualization, I use Microsoft's PowerBI, where I am certified as a PowerBI Data Analyst.";
            B4.innerText = "References";
            S4.innerText = "Homecredit International: Comprehensive reporting setup using various data sources, Keboola for transfer and transformation, and outputs to PowerBI.\n" +
                "CreditInfo: Replacing MSSQL DWH with Keboola for data pumps.\n" +
                "Encall: Management and operation of reporting solutions in Keboola and PowerBI.\n";
            currentLanguage = "EN";
        } else if (currentLanguage === "EN") {
            flag.src = "Flag_of_the_Czech_Republic.svg.png";
            B1.innerText = "CZ";
            S1.innerText = "CZ";
            B2.innerText = "O mnÄ›";
            S2.innerText = "Jsem vĂˇĹˇnivĂ˝ IT profesionĂˇl se specializacĂ­ na data processing, ETL a reporting. BavĂ­ mÄ› zĂ­skĂˇvat data z rĹŻznĂ˝ch systĂ©mĹŻ a transformovat je do pĹ™ehlednĂ˝ch vizualizacĂ­, kterĂ© pĹ™inĂˇĹˇejĂ­ pĹ™idanou hodnotu uĹľivatelĹŻm. Moje prĂˇce mi umoĹľĹuje vyuĹľĂ­vat modernĂ­ technologie a neustĂˇle se uÄŤit novĂ© vÄ›ci. MĂˇm rĂˇd vĂ˝zvy a rĂˇd Ĺ™eĹˇĂ­m komplexnĂ­ problĂ©my, kterĂ© vyĹľadujĂ­ kreativnĂ­ a efektivnĂ­ pĹ™Ă­stup. PrĂˇce s daty je pro mÄ› nejen povolĂˇnĂ­m, ale i konĂ­ÄŤkem.\n";
            B3.innerText = "PouĹľitĂ© technologie";
            S3.innerText = "MĂˇm rozsĂˇhlĂ© zkuĹˇenosti s nejznĂˇmÄ›jĹˇĂ­mi databĂˇzemi jako MSSQL a Oracle, ale mojĂ­ srdcovkou je Snowflake. Jako ETL nĂˇstroj pouĹľĂ­vĂˇm Keboolu, kde mĂˇm certifikaci Senior Data Engineer. Pro vizualizaci dat pouĹľĂ­vĂˇm PowerBI od Microsoftu, ve kterĂ©m mĂˇm certifikaci PowerBI Data Analyst.";
            B4.innerText = "Reference";
            S4.innerText = "Homecredit International: KomplexnĂ­ nastavenĂ­ reportingu s vyuĹľitĂ­m rĹŻznĂ˝ch datovĂ˝ch zdrojĹŻ, Keboola pro jejich pĹ™enos a transformaci, a vĂ˝stupy do PowerBI.\n" +
                "CreditInfo: NahrazenĂ­ MSSQL DWH za Keboolu pro datovĂ© pumpy.\n" +
                "Encall: SprĂˇva a provoz reportingovĂ©ho Ĺ™eĹˇenĂ­ v Keboole a PowerBI.\n";
            currentLanguage = "CZ";
        }
    }


    button.addEventListener("click", zmena);
});


document.getElementById('transferButton').addEventListener('click', function() {
    window.location.href = 'https://example.com';})

document.getElementById('transferButton2').addEventListener('click', function() {
    window.location.href = 'https://example.com';})
