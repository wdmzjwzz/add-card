#!/usr/bin/env node

const path = require('path')
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const fs = require('fs-extra');
const argv = yargs(hideBin(process.argv)).parse();

// 设置卡片id start
{
    const cardIdPath = path.resolve(__dirname, '../test/test.ts');

    const file = fs.readFileSync(cardIdPath, { encoding: "utf-8" });
    const updatedCode = addEnumField(file, argv.id);
    fs.writeFileSync(cardIdPath, updatedCode)
    function addEnumField(code, newField) {
        const enumRegex = /(enum\s+CardId\s*\{\s*)([^\}]+)(\s*\})$/ms;
        const match = code.match(enumRegex);

        if (match) {
            const updatedEnum = `${match[1]}${match[2]}    ${newField}='${newField}',\r\n${match[3]}`;
            return code.replace(enumRegex, updatedEnum);
        }
        return code;
    }
}
// 设置卡片id end

// 注册卡片 start
{
    const registCardPath = path.resolve(__dirname, '../test/test.ts');
    const file = fs.readFileSync(registCardPath, { encoding: "utf-8" });
    const data = `{
        rows:${argv.rows},
        cols:${argv.cols},
    }`
    const updatedCode = addCardData(file, data);
    // fs.writeFileSync(cardIdPath, updatedCode)
    function addCardData(code, newField) {
        const enumRegex =/addCard\(\[({.*?}),({.*?})\]\)/;
        const match = code.match(enumRegex);
        console.log(match);
        // if (match) {
        //     const updatedEnum = JSON.parse(match)
        //     console.log(updatedEnum);
        //     return code.replace(enumRegex, updatedEnum);
        // }
        // return code;
    }
}