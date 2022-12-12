const userChoice = confirm(`Tell me three most important words 💚`);

if (userChoice) {
    const wordCount = 3;
    let finalString = ``;

    for (let i = 1; i <= wordCount; i++) {

        let word,
            wordHaNumber = false;

        do {
            word = prompt(`Enter word #${i}`, `wor3ld`);

            if (word) {
                word = word.trim();

                for (let j = 0; j < word.length; j++) {
                    let currentLatter = word[j];

                    if (!isNaN(+currentLatter)) {
                        wordHaNumber = true;
                        break;
                    }
                }
            }
        } while (!word || wordHaNumber);

        console.log(word);

        let formatter;
        do {
            formatter = prompt(`Choose formating style: uppercase || lowescase|| capitalize`, `capitalize`);

            if (formatter) formatter = formatter.replaceAll(` `, ``).toLowerCase();

        } while (!formatter || (formatter !== `uppercase` && formatter !== `lowescase` && formatter !== `capitalize`));

        console.log(formatter);

        switch (formatter) {
            case `uppercase`:
                word = word.toUpperCase();
                break;
            case `lowercase`:
                word = word.toLowerCase();
                break;
            case `capitalize`:
                word = word[0].toUpperCase() + word.slice(1).toLowerCase();
                break;
        }

        console.log(word);
        console.log(`----`);

        finalString += word;
        finalString += i===wordCount ? `!` : ` `;
    }

    console.log(finalString);
}