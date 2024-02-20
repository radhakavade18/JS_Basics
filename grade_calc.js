// student score, total possible score
// 15/20 => You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

const gradeCalc = function(s_Score, total_Score){
    let score = (s_Score / total_Score) * 100;
    if(score >= 90 && score <= 100){
        console.log(`You got a A (${score}%)`);
    } else if(score >= 80 && score <= 89){
        console.log(`You got a B (${score}%)`);
    } else if(score >= 70 && score <= 79){
        console.log(`You got a C (${score}%)`);
    } else if(score >= 60 && score <= 69){
        console.log(`You got a D (${score}%)`);
    } else{
        console.log(`You got a F (${score}%)`);
    }
}

gradeCalc(19, 20);