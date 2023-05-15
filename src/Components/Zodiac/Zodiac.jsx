import React, { useEffect, useState } from 'react'
import './Zodiac.scss'
import data from './data'
const Zodiac = (props) => {
    // const day = ['yesterday', 'today', 'tomorrow']
    const [day, setDay] = useState('today')
    const [signs, setSigns] = useState('aries')
    const [res, setRes] = useState(null)
    const handleClickDay = (e) => {
        console.log(e.target.value)
        setDay(e.target.value)
    }
    useEffect(() => {
        try {
            const URL = `https://aztro.sameerkumar.website/?sign=${signs}&day=${day}`
            fetch(URL, {
                method: 'POST',
            }).then(response => response.json())
                .then(json => setRes(json))
        }
        catch (err) {
            console.log(JSON.stringify(err))
        }
        console.log(day, signs)
        console.log(res)
    }, [day, signs])

    return (
        <div className='zodiac'>
            <div className="nav">
                <p>Starlyte</p>
            </div>
            <div className="main">
                <div className="left">
                    <div className="btn">
                        <button value='yesterday' onClick={handleClickDay} className={day === 'yesterday' ? 'selected' : 'notSelected'}>Yesterday</button>
                        <button value='today' onClick={handleClickDay} className={day === 'today' ? 'selected' : 'notSelected'}>Today</button>
                        <button value='tomorrow' onClick={handleClickDay} className={day === 'tomorrow' ? 'selected' : 'notSelected'}>Tomorrow</button>
                    </div>
                    {res ? <div className="content">
                        <p className='sign'>{signs}</p>
                        <p className='dateRange'>{res.date_range}</p>
                        <p className='desc'>{res.description}</p>
                        <div className="extra">
                            <p className='mood'> Mood : {res.mood}</p>
                            <p className='color'>Lucky Colour : {res.color}</p>
                            <p className='number'>Lucky Number : {res.lucky_number}</p>
                            <p className='time'>Lucky Time : {res.lucky_time}</p>
                        </div>
                    </div> : <p>loading</p>}
                </div>
                <div className="right">
                    <div class="circle" style={{ '--total': 12 }}>
                        <button className={`stat ${signs === 'aries' ? 'selected' : 'notSelected'}`} style={{ '--i': 1 }} onClick={() => setSigns('aries')}><img src='zodiacs/aries.svg' alt='aries' /></button>
                        <button className={`stat ${signs === 'taurus' ? 'selected' : 'notSelected'}`} style={{ '--i': 2 }} onClick={() => setSigns('taurus')}><img src='zodiacs/taurus.svg' alt='taurus' /></button>
                        <button className={`stat ${signs === 'gemini' ? 'selected' : 'notSelected'}`} style={{ '--i': 3 }} onClick={() => setSigns('gemini')}><img src='zodiacs/gemini.svg' alt='gemini' /></button>
                        <button className={`stat ${signs === 'cancer' ? 'selected' : 'notSelected'}`} style={{ '--i': 4 }} onClick={() => setSigns('cancer')}><img src='zodiacs/cancer.svg' alt='cancer' /></button>
                        <button className={`stat ${signs === 'leo' ? 'selected' : 'notSelected'}`} style={{ '--i': 5 }} onClick={() => setSigns('leo')}><img src='zodiacs/leo.svg' alt='leo' /></button>
                        <button className={`stat ${signs === 'virgo' ? 'selected' : 'notSelected'}`} style={{ '--i': 6 }} onClick={() => setSigns('virgo')}><img src='zodiacs/virgo.svg' alt='virgo' /></button>
                        <button className={`stat ${signs === 'libra' ? 'selected' : 'notSelected'}`} style={{ '--i': 7 }} onClick={() => setSigns('libra')}><img src='zodiacs/libra.svg' alt='libra' /></button>
                        <button className={`stat ${signs === 'scorpio' ? 'selected' : 'notSelected'}`} style={{ '--i': 8 }} onClick={() => setSigns('scorpio')}><img src='zodiacs/scorpio.svg' alt='scorpio' /></button>
                        <button className={`stat ${signs === 'sagittarius' ? 'selected' : 'notSelected'}`} style={{ '--i': 9 }} onClick={() => setSigns('sagittarius')}><img src='zodiacs/sagittarius.svg' alt='sagittarius' /></button>
                        <button className={`stat ${signs === 'capricorn' ? 'selected' : 'notSelected'}`} style={{ '--i': 10 }} onClick={() => setSigns('capricorn')}><img src='zodiacs/capricorn.svg' alt='capricorn' /></button>
                        <button className={`stat ${signs === 'aquarius' ? 'selected' : 'notSelected'}`} style={{ '--i': 11 }} onClick={() => setSigns('aquarius')}> <img src='zodiacs/aquarius.svg' alt='aquarius' /></button>
                        <button className={`stat ${signs === 'pisces' ? 'selected' : 'notSelected'}`} style={{ '--i': 12 }} onClick={() => setSigns('pisces')}><img src='zodiacs/pisces.svg' alt='pisces' /></button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Zodiac