arr = []

function generateString(topic, date, description, index) {
    str = "<div> <button class='btn btn-outline-info' style='margin:2px;' onclick='delete_todo(" + index + ")'> \
    <table style='width: 300px;margin:5px'> \
        <tr> \
            <td > <h5 class='mb-1'>" + topic + "</h5> </td> \
            <td> \
            </td> \
            <td style='text-align:right;'> \
                <i>" + date + "</i> \
            </td> \
        </tr> \
        <tr> \
            <td colspan='2'>" + description + "</td> \
        </tr> \
    </table> \
 </button></div>"
    return str;
}



function delete_todo(index) {
    ele = arr.pop(index);
    x = document.getElementById('list')
    x.removeChild(ele);
    //console.log(arr);
}



function add_memo() {
    date = document.getElementById('date').value;
    topic = document.getElementById('topic').value;
    description = document.getElementById('description').value;
    //  console.log(date,topic,description);
    x = document.getElementById('list')
    li = document.createElement('li');

    if (date == '' || topic == '' || description == '') {
        alert('Fields can\'t be empty');
        return
    }

    li.appendChild(stringToHTML(generateString(topic, date, description, arr.length)));
    arr.push(li);
    x.appendChild(li);
    //console.log(arr);
    //   document.getElementById('date').value='';
    //   document.getElementById('topic').value='';
    //   document.getElementById('description').value='';
}



var stringToHTML = function (str) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, 'text/html');
    return doc.body;
};


