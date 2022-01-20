display=''
prev=''
function clicked(data,ele)
{
    if(data=='=')
    {
        if(display=='')
        {
            result(0)
            return
        }
        try {
            temp=eval(display)
            
        } catch (error) {
            result('Error');
            display=''
            temp=''
            return
        }
       
        console.log(temp);
        result(temp)
        prev=display
        display=temp
    }
    else
    {
    display+=data;
    console.log(display);
    result(display);
    }
}

function result(x)
{
    d=document.getElementById('display');
    d.value=x
}

function check()
{
    result(prev)
}

function flush()
{
    console.log('cledfgar')
    result('')
    display=''
    prev=''
}

