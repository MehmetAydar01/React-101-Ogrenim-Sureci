import React from 'react';
import ReactDOM from 'react-dom/client';

// farklı dosya oluşturup import ettik, şimdi bu dosyada import ettiğimiz componentimizi kullanabiliriz.
import Car from './Components/Car';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Car name="Ford"/>
);




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




/* PROPS */

/*
    const myElement = <Car brand="Ford" />; bir componenti değişkene aktarıp, props özelliği verebiliyoruz. myElement render edilmeli.

    function Car(props) {
        return <h2> I am a {props.brand}! </h2>;
    }

*/

/*
    function Car(props) {
        return <h2> I am a {props.brand.name + " " + props.brand.model}! </h2>;
    }

    function Garage() {
        const carInfo = {
            name: "Ford",
            model: "Mustang"
        }
        return (
            <>
                <h1>Who lives in my garage</h1>
                <Car brand = {carInfo} />
            </>
        )
    }

    bu fonk. comp. çalışması için render etmemiz gerek <Garage />.
*/




/* Events */

/*
    const Football = () => {
        const shoot = (a, b) => {
            alert(b.type + " " + a);
        }

        return(
            <button onClick={ (e) => shoot("Goal", e) }>Take the shot!</button>
        );
    }
*/




/*
    REACT CONDITIONAL RENDERING

    const MissedGoal = () => {
        return <h1>MISSED!</h1>;
    }


    const MadeGoal = () => {
        return <h1>GOAL!</h1>
    }


    const Goal = (props) => {

        const isGoal = props.isGoal;

        if (isGoal) {
            return <MadeGoal />
        }

        return <MissedGoal />

    }


    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <Goal isGoal={true} />
    );

*/




/*
    LOGICAL && OPERATOR

    const Garage = (props) => {

        const cars = props.cars

        return (
            <>
                <h1>Garage</h1>
                {
                    cars.length > 0 &&
                    <h2>You have {cars.length} cars in your garage.</h2>
                }
            </>
        )

    }

    const cars = ["Ford", "BMW", "Audi"];


    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <Garage cars = {cars} />
    );

*/




/*
    TERNARY OPERATOR

    const MadeGoal = () => {
        return <h1>GOAL!</h1>
    }

    const MissedGoal = () => {
        return <h1>MISSED!</h1>
    }

    const Goal = (props) => {
        const isGoal = props.isGoal;
        return (
            <>
                { isGoal ? <MadeGoal /> : <MissedGoal />  }
            </>
        )
    }


    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <Goal isGoal={false} />
    );

*/

