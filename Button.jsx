import React, {useState} from 'react'

function Button(){

    const [kom, setKom] = useState('');
    const [name, setName] = useState('guest');
    const[stan, setStan] = useState(false);


    const addName = () =>{
        const imie = document.getElementById('imie').value;
        setName(imie);
        setStan(true);
    }
    
    const addComment = () =>{
        const komentarz = document.getElementById('komentarze').value;
        setKom(kom + name + ': ' + komentarz + '\n');

    }


    return(
        <div>
            <input placeholder="write your nickname" id="imie" readOnly = {stan}></input>
            <button onClick={addName}>submit</button>
            <textarea placeholder='KOMENTARZE' readOnly value={kom} style={{ width: '100%', height: '500px' }} rows={kom.split('\n').length} />
            <input id="komentarze" placeholder='send a comment'></input>
            <button onClick={addComment}>send</button>
        </div>
    )
}
export default Button