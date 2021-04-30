class RandomBoy {
    getInfo() {
        return {
            "id": "RandomBoy",
            "name": "RandomBoy",
            "blocks": [{
                    "opcode": "substringy",
                    "blockType": "reporter",
                    "text": "yeet the number [num1] and [num2] and then number [num3] spellllllll [string]",
                    "arguments": {
                        "num1": {
                            "type": "number",
                            "defaultValue": "1"
                        },
                        "num2": {
                            "type": "number",
                            "defaultValue": "5"
                        },
                        "num2": {
                            "type": "number",
                            "defaultValue": "5"
                        }    
                        "string": {
                            "type": "string",
                            "defaultValue": "yeet soop"
                        }
                    }
                },
            }],
        "menus": {
        }
    };
    substringy({num1, num2, num3 string}) {
        return string.substring(num1 - 1, num2);
    };
}