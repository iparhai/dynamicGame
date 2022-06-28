import React from 'react';

function Dragdrop(){
    return(
        <div style={{width:'60vw',display:'flex',justifyContent:'center',margin:'5vh auto 2vh'}}>
                <div style={{width:'30%'}}>
                    <div style={{
                        width: '100%',
                        height: '100px',
                        borderBottom: '1px solid white',
                        display : 'flex',
                        justifyContent : 'center'
                    }} ref={dropRef1}>
                        {
                        fracNum1.map((obj, idx) => {

                                return (
                                    <Items
                                        key = {idx}
                                        number={obj.number}
                                        type={obj.type}
                                        close = {dropfracNum1(idx)}
                                    />
                                );
                            })
                        }
                        {
                        isOver1 || 
                        <button style={{ width: '100%',textAlign:'center', fontSize: '45px', color: 'white', border: 'none', borderRadius: "1em", backgroundColor : 'rgba(0,255,0,0.2)',margin:'5px'}}>
                            <i className="fab fa-dropbox"></i>
                        </button>
                        }
                    </div>
                    <div style={{
                        width: '100%',
                        height: '100px',
                        borderTop: '1px solid white',
                        display : 'flex'
                    }} ref={dropRef2}>
                        {
                        fracDen1.map((obj, idx) => {

                                return (
                                    <Items
                                        key = {idx}
                                        number={obj.number}
                                        type={obj.type}
                                        close = {dropfracDen1(idx)}
                                    />
                                );
                            })
                        }
                        {
                        isOver2 || 
                        <button style={{ width: '100%',textAlign:'center', fontSize: '45px', color: 'white', border: 'none', borderRadius: "1em", backgroundColor : 'rgba(0,255,0,0.2)',margin:'5px'}}>
                            <i className="fab fa-dropbox"></i>
                        </button>
                        }
                    </div>
                </div>
                <div style={{width:'10%',textAlign:'center',fontSize:'30px'}}><h1>-</h1></div>
                <div style={{width:'30%'}}>
                    <div style={{
                        width: '100%',
                        height: '100px',
                        borderBottom: '1px solid white',
                        display: 'flex'
                    }} ref={dropRef3}>
                        {
                        fracNum2.map((obj, idx) => {

                                return (
                                    <Items
                                        key = {idx}
                                        number={obj.number}
                                        type={obj.type}
                                        close = {dropfracNum2(idx)}
                                    />
                                );
                            })
                        }
                        {
                        isOver3 || 
                        <button style={{ width: '100%',textAlign:'center', fontSize: '45px', color: 'white', border: 'none', borderRadius: "1em", backgroundColor : 'rgba(0,255,0,0.2)',margin:'5px'}}>
                            <i className="fab fa-dropbox"></i>
                        </button>
                        }
                    </div>
                    <div style={{
                        width: '100%',
                        height: '100px',
                        borderTop: '1px solid white',
                        display: 'flex'
                    }} ref={dropRef4}>
                        {
                        fracDen2.map((obj, idx) => {

                                return (
                                    <Items
                                        key = {idx}
                                        number={obj.number}
                                        type={obj.type}
                                        close={dropfracDen2(idx)}
                                    />
                                );
                            })
                        }
                        {
                        isOver1 || 
                        <button style={{ width: '100%',textAlign:'center', fontSize: '45px', color: 'white', border: 'none', borderRadius: "1em", backgroundColor : 'rgba(0,255,0,0.2)',margin:'5px'}}>
                            <i className="fab fa-dropbox"></i>
                        </button>
                        }
                    </div>
                </div>
                <div style={{width:'10%',textAlign:'center',fontSize:'30px'}}>
                    <h1>
                        =
                    </h1>
                </div>
                <div style={{width:'20%'}}>
                    <div style={{width:'100%',height:'100px',borderBottom:'1px solid white'}}>
                        <button style={{ width: '100%', textAlign: 'center', fontSize: '45px', color: 'white', border: 'none', borderRadius: "1em", backgroundColor: 'rgba(0,255,0,0.2)', marginTop: '40px' }}>
                            {subtactofDen}
                        </button>
                    </div>
                    <div style={{width:'100%',height:'100px',borderTop:'1px solid white'}}>
                        <button style={{ width: '100%', textAlign: 'center', fontSize: '45px', color: 'white', border: 'none', borderRadius: "1em", backgroundColor: 'rgba(0,255,0,0.2)', marginTop: '5px'}}>
                            {subtactofDen}
                        </button>
                    </div>
                </div>
            </div>
    );
}

export default Dragdrop;