import {React,useState, useEffect} from 'react'
//import { Link } from 'react-router-dom'
import "./pages.css"
import "./page2.css"

const Dashboard = props => {
  //-------------------------------- code from line 8 to line31 we fetching the information from the local storage and we defined the keyvalue pairs in the page2.js and Page1.js
    const [box1Page1, setbox1] = useState(() => {
        return JSON.parse(localStorage.getItem('box1page1')) || []
      });
    const [box2Page1, setbox2] = useState(() => {
        return JSON.parse(localStorage.getItem('box2page1')) || []
      });
    const [box3Page1, setbox3] = useState(() => {
        return JSON.parse(localStorage.getItem('box3page1')) || []
      });
    const [box4Page1, setbox4] = useState(() => {
        return JSON.parse(localStorage.getItem('box4page1')) || []
      });
      const [box1Page2, setbox1P2] = useState(() => {
        return JSON.parse(localStorage.getItem('box1page2')) || []
      });
    const [box2Page2, setbox2P2] = useState(() => {
        return JSON.parse(localStorage.getItem('box2page2')) || []
      });
    const [box3Page2, setbox3P2] = useState(() => {
        return JSON.parse(localStorage.getItem('box3page2')) || []
      });
    const [box4Page2, setbox4P2] = useState(() => {
        return JSON.parse(localStorage.getItem('box4page2')) || []
      });
    console.log(JSON.stringify(localStorage));
    useEffect(() => {
        window.localStorage.setItem('box1page1', JSON.stringify(box1Page1));
    }, [box1Page1]);   //this code meant to store data on local storage 
    useEffect(() => {
        window.localStorage.setItem('box2page1', JSON.stringify(box2Page1));
    }, [box2Page1]);   //this code meant to store data on local storage 
    useEffect(() => {
        window.localStorage.setItem('box3page1', JSON.stringify(box3Page1));
    }, [box3Page1]);   //this code meant to store data on local storage 
    useEffect(() => {
        window.localStorage.setItem('box4page1', JSON.stringify(box4Page1));
    }, [box4Page1]);   //this code meant to store data on local storage 
    useEffect(() => {
        window.localStorage.setItem('box1page2', JSON.stringify(box1Page2));
    }, [box1Page2]);   //this code meant to store data on local storage 
    useEffect(() => {
        window.localStorage.setItem('box2page2', JSON.stringify(box2Page2));
    }, [box2Page2]);   //this code meant to store data on local storage 
    useEffect(() => {
        window.localStorage.setItem('box3page2', JSON.stringify(box3Page2));
    }, [box3Page2]);   //this code meant to store data on local storage 
    useEffect(() => {
        window.localStorage.setItem('box4page2', JSON.stringify(box4Page2));
    }, [box4Page2]);   //this code meant to store data on local storage 
        
    const handleClickBox1 = event => {
        console.log('div clicked');
        // eslint-disable-next-line react-hooks/rules-of-hooks
        setbox1("unpinned")  
    };//when user clicks the box it is set to unpinned an then it is removed
    const handleClickBox2 = event => {
        console.log('div clicked');
        // eslint-disable-next-line react-hooks/rules-of-hooks
        setbox2("unpinned")  
    };
    const handleClickBox3 = event => {
        console.log('div clicked');
        // eslint-disable-next-line react-hooks/rules-of-hooks
        setbox3("unpinned")  
    };
    const handleClickBox4 = event => {
        console.log('div clicked');
        // eslint-disable-next-line react-hooks/rules-of-hooks
        setbox4("unpinned")  
    };
    const handleClickBox1A = event => {
        console.log('div clicked');
        // eslint-disable-next-line react-hooks/rules-of-hooks
        setbox1P2("unpinned")  
    };
    const handleClickBox2A = event => {
        console.log('div clicked');
        // eslint-disable-next-line react-hooks/rules-of-hooks
        setbox2P2("unpinned")  
    };
    const handleClickBox3A = event => {
        console.log('div clicked');
        // eslint-disable-next-line react-hooks/rules-of-hooks
        setbox3P2("unpinned")  
    };
    const handleClickBox4A = event => {
        console.log('div clicked');
        // eslint-disable-next-line react-hooks/rules-of-hooks
        setbox4P2("unpinned")  
    };
    
    
    return (
        <><div className="App">
            <h1>Welcome to dashboard</h1>
        </div>
        <div className='boxes'>
        {/* making use of tenerary operation to display boxes when 
        the local storage is set to pin otherwise it won't display */}
               {(box1Page1==="pinned") ? <div className='box1' onClick={handleClickBox1}>
                <h3>Item 1</h3><p>Page 1</p></div> : <div></div>}
                {(box2Page1==="pinned") ? <div className='box2' onClick={handleClickBox2}>
                <h3>Item 2</h3><p>Page 1</p></div> : <div></div>}

                {(box3Page1==="pinned") ? <div className='box3' onClick={handleClickBox3}>
                <h3>Item 3</h3><p>Page 1</p></div> : <div></div>}

                {(box4Page1==="pinned") ? <div className='box4' onClick={handleClickBox4}>
                <h3>Item 4</h3><p>Page 1</p></div> : <div></div>}

                {(box1Page2==="pinned") ? <div className='box1A' onClick={handleClickBox1A}>
                <h3>Item 1</h3><p>Page 2</p></div> : <div></div>}

                {(box2Page2==="pinned") ? <div className='box2A' onClick={handleClickBox2A}>
                <h3>Item 2</h3><p>Page 2</p></div> : <div></div>}

                {(box3Page2==="pinned") ? <div className='box3A' onClick={handleClickBox3A}>
                <h3>Item 3</h3><p>Page 2</p></div> : <div></div>}

                {(box4Page2==="pinned") ? <div className='box4A' onClick={handleClickBox4A}>
                <h3>Item 4</h3><p>Page 2</p></div> : <div></div>}

        </div>
        </>
        
    )
}

Dashboard.propTypes = {}

export default Dashboard