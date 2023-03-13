fetch("data.json").then(response => response.json()).then(data => dataToHTML(data));

function dataToHTML(data)
{
    console.log("cool");
    if("vanilla" == title && text)
    {
        let description = data[productId];
        console.log(description)
    }

    else if ("brownie" == title)
    {
        let description = data[productId];
        console.log(description)
    }

    else if ("neapolitan" == title)
    {
        let description = data[productId];
        console.log(description)
    }

    else
    {
        let description = data[productId];
        console.log(description)
    }
    
}

