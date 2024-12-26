function gradeShow(){
    let score = Number(prompt("Sınav notunuzu giriniz."));

    if(score){
        let grades = JSON.parse(localStorage.getItem("grades")) || [];
        grades.push({score});
        localStorage.setItem("grades",JSON.stringify(grades));
    }

    let grades = JSON.parse(localStorage.getItem("grades")) || [];

    if(grades.length > 0) {
        let msg = grades.map(grade => `Notunuz: ${grade.score}`).join("\n");
        alert(msg);
    }
}

gradeShow()
