// const h1 = document.createElement("h1")
// h1.textContent = "Hello world"
// h1.className = "header"
// console.log(h1)

// // <h1 class="header">   output

// const element = <h1 className="header">This is JSX</h1>
// console.log(element)

/*
{
    type: "h1", 
    key: null, 
    ref: null, 
    props: {className: "header", children: "This is JSX"}, 
    _owner: null, 
    _store: {}
}
 */

// JSX

    // ReactDOM.render(
    //     <div>
    //         <h1 className="header">This is JSX</h1>
    //         <p>This is a paragraph</p>
    //     </div>,
    //     document.getElementById("root")
    // )

    const page = <div>
        <h1 className="header">This is JSX</h1>
        <p>This is a paragraph</p>
    </div>
ReactDOM.render(
    page,
    document.getElementById("root")
)