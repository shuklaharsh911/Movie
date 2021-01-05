import React, {Component} from 'react';

 class Series extends Component{
     constructor(props){
       super(props);
       this.state = {
         items: this.props.items
       }
     }
     render() {
       const {items} = this.state;
       const Movies = items.map(item => (
        (item.Type=='series')?<div><img src={`${item.Poster}`} width="20%" height="20%" />{item.Title}</div>:<div />
       )
       )
       return(<div className="row">{Movies}</div>);

   }
 }
 export default Series;
