import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Animasi from './animasi.js';


class Crud extends Component {
  constructor (prop){
    super(prop);
    this.state={
      title:"ujicoba cerud",
      act:0,
      index:'',
      datas:[] //untuk data nnti
      // state and props 
    }
  }
  componentDidM(){
    this.refs.name();
    }
  fSubmit = (e)=>{
    e.preventDefault();
    console.log('aa');

    let datas = this.state.datas;
    let name = this.refs.name.value;
    let address = this.refs.address.value;

    if(this.state.act === 0){ //baru

      let data ={
        name,address
    }
      datas.push(data);
    }else{ //sintak update //13.08

      let index = this.state.index;
      datas[index].name = name;
      datas[index].address = address;

    }

    // datas.push(data);

    this.setState({
      datas: datas,
      act:0
    });
    this.refs.myForm.reset();
    this.refs.name.focus();
  
  } 
  //sintax reset
  fRemove = (i) =>{
    let datas = this.state.datas;
    datas.splice(i,1);
    this.setState({
      datas: datas
    });
    this.refs.myForm.reset();
    this.refs.name.focus();
  }
  //sintax edit
  fEdit = (i)=> {
    let data = this.state.datas[i]; 
    console.log(this.refs.name);
    this.refs.name.value = data.name;
    this.refs.address.value = data.address;
    
   
    this.setState({
      act: 2,
      index: i
    });
  }
  // 09.05  
  render() {  
   let datas = this.state.datas; //inisialisasi data
    return (
      <div className="Apps">
        <h2>{this.state.title}</h2>
        <form ref="myForm" className="myForm">
          <input type="text" ref="name" placeholder="nama   " className="formField" />
          <input type="text" ref="address" placeholder= "alamat" className="formField" />
          <button onClick={this.fSubmit} className="myButton">Simpan</button>
        </form> 
        <pre>
            {datas.map((data, i) =>
              <li key={i} className="listku">
                {i+1}.{data.name},{data.address}
                 <button onClick={() => this.fRemove(i)} className="myListButton">Hapus</button>
                  <button onClick={() => this.fEdit(i)} className="myListButton">Edit</button>
               </li>
            
            )}
        </pre>
       
      </div>
    );
  }
}

export default Crud;