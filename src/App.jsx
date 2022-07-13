import React from "react";
import Heading from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import notes from "./notes";

function App() {
    return (
        <div>
            <Heading/>
            {notes.map((noteItem)=>
            <Note
            key={noteItem.id}
            title={noteItem.title}
            content={noteItem.content}
             />
            )}
            <Footer />
        </div>

    );
}

export default App;