document.addEventListener('DOMContentLoaded', function() {
    function loadData() {
        var parser, xmlDoc;
        var studentData = "<students>"+
            "<student>" +
                "<id>101</id>" +
                "<firstName>John</firstName>" +
                "<lastName>Doe</lastName>" +
                "<age>20</age>" +
                "<courses>" +
                    "<course>" + 
                        "<courseName>Mathematics</courseName>" +
                        "<courseID>MATH101</courseID>" +
                        "<grade>80</grade>" +
                    "</course>" +
                    "<course>" +
                        "<courseName>Physics</courseName>" +
                        "<courseID>PHY101</courseID>" + 
                        "<grade>85</grade>" +
                    "</course>" +
                "</courses>" +
                "<gpa>3.5</gpa>" +
            "</student>" +
            "<student>" +
                "<id>102</id>" +
                "<firstName>Jane</firstName>" +
                "<lastName>Smith</lastName>" + 
                "<age>22</age>" +
                "<courses>" +
                    "<course>" +
                        "<courseName>Chemistry</courseName>" +
                        "<courseID>CHEM101</courseID>" +
                        "<grade>90</grade>" +
                    "</course>" +   
                    "<course>" +
                        "<courseName>Biology</courseName>" +
                        "<courseID>BIO101</courseID>" +
                        "<grade>95</grade>" +
                    "</course>" +
                "</courses>" +
                "<gpa>3.8</gpa>" +
            "</student>" +
            "<student>" +
                "<id>103</id>" +
                "<firstName>Emily</firstName>" +
                "<lastName>Johnson</lastName>" +
                "<age>21</age>" +
                "<courses>" +
                    "<course>" +
                        "<courseName>History</courseName>" +
                        "<courseID>HIST101</courseID>" +
                        "<grade>88</grade>" +
                    "</course>" +
                    "<course>" +
                        "<courseName>Geography</courseName>" +
                        "<courseID>GEO101</courseID>" +
                        "<grade>92</grade>" +
                    "</course>" +
                "</courses>" +
                "<gpa>3.6</gpa>" +
            "</student>" +
        "</students>";

        parser = new DOMParser();
        xmlDoc = parser.parseFromString(studentData, "text/xml");

        var students = xmlDoc.getElementsByTagName("student");
        var displayDiv = document.getElementById("display");
        displayDiv.innerHTML = "";
        for (var i = 0; i < students.length; i++) {
            var id = students[i].getElementsByTagName("id")[0].textContent;
            var firstName = students[i].getElementsByTagName("firstName")[0].textContent;
            var lastName = students[i].getElementsByTagName("lastName")[0].textContent;
            var course1ID = students[i].getElementsByTagName("course")[0].getElementsByTagName("courseID")[0].textContent; 
            var course1Name = students[i].getElementsByTagName("course")[0].getElementsByTagName("courseName")[0].textContent;  
            var course1Grade = students[i].getElementsByTagName("course")[0].getElementsByTagName("grade")[0].textContent;
            var course2ID = students[i].getElementsByTagName("course")[1].getElementsByTagName("courseID")[0].textContent; 
            var course2Name = students[i].getElementsByTagName("course")[1].getElementsByTagName("courseName")[0].textContent;
            var course2Grade = students[i].getElementsByTagName("course")[1].getElementsByTagName("grade")[0].textContent; 
            var age = students[i].getElementsByTagName("age")[0].textContent;
            var gpa = students[i].getElementsByTagName("gpa")[0].textContent;
            displayDiv.innerHTML += id + ", " + firstName + ", " + lastName + ", " + course1ID + ", " + course1Name + ", " + course1Grade + ", " + age + ", " + gpa + "<br>";
            displayDiv.innerHTML += id + ", " + firstName + ", " + lastName + ", " + course2ID + ", " + course2Name + ", " + course2Grade + ", " + age + ", " + gpa + "<br>";
        }
    }
    loadData();
});

