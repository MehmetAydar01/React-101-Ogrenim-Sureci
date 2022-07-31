import React from 'react';
import ReactDOM from 'react-dom/client';

// farklı dosya oluşturup import ettik, şimdi bu dosyada import ettiğimiz componentimizi kullanabiliriz.
import Car from './Components/Car';




/* COMPONENT */


/* class Car extends React.Component {
    render() {
        return <h2> Hi, I am a Car! </h2>; // Class Component
    }
} */


/*
    function Car(props) { // Props yapısı
        return <h2> Hi, I am a Car!! My car's color is {props.color} </h2>; // Function Component
    }

    function Garage() {
        // <> </> yerine <div> </div> de kullanabiliriz.Eğer return içerisine başka elemanlar da yazacaksak en az bir kapsayıcı kullanmak şart. Parent eleman olacak yani.

        return (
            <> 
                <h1>Who lives in my Garage</h1>
                <Car color="Green"/> // Color is a Props attribute.
            </>
        )

    }

    çalışması için :
    root.render(
        <Garage /> 
    );
    kullanmamız gerek.
*/



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Car />
);


