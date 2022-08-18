// import { useState } from "react";
import React from "react";
import ReactDOM  from "react-dom/client";
// import Car from './Car';
// import './App.css';


// Not: React Memoya Hookslardan sonra bakılacak.







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
);


/* COMPONENT */

// farklı dosya oluşturup import ettik, şimdi bu dosyada import ettiğimiz componentimizi kullanabiliriz.
// import Car from './Components/Car';


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




/*
    REACT LISTS

    const Car = (props) => {
        return <li> {props.keys} I am a {props.brand} </li>;
    }

    const Garage = () => {
        const cars = [
            {id: 1, brand: 'Ford'},
            {id: 2, brand: 'BMW'},
            {id: 3, brand: 'Audi'}
        ];

        //Alttaki ul içinde bulunan {cars.map( (car) => { return <Car key={car.id} brand={car.brand} /> } )} kodu, süslü parantez kullanacaksak map içerisinde.
        //return yazmayı unutmamalıyız. Tek satırlarda süslü paranteze almaya gerek yok ve return yazmaya da gerek yok.
        return (
            <>
                <h1> Who lives in my garage </h1>
                <ul>
                    {cars.map( (car) => <Car keys={car.id} brand={car.brand} />  )}
                    {}
                </ul>
            </>
        )
        // map methodunu kullanırken, bu metodu uygulayacağımız dizinin: Genellikle anahtar, her öğeye atanmış benzersiz bir kimliği olmalıdır (burada verdiğimiz id ler gibi..). Son çare olarak dizi indexini anahtar olarak kullanabilirsiniz.
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <Garage />
    );

*/




/*
    I CREATED THIS LIST.

    const Member = (props) => {
        return <li> {props.ids}. Family Member : {props.firstNames} </li>
    };

    const Familys = () => {

        const familyMembers = [
            {id: 1, firstName: 'Elif'},
            {id: 2, firstName: 'Serdar'},
            {id: 3, firstName: 'Mehmet'},
            {id: 4, firstName: 'Nazlı'},
            {id: 5, firstName: 'Emirhan'},
            {id: 6, firstName: 'Helin'},
            {id: 7, firstName: 'Ezgi'},
            {id: 8, firstName: 'Ayaz'}
        ];

        return (
            <div>
                <h1> FAMILY MEMBERS :</h1>
                {familyMembers.map( (members) => {return <Member ids={members.id} firstNames={members.firstName} />}  )}
            </div>
        )

    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <Familys />
    );

*/




/*
    GROCERY LIST UYGULAMA

    const GroceryList = () => {
        const items = [
            {id: 1, itemsName: 'bread'},
            {id: 2, itemsName: 'milk'},
            {id: 3, itemsName: 'eggs'}
        ];

        return (
            <>
                <h1>Grocery List</h1>
                <ul>
                    {items.map( (item) => {
                        return <li idMiz={item.id}> {item.id} {item.itemsName} </li>
                    } )}
                </ul>
            </>
        )

    };


    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <GroceryList />
    );

*/




/*
    REACT FORMS

    // Form işlemlerinde useState Hookunu aktif etmemiz gerekir.
    // import { useState } from 'react';

    const MyForm = () => {

        const [name, setName] = useState("");

        const handleSubmit = (event) => {
            event.preventDefault();
            alert(`The name you entered was: ${name}`);
        };

        return (
            <form onSubmit={handleSubmit}>
                <label>Enter your name:
                    <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <input type="submit" />
            </form>
        )
    }


    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <MyForm />
    );

*/




/*
    Multiple Input Fields - Çoklu Giriş Alanları
    
    const MyForm = () => {
        const [inputs, setInputs] = useState({});

        const handleChange = (event) => {
            const name = event.target.name;
            const value = event.target.value;
            setInputs(values => ({...values, [name]: value}))
        };

        const handleSubmit = (event) => {
            event.preventDefault();
            console.log(inputs);
        };

        return (
            <form onSubmit={handleSubmit}>
                <label>Enter your name:
                    <input
                        type="text"
                        name="username"
                        value={inputs.username || ""}
                        onChange={handleChange}
                    />
                </label>
                <label>Enter your age:
                    <input
                        type="number"
                        name="age"
                        value={inputs.age || ""}
                        onChange={handleChange}
                    />
                </label>
                <label>Sorunuzu girin:
                    <input
                        type="text"
                        name="sorum"
                        value={inputs.sorum || ""}
                        onChange={handleChange}
                    />
                    
                </label>
                <input type="submit" />
            </form>
        )

    };

*/




