
window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        height: 300,
        width: 800,
        animationEnabled: true,
        theme: "light2",

        axisY: {
            title: ""
        },
        data: [{
            type: "column",
            color: "darkgreen",

            dataPoints: [
                { y: 1500, label: " " },
                { y: 500, label: "13Oct2023" },
                { y: 1600, label: " " },
                { y: 1800, label: " " },
                { y: 1100, label: "17oct2023" },
                { y: 1400, label: " " },
                { y: 1900, label: " " },
                { y: 1400, label: "21oct2023" },
                { y: 1700, label: " " },
                { y: 1900, label: " " }

            ]
        }]
    });
    chart.render();


    var chart1 = new CanvasJS.Chart("chartContainer2", {
        height: 300,
        width: 765,
        animationEnabled: true,
        theme: "light2",

        axisY: {
            title: ""
        },
        data: [{
            type: "column",
            color: "darkgreen",

            dataPoints: [
                { y: 1500, label: " " },
                { y: 500, label: "13Oct2023" },
                { y: 1600, label: " " },
                { y: 1800, label: " " },
                { y: 1100, label: "17oct2023" },
                { y: 1400, label: " " },
                { y: 1900, label: " " },
                { y: 1400, label: "21oct2023" },
                { y: 1700, label: " " },
                { y: 1900, label: " " }

            ]
        }]
    });
    chart1.render();



    var chart2 = new CanvasJS.Chart("chartContainer3", {
        height: 300,
        width: 1245,
        animationEnabled: true,
        title: {

        },

        toolTip: {
            shared: true
        },

        data: [{
            type: "column",
            color: "darkgreen",


            dataPoints: [
                { label: "", y: 1100 },
                { label: "", y: 500 },
                { label: "", y: 1200 },
                { label: "", y: 1900 },
                { label: "", y: 1500 },
                { label: "", y: 1000 },
                { label: "", y: 1900 },
                { label: "", y: 1500 },
                { label: "", y: 1000 }
            ]
        },
        {
            type: "column",
            color: "rgb(82, 120, 83)",



            dataPoints: [
                { label: "", y: 1700 },
                { label: "", y: 1900 },
                { label: "", y: 1800 },
                { label: "", y: 1400 },
                { label: "", y: 1300 },
                { label: "", y: 1200 },
                { label: "", y: 1400 },
                { label: "", y: 1300 },
                { label: "", y: 1200 }
            ]
        }]
    });
    chart2.render();


}

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


document.getElementById("sidebar-toggle-btn").addEventListener("click", function () {
    document.getElementById("sidebar").classList.toggle("active");
});

let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e) => {
        let arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle("showMenu");
    });
}

// Check for the active tab in local storage and set the default tab
var defaultTab = localStorage.getItem("activeTab") || "tab1";
document.getElementById("defaultTab").classList.add("active");
document.getElementById(defaultTab).style.display = "block";

function openTab(tabName) {
    var i, tabContent, tabButtons;

    // Hide all tab content
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // Deactivate all tab buttons
    tabButtons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    // Show the selected tab content, highlight the active tab, and store the active tab in local storage
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
    localStorage.setItem("activeTab", tabName);
}

// Function to change the active page
function changePage(pageNumber) {
    // Add logic to fetch and display content for the selected page

    // Remove the "active" class from all page links
    var pageLinks = document.querySelectorAll('.page-link');
    pageLinks.forEach(function (link) {
        link.parentElement.classList.remove('active');
    });

    // Add the "active" class to the clicked page link
    event.currentTarget.parentElement.classList.add('active');
}