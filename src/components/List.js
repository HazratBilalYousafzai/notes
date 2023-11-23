import React, { useState } from 'react'
import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";

const List = () => {
    const [active, setActive] = useState(false)
    const [active1, setActive1] = useState(false)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)
    const [active4, setActive4] = useState(false)
    const [active5, setActive5] = useState(false)
    const [active6, setActive6] = useState(false)
    const [active7, setActive7] = useState(false)
    const [active8, setActive8] = useState(false)
    const [active9, setActive9] = useState(false)
    const [active10, setActive10] = useState(false)
    const [active11, setActive11] = useState(false)
    const [active12, setActive12] = useState(false)
    return (
        <>
            <div className='container'>
                {/* h1 heading */}
                <div className="dropdown">
                    <div className='dropdown-title-box'>
                        <span className="dropdown-title" onClick={() => setActive(!active)}> {(active) ? <AiFillCaretDown /> : <AiFillCaretRight />}
                            S.O. Baheel</span>
                    </div>
                    <div className={(active) ? "dropdown-content active" : "dropdown-content"}>
                        {/* h2 heading   */}
                        <div className="dropdown">
                            <div className='dropdown-title-box h2'>
                                <span className="dropdown-title" onClick={() => setActive6(!active6)}> {(active6) ? <AiFillCaretDown /> : <AiFillCaretRight />}
                                    Loan Agreement</span>
                            </div>
                            <div className={(active6) ? "dropdown-content active" : "dropdown-content"}>
                                <p>details!</p>
                            </div>
                        </div>
                        {/* h2 heading   */}
                        <div className="dropdown">
                            <div className='dropdown-title-box'>
                                <span className="dropdown-title" onClick={() => setActive4(!active4)}> {(active4) ? <AiFillCaretDown /> : <AiFillCaretRight />}
                                    Property</span>
                            </div>
                            <div className={(active4) ? "dropdown-content active" : "dropdown-content"}>
                                <p>details!</p>
                            </div>
                        </div>
                        {/* h2 heading   */}
                        <div className="dropdown">
                            <div className='dropdown-title-box '>
                                <span className="dropdown-title" onClick={() => setActive5(!active5)}> {(active5) ? <AiFillCaretDown /> : <AiFillCaretRight />}
                                    Restaurant</span>
                            </div>
                            <div className={(active5) ? "dropdown-content active" : "dropdown-content"}>
                                {/* h3 heading   */}
                                <div className="dropdown">
                                    <div className='dropdown-title-box '>
                                        <span className="dropdown-title" onClick={() => setActive7(!active7)}> {(active7) ? <AiFillCaretDown /> : <AiFillCaretRight />}
                                            W.T.W.</span>
                                    </div>
                                    <div className={(active7) ? "dropdown-content active" : "dropdown-content"}>
                                        {/* h4 heading   */}
                                        <div className="dropdown">
                                            <div className='dropdown-title-box '>
                                                <span className="dropdown-title" onClick={() => setActive10(!active10)}> {(active10) ? <AiFillCaretDown /> : <AiFillCaretRight />}
                                                    France</span>
                                            </div>
                                            <div className={(active10) ? "dropdown-content active" : "dropdown-content"}>
                                                <p>details!</p>
                                            </div>
                                        </div>
                                        {/* h4 heading   */}
                                        <div className="dropdown">
                                            <div className='dropdown-title-box '>
                                                <span className="dropdown-title" onClick={() => setActive11(!active11)}> {(active11) ? <AiFillCaretDown /> : <AiFillCaretRight />}
                                                    Leidse</span>
                                            </div>
                                            <div className={(active11) ? "dropdown-content active" : "dropdown-content"}>
                                                <p>details!</p>
                                            </div>
                                        </div>
                                        {/* h4 heading   */}
                                        <div className="dropdown">
                                            <div className='dropdown-title-box '>
                                                <span className="dropdown-title" onClick={() => setActive12(!active12)}> {(active12) ? <AiFillCaretDown /> : <AiFillCaretRight />}
                                                    Dam</span>
                                            </div>
                                            <div className={(active12) ? "dropdown-content active" : "dropdown-content"}>
                                                <p>details!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* h3 heading   */}
                                <div className="dropdown">
                                    <div className='dropdown-title-box '>
                                        <span className="dropdown-title" onClick={() => setActive8(!active8)}> {(active8) ? <AiFillCaretDown /> : <AiFillCaretRight />}
                                            B.B</span>
                                    </div>
                                    <div className={(active8) ? "dropdown-content active" : "dropdown-content"}>
                                        <p>details!</p>
                                    </div>
                                </div>
                                {/* h3 heading   */}
                                <div className="dropdown">
                                    <div className='dropdown-title-box '>
                                        <span className="dropdown-title" onClick={() => setActive9(!active9)}> {(active9) ? <AiFillCaretDown /> : <AiFillCaretRight />}
                                            Maoz</span>
                                    </div>
                                    <div className={(active9) ? "dropdown-content active" : "dropdown-content"}>
                                        <p>details!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* h1 heading  */}
                <div className="dropdown">
                    <div className='dropdown-title-box'>
                        <span className="dropdown-title" onClick={() => setActive1(!active1)}> {(active1) ? <AiFillCaretDown /> : <AiFillCaretRight />}
                            S.O. Prive</span>
                    </div>
                    <div className={(active1) ? "dropdown-content active" : "dropdown-content"}>
                        <p>details!</p>
                    </div>
                </div>
                {/* h1 heading  */}
                <div className="dropdown">
                    <div className='dropdown-title-box'>
                        <span className="dropdown-title" onClick={() => setActive2(!active2)}> {(active2) ? <AiFillCaretDown /> : <AiFillCaretRight />}
                            J.O. Baheel</span>
                    </div>
                    <div className={(active2) ? "dropdown-content active" : "dropdown-content"}>
                        <p>details!</p>
                    </div>
                </div>
                {/* h1 heading  */}
                <div className="dropdown">
                    <div className='dropdown-title-box'>
                        <span className="dropdown-title" onClick={() => setActive3(!active3)}> {(active3) ? <AiFillCaretDown /> : <AiFillCaretRight />}
                            J.O. Prive</span>
                    </div>
                    <div className={(active3) ? "dropdown-content  active" : "dropdown-content"}>
                        <p>details!</p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default List
