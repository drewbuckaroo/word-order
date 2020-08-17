$(document).ready(function () {
    $("#formOne").submit(function() {
      event.preventDefault();
        const sentence = $("#sentence").val();
        const sentenceWords = sentence.split(' ');// food food
        let words = []; //   ['the', cat, dog, food] 
        let wordsCount = [];//[1,      2,   1,    2]
      sentenceWords.forEach(function(element) {
        if (words.includes(element)) {
          wordsCount[words.indexOf(element)] += 1;
        }
        else {
          let index = words.push(element) - 1;
          wordsCount[index] = 1;
        }

      });
      words.forEach(function (element) {
        $('#newSentence').append(element + ': '+ wordsCount[words.indexOf(element)] + "<br>");
      });
    });
   
    


});