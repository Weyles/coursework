import { Component } from "react";

export default class Todos extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         inputValue: "",
         todos: [
             {
                id: 1,
                value: "todo 1",
                isDone: false,
             },
             {
                id: 2,
                value: "todo 2",
                isDone: true,
             },
             {
                id: 3,
                value: "todo 3",
                isDone: false,
             },
         ]
      }
    }

    render() {
        return(
            <div>

            </div>
        );
    }
}