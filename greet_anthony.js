import chalk from 'chalk';
import figlet from 'figlet';
import greet from './greet.js';

figlet(greet("Anthony"), {
    font: "Ghost",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: "default",
    whitespaceBreak: "default"
}, (err , data) => {
    if(err) {
        console.log("something went wrong...");
        console.dir(err);
        return;
    }
    console.log(chalk.bgGrey.yellow(data));
});