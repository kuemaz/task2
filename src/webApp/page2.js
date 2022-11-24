import {React,useState, useEffect} from 'react'
//import { Link } from 'react-router-dom'
//import Nav from "./Nav"
import "./page2.css"

const Page2 = props => {
    const [box1, setbox1] = useState(() => {
        return JSON.parse(localStorage.getItem('box1page2')) || []
      });
    const [box2, setbox2] = useState(() => {
        return JSON.parse(localStorage.getItem('box2page2')) || []
      });
    const [box3, setbox3] = useState(() => {
        return JSON.parse(localStorage.getItem('box3page2')) || []
      });
    const [box4, setbox4] = useState(() => {
        return JSON.parse(localStorage.getItem('box4page2')) || []
      });
    useEffect(() => {
    window.localStorage.setItem('box1page2', JSON.stringify(box1));
    }, [box1]);   //this code meant to store data on local storage 
    useEffect(() => {
        window.localStorage.setItem('box2page2', JSON.stringify(box2));
    }, [box2]);
    useEffect(() => {
        window.localStorage.setItem('box3page2', JSON.stringify(box3));
    }, [box3]);
    useEffect(() => {
        window.localStorage.setItem('box4page2', JSON.stringify(box4));
    }, [box4]);
    const handleClickBox1 = event => {
        //console.log('div clicked');
        if(box1==="pinned"){
            //console.log("******");
            setbox1("unpinned");
        }else{
            setbox1("pinned");//this means we are pining the value
        }
    };
    const handleClickBox2 = event => {
        //console.log('div clicked');
        if(box2==="pinned"){
            //console.log("******");
            setbox2("unpinned");
        }else{
            setbox2("pinned");//this means we are pining the value
        }
    };
    const handleClickBox3 = event => {
        //console.log('div clicked');
        if(box3==="pinned"){
            //console.log("******");
            setbox3("unpinned");
        }else{
            setbox3("pinned");//this means we are pining the value
        }
    };
    const handleClickBox4 = event => {
        //console.log('div clicked');
        if(box4==="pinned"){
            //console.log("******");
            setbox4("unpinned");
        }else{
            setbox4("pinned");//this means we are pining the value
        }
    };
    return (
       
        <div className="App">
           <h1>Welcome to Page 2</h1>
           <div className='boxes'>
                <div className='box1A' onClick={handleClickBox1}>
                    <h3>Item 1</h3>{/*
                        ({box1}==="pinned")?<SlPin />
                        :<p>unpinned</p>
                    */}
                    {box1}
                    
                </div>
                <div className='box2A' onClick={handleClickBox2}>
                    <h3>Item 2</h3>{/*
                        ({box1}==="pinned")?<SlPin />
                        :<p>unpinned</p>
                    */}
                    {box2}
                    
                </div>
                <div className='box3A' onClick={handleClickBox3}>
                    <h3>Item 3</h3>{/*
                        ({box1}==="pinned")?<SlPin />
                        :<p>unpinned</p>
                    */}
                    {box3}
                    
                </div>
                <div className='box4A' onClick={handleClickBox4}>
                    <h3>Item 4</h3>{/*
                        ({box1}==="pinned")?<SlPin />
                        :<p>unpinned</p>
                    */}
                    {box4}
                    
                </div>
            </div>
        </div>
    
    )
}

Page2.propTypes = {}

export default Page2