const texts = {
    sansItalics: [...'𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡']
}
function processor(string) {
    let italics = string.match(/<i>(.*?)<\/i>/g);
    let bold = string.match(/<b>(.*?)<\/b>/g);
    if (!italics && !bold) return string;
    if (italics) {
        for (let index = 0; index < italics.length; index++) {
            let cleaned;
            cleaned = italics[index].replace('<i>', '');
            cleaned = cleaned.replace('</i>', '');
            let arr  = [...cleaned]

            let char = []

            for (let i = 0; i < arr.length; i++) {

            }

            string = string.replace(italics[index], cleaned)
        }
    }
    if (bold) {
        for (let index = 0; index < bold.length; index++) {
            let cleaned;
            cleaned = bold[index].replace('<b>', '');
            cleaned = cleaned.replace('</b>', '');

            string = string.replace(bold[index], cleaned)
        }
    }
    console.log(string)
}
console.log('hi'.bold())
//processor('<b>hello</b> world <i> Yes </i>')