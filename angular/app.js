var app = angular.module("portfolioApp", []);

class Language {
  constructor(name, percentage) {
    this.name = name;
    this.percentage = percentage;
  }
}

class Skill {
    constructor(name, description, icon){
        this.name = name;
        this.description = description;
        this.icon = icon;
    }
}

class Project {
    constructor(name, skills, date, image, link){
        this.name = name;
        this.skills = skills;
        this.image = image;
        this.date = date;
        this.link = link;
    }
}


app.controller("appController", ($scope, $interval) => {
    $scope.fullName = "Marco Galindo";
    $scope.email = "marcodavidg@gmail.com";
    $scope.title = "Software Engineer & AI Specialist"
    $scope.phone = "+(502) 31586319"
    $scope.address = "Guatemala City, Guatemala"

    $scope.languages = [
        new Language("English",100),
        new Language("Spanish",100),
        new Language("Chinese",40),
    ];

    $scope.skills = [
        new Skill("Deep Learning", 
            "During my master's degree I've had first-hand experience modifying and implementing Pytorch models for image processing, generative models (GAN, Cycle-GAN), and state-of-the-art transformer (DETR models) and convolutional neural networks.", 
            "bi bi-robot"),
        new Skill("Object Detection", 
            "In my thesis, I focused on detecting objects in street images taken in challenging weather conditions. I used state-of-the-art DETR models and modified them to address the challenge of dealing with data from various weather conditions, ensuring the models perform well across different scenarios.", 
            "bi bi-eyeglasses"),
        new Skill("Full stack development", 
            "In my previous position as a full-stack developer, I was responsible for overseeing a web system that was built using Java for the backend, PrimeFaces for the user interface, and MySQL for the databases.", 
            "bi bi-database"),
        new Skill("Web services", 
            "I have created multiple RESTful web services, primarily using Python with Flask. These services were integrated with databases, AWS servers, and various APIs in other programming languages.", 
            "bi bi-wifi"),    
        new Skill("Model compression", 
            "I have implemented and tested various AI network compression methods, including pruning and quantization. Additionally, I have modified code to apply Knowledge Distillation techniques to models.", 
            "bi bi-file-earmark-zip"),    
        new Skill("Adaptability", 
            "Throughout my professional experience, as well as during my master's and bachelor's degrees, I have developed systems using a variety of languages, databases, and frameworks. While I may not be an expert in every technology at first, I believe in my ability to overcome challenges and adapt to new situations.", 
            "bi bi-person-arms-up"),    
    ];

    $scope.projects = [
        new Project("Domain-Adaptive Edge-Guided DETR","Pytorch, Object Detection", "01-2024", "daedetr.png", "https://github.com/marcodavidg/DAE-DETR"),
        new Project("ChatGPT-Coke-Museum-Chatbot","OpenAI, Python", "03-2024", "chatbot.png", "https://github.com/marcodavidg/ChatGPT-Coke-Museum-Chatbot"),
        new Project("Flask Server + AWS Lambda","AWS, Web server", "03-2024", "flaskServer.png", "https://github.com/marcodavidg/Flask-AWS-Lambda-Function"),
        new Project("ODK Ad-hoc Report Generator Tool","Java web, MySQL", "11-2022", "odktool.png", "https://www.youtube.com/watch?v=mJZH9FkutTg"),
        new Project("Data mining and ML models with Apache Spark","Apache Spark, Azure", "03-2024", "sagemaker.png", "https://github.com/marcodavidg/Sagemaker-SS-Demo"),
        new Project("AWS Sagemaker demo","Semantic segmentation, AWS", "03-2024", "spark.png", "https://github.com/marcodavidg/Spark-MLlib-Model"),
        new Project("MERN Stack Udemy Tutorial","MERN Stack", "06-2024", "MERN.jpg", "https://github.com/marcodavidg/MERN_Tutorial"),
        new Project("Task Tracker Dashboard","MERN Stack, PrimeReact", "07-2024", "TaskTracker.png", "https://github.com/marcodavidg/TaskTracker-Dashboard"),
    ];

});



app.controller("countController", ($scope, $interval) => {
    var endTime = new Date('2024-04-22T07:00:00+02:00').getTime();

    function updateCountdown() {
        var now = new Date().getTime();
        var timeRemaining = endTime - now;

        $scope.days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        $scope.hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        $scope.minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        $scope.seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    }

    // Update the countdown every second
    $interval(updateCountdown, 1000);

    // Initial call to update countdown
    updateCountdown();
});


