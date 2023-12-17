function HTML(tag, params, content) {
    let html_data = "";
    let isTagDefinedOrNull = (typeof tag == "undefined" || tag == "") ? true : false;

    html_data += (isTagDefinedOrNull) ? "" : `<${tag}`;

    if (typeof params != "undefined" && params != ""){
        Object.keys(params).forEach(key => {
            if (params[key] != "" ){
                html_data += ` ${key}=\"${params[key]}\"`;
            }
            else {
                html_data += ` ${key}`;
            }
        });
    }

    html_data += (isTagDefinedOrNull) ? "" : `>`;

    if (typeof content != "undefined" && content != ""){
        Array.from(content).forEach(element => {
            html_data += element;
        });
    }

    html_data += (isTagDefinedOrNull) ? "" : `</${tag}>`;

    return html_data;
}

function IsNumeric (value) {
    return /^\d+$/.test(value);
}