/*
    // TEXTAREA (<textarea />)

    const MyForm = () => {

        const[textArea, setTextArea] = useState(
            "The content of a textarea goes in the value attribute"
        )

        const handleChange = (e) => {
            setTextArea(e.target.value);
        }

        return (
            <form>
                <textarea value={textArea} onChange={handleChange} />
            </form>
        )

    }

*/




/*
    // SELECT

    const MyForm = () => {

        const [myCar, setMyCar] = useState("Volvo");

        const handleChange = (e) => {
            setMyCar(e.target.value);
        }

        return (
            <form>
                <select value={myCar} onChange={handleChange}>
                    <option value="Ford">Ford</option>
                    <option value="Volvo">Volvo</option>
                    <option value="Fiat">Fiat</option>
                </select>
            </form>
        )

    }

*/




/*
    // REACT ROUTER

    // Create React App, sayfa yönlendirmeyi içermez. React Router en popüler çözümdür.

    // Uygulamamıza React Router eklemek için, uygulamamızın kök dizininden terminalde bunu çalıştırmalıyız:
    // npm i -D react-router-dom

    // Klasör Yapısı src/pages/:
    // Layout.js
    // Home.js
    // Blogs.js
    // Contact.js
    // NoPage.js


    // index.js

    import ReactDOM from 'react-dom/client';
    import { BrowserRouter, Routes, Route } from 'react-router-dom';
    import Layout from './pages/Layout';
    import Home from './pages/Home';
    import Blogs from './pages/Blogs';
    import Contact from './pages/Contact';
    import NoPage from './pages/NoPage';

    export default function App() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path='blogs' element={<Blogs />} />
                        <Route path='contact' element={<Contact />} />
                        <Route path='*' element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        )
    }


    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <App />
    );
*/




/*
    // REACT CSS

    // React'i CSS ile stillendirmenin birçok yolu vardır, burada üç yaygın yolu daha yakından inceliyor olacağız.

    1- Inline styling
    2- CSS stylesheets
    3- CSS Modules
*/


/*
    // 1 - INLINE STYLING

    const Header = () => {
        return (
            <>
                <h1 style={{color: "red", fontSize: "32px", fontWeight: "100"}}>Mehmet Aydar</h1>
                <p style={{color:"blue", fontSize: "50px"}}>Add a little style </p>
            </>
        )
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <Header />
    );

*/



/*
    // Inline styling

    // Ayrıca stil bilgilerine sahip bir nesne oluşturabilir ve ona stil özelliğinde başvurabiliriz.

    const MyHeader = () => {
        const myStyle = {
            color: "blue",
            backgroundColor: "yellow",
            width: "80%",
            fontSize: "30px",
            padding: "20px",
            fontFamily: "Sans-Serif"
        };

        return (
            <>
                <p style={myStyle}>Hello Style!</p>
            </>
        )

    };

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <MyHeader />
    );

*/



/*
    // 2 - CSS STYLESHEET

    // Not: Dosyayı istediğimiz gibi arayabiliriz, sadece doğru dosya uzantısını unutmamamız gerek.

    // CSS stilimizi ayrı bir dosyaya yazabiliriz, dosyayı .css dosya uzantısıyla kaydedip uygulamamıza aktarabiliriz.

    // import './App.css';

    const BodyStyle = () => {
    return (
        <>
            <h1>Hello QXyGeN!</h1>
            <p>Add a little style!.</p>
        </>
    )
} 

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <BodyStyle />
    );

*/



/*
    // 3 - CSS MODULES

    import Car from './Car';

    // .module uzantısı olmadan CSS Modules'ları kullanamayız. Örneğin; style.module.css vb. gibi olmalı.

    // CSS Modülleri, ayrı dosyalara yerleştirilen COMPONENTLAR için uygundur.

    // Bir modülün içindeki CSS, yalnızca onu içe aktaran COMPONENT için kullanılabilir ve ad çakışmaları konusunda endişelenmemize gerek yoktur.

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <Car />
    );

*/


