import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { Context } from '../../context/Context'

const Main = () => {

    const{onSent,recentPrompts,showResult,loading,resultData,setInput,input} = useContext(Context);

  return (
    <div>
        <div className='main'>
            <div className="nav">
                <p>Chat-gpt</p>
            </div>
            <div className="main-center-container">

                {!showResult
                ?<>
                    <div className="greet">
                    <p><span>Hello, User</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>What's the latest in tech and innovation?</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Where's your dream travel destination?</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Looking for a captivating read? Any favorite books?</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>How will Devin affect the future of coding</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>
                </>
                : <div className="result">
                     <div className="result-title">
                        <p>{recentPrompts}</p>
                     </div>
                     <div className="result-data">
                        <img src={assets.gemini_icon} alt="" />
                        {loading
                        ? <div className='loader'>
                            <hr />
                            <hr />
                            <hr />
                        </div>
                        : <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    }
                     </div>
                  </div>
                }
                
                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here'/>
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <p className="bottom-info">
                    ChatGPT is a state-of-the-art conversational AI developed by OpenAI, capable of 
                    engaging in natural and contextually relevant conversations across a wide range of topics.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main